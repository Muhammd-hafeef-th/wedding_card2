"use client";
// components/sections/OpeningScreen.tsx
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/components/ui/AudioProvider";
import { WeddingData } from "@/types";

interface OpeningScreenProps {
  wedding: WeddingData;
  onOpen: () => void;
  onSkip?: () => void;
}

export default function OpeningScreen({ wedding, onOpen, onSkip }: OpeningScreenProps) {
  const { playMusic } = useAudio();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const watchdogRef = useRef<NodeJS.Timeout | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);

  const brideName = wedding.brideFirstName || "Shifa";
  const groomName = wedding.groomFirstName || "Ajmal";
  const coupleNames = `${brideName} & ${groomName}`;

  // Complete opening and transition to HeroSection
  const handleFinishAndOpen = useCallback(() => {
    if (isFinishing) return;
    setIsFinishing(true);

    if (watchdogRef.current) {
      clearTimeout(watchdogRef.current);
      watchdogRef.current = null;
    }

    setTimeout(() => {
      onOpen();
    }, 450);
  }, [isFinishing, onOpen]);

  // Handle direct skip
  const handleDirectSkip = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      try {
        playMusic();
      } catch {
        // audio skip error ignored
      }
      handleFinishAndOpen();
    },
    [playMusic, handleFinishAndOpen]
  );

  // Monitor video readiness and set up mobile-compliant media attributes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM property enforcement for iOS WebKit & Android Chrome
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");

    const checkReady = () => {
      if (video.readyState >= 2) {
        setIsReady(true);
      }
    };

    // If already buffered
    checkReady();

    video.addEventListener("loadedmetadata", checkReady);
    video.addEventListener("loadeddata", checkReady);
    video.addEventListener("canplay", checkReady);
    video.addEventListener("canplaythrough", checkReady);

    // Fallback timer: if network is slow, allow interaction after 3.5s so user is never locked out
    const fallbackTimer = setTimeout(() => {
      setIsReady(true);
    }, 3500);

    return () => {
      video.removeEventListener("loadedmetadata", checkReady);
      video.removeEventListener("loadeddata", checkReady);
      video.removeEventListener("canplay", checkReady);
      video.removeEventListener("canplaythrough", checkReady);
      clearTimeout(fallbackTimer);
      if (watchdogRef.current) {
        clearTimeout(watchdogRef.current);
      }
    };
  }, []);

  // User taps screen to open invitation
  const handleStartInteraction = useCallback(
    async (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (!isReady || isPlaying || isFinishing) return;

      // 1. Play background wedding music
      try {
        playMusic();
      } catch (err) {
        console.log("Audio play notice:", err);
      }

      // 2. Play the video
      const video = videoRef.current;
      if (!video) {
        handleFinishAndOpen();
        return;
      }

      setIsPlaying(true);

      try {
        video.muted = true;
        video.defaultMuted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Video play interrupted/denied by browser:", err);
            handleFinishAndOpen();
          });
        }
      } catch (err) {
        console.error("Direct video play exception:", err);
        handleFinishAndOpen();
        return;
      }

      // 3. Watchdog fallback: Video is 4.0s. If onEnded does not fire within 4.5s, advance smoothly
      if (watchdogRef.current) clearTimeout(watchdogRef.current);
      watchdogRef.current = setTimeout(() => {
        handleFinishAndOpen();
      }, 4500);
    },
    [isReady, isPlaying, isFinishing, playMusic, handleFinishAndOpen]
  );

  return (
    <motion.div
      className={`intro-fullscreen-container ${isReady && !isPlaying ? "cursor-pointer" : "cursor-default"}`}
      onClick={handleStartInteraction}
      animate={isFinishing ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      {/* 1. HIGH-RES STATIC POSTER: Always present behind video, eliminating blank background */}
      <img
        src="/images/envelope-poster.jpg"
        alt="Wedding Invitation Envelope"
        className="intro-fullscreen-video intro-poster-image select-none"
        draggable={false}
      />

      {/* 2. FULL SCREEN HTML5 VIDEO */}
      <video
        ref={videoRef}
        src="/video/envelope-intro.mp4"
        poster="/images/envelope-poster.jpg"
        playsInline
        muted
        preload="auto"
        onEnded={handleFinishAndOpen}
        className="intro-fullscreen-video relative z-[2]"
      />

      {/* 3. FROSTED GLASS OVERLAY & EDITORIAL TYPOGRAPHY */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="intro-overlay-backdrop flex flex-col items-center justify-center p-6 text-center select-none"
          >
            {/* Top Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-[10px] sm:text-xs tracking-[0.42em] uppercase text-white mb-2 drop-shadow-md font-light"
            >
              WEDDING INVITATION
            </motion.span>

            {/* Couple Names in Calligraphy Script */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-script text-5xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal my-1 sm:my-2 drop-shadow-xl leading-tight"
            >
              {coupleNames}
            </motion.h1>

            {/* Divider line with status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3.5 my-3 sm:my-4"
            >
              <div className="w-10 sm:w-16 h-[1px] bg-white/40" />
              <span className="font-heading text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#EBDCBA] font-medium drop-shadow-sm min-w-[170px]">
                {isReady ? "TAP TO OPEN" : "PREPARING INVITATION..."}
              </span>
              <div className="w-10 sm:w-16 h-[1px] bg-white/40" />
            </motion.div>

            {/* Dynamic Interactive Indicator: Golden Spinner while loading, Glowing Pulse Ring when ready */}
            <div className="mt-1 flex items-center justify-center h-12">
              {!isReady ? (
                <motion.div
                  key="spinner"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="intro-loading-spinner"
                />
              ) : (
                <motion.div
                  key="tap-ring"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    scale: {
                      duration: 2.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <div className="intro-tap-ring">
                    <div className="intro-tap-dot" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Skip Option */}
            <button
              type="button"
              onClick={handleDirectSkip}
              className="absolute bottom-6 right-6 font-body text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white/90 transition-colors cursor-pointer py-1.5 px-3 z-30"
              aria-label="Skip intro to invitation"
            >
              Skip to Invitation &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
