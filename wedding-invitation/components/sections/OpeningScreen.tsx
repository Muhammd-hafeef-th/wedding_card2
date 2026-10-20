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

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);

  const brideName = wedding.brideFirstName || "Shifa";
  const groomName = wedding.groomFirstName || "Ajmal";
  const coupleNames = `${brideName} & ${groomName}`;

  // Start video playback & website background music on user click
  const handleStartInteraction = useCallback(async () => {
    if (isPlaying || isFinishing) return;

    // 1. Play the website's background music track
    try {
      playMusic();
    } catch (err) {
      console.log("Audio play error", err);
    }

    // 2. Play the video in full screen
    if (videoRef.current) {
      try {
        videoRef.current.muted = true; // Video itself stays strictly muted
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Video play failed:", err);
        handleFinishAndOpen();
      }
    }
  }, [isPlaying, isFinishing, playMusic]);

  // When video ends, smoothly transition to the main invitation / hero section
  const handleFinishAndOpen = useCallback(() => {
    if (isFinishing) return;
    setIsFinishing(true);

    setTimeout(() => {
      onOpen();
    }, 500);
  }, [isFinishing, onOpen]);

  // Skip directly to invitation
  const handleDirectSkip = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      try {
        playMusic();
      } catch {
        // ignore
      }
      handleFinishAndOpen();
    },
    [playMusic, handleFinishAndOpen]
  );

  // Force painting first frame on load
  const handleVideoReady = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime === 0) {
        videoRef.current.currentTime = 0.01;
      }
    }
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="intro-fullscreen-container"
      onClick={handleStartInteraction}
      animate={isFinishing ? { opacity: 0, scale: 1.02 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* FULL SCREEN / FULL HEIGHT VIDEO */}
      <video
        ref={videoRef}
        src="/video/envelope-intro.mp4"
        playsInline
        muted // Strictly muted
        preload="auto"
        onLoadedData={handleVideoReady}
        onCanPlay={handleVideoReady}
        onEnded={handleFinishAndOpen}
        className="intro-fullscreen-video"
      />

      {/* OVERLAY MATCHING IMAGE 3 (Initial Frame & Loading State) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="intro-overlay-backdrop flex flex-col items-center justify-center p-6 text-center select-none"
          >
            {/* 1. WEDDING INVITATION */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-[10px] sm:text-xs tracking-[0.42em] uppercase text-white mb-2 drop-shadow-md font-light"
            >
              WEDDING INVITATION
            </motion.span>

            {/* 2. Couple Names in Calligraphy Script */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-script text-5xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-normal my-1 sm:my-2 drop-shadow-xl leading-tight"
            >
              {coupleNames}
            </motion.h1>

            {/* 3. Divider line with TAP TO OPEN */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3.5 my-3 sm:my-4"
            >
              <div className="w-10 sm:w-16 h-[1px] bg-white/40" />
              <span className="font-heading text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-[#D7CEBA] font-medium drop-shadow-sm">
                {isVideoLoaded ? "TAP TO OPEN" : "PREPARING INVITATION..."}
              </span>
              <div className="w-10 sm:w-16 h-[1px] bg-white/40" />
            </motion.div>

            {/* 4. Circular Tap Indicator with Center Dot */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.08, 1], opacity: 1 }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mt-1"
            >
              <div className="intro-tap-ring">
                <div className="intro-tap-dot" />
              </div>
            </motion.div>

            {/* 5. Skip Option */}
            <button
              type="button"
              onClick={handleDirectSkip}
              className="absolute bottom-6 right-6 font-body text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white/85 transition-colors cursor-pointer py-1.5 px-3 z-30"
            >
              Skip to Invitation &rarr;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
