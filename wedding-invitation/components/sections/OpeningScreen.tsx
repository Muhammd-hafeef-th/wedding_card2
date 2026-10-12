"use client";
// components/sections/OpeningScreen.tsx
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/components/ui/AudioProvider";
import { WeddingData } from "@/types";
import { BotanicalHeartWreath, WaxSealMonogram } from "@/components/ui/BotanicalOrnaments";

interface OpeningScreenProps {
  wedding: WeddingData;
  onOpen: () => void;
  onSkip?: () => void;
}

export default function OpeningScreen({ wedding, onOpen, onSkip }: OpeningScreenProps) {
  const { playMusic } = useAudio();
  const [isOpening, setIsOpening] = useState(false);

  const brideName = wedding.brideFirstName || "Ksenia";
  const groomName = wedding.groomFirstName || "Andrey";
  const coupleNames = `${brideName} & ${groomName}`;
  const coupleInitials = `${brideName[0] || "K"}${groomName[0] || "A"}`;

  const dateObj = new Date(wedding.date || "2026-10-01");
  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const dayNum = String(dateObj.getDate() || 1).padStart(2, "0");
  const month = monthNames[dateObj.getMonth()] || "OCTOBER";
  const year = dateObj.getFullYear() || 2026;
  const datePiped = `${dayNum} | ${month} | ${year}`;

  const handleOpenInvitation = useCallback(() => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      playMusic();
    } catch (e) {
      console.log("Audio skipped", e);
    }

    setTimeout(() => {
      onOpen();
    }, 1300);
  }, [isOpening, onOpen, playMusic]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 overflow-hidden select-none"
      style={{
        background: "radial-gradient(circle at 50% 35%, #3D4C33 0%, #25311F 75%, #1C2617 100%)",
      }}
    >
      {/* Background foliage ambient blur */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 40%, rgba(138, 168, 115, 0.3) 0%, transparent 65%)",
        }}
      />

      {/* Top Editorial Note */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-6"
      >
        <span className="font-heading text-xs sm:text-sm tracking-[0.35em] uppercase text-white/80 block mb-1">
          WEDDING INVITATION
        </span>
        <span className="font-script text-2xl sm:text-3xl text-[#EBDCBA] italic">
          Two souls, one beautiful journey
        </span>
      </motion.div>

      {/* THE 3D ENVELOPE INTERACTIVE CONTAINER */}
      <div
        className="relative z-20 w-full max-w-[360px] sm:max-w-[400px] h-[360px] sm:h-[400px] flex items-center justify-center cursor-pointer"
        onClick={handleOpenInvitation}
      >
        {/* The Insert Arched Card that slides up */}
        <motion.div
          className="absolute z-10 w-[280px] sm:w-[320px] rounded-t-[140px] pt-6 pb-10 px-4 text-center shadow-lg"
          style={{
            background: "linear-gradient(180deg, #F8F4EE 0%, #EFE8DE 100%)",
            border: "1px solid rgba(52, 64, 42, 0.18)",
            bottom: 40,
          }}
          animate={
            isOpening
              ? { y: -140, scale: 1.05, opacity: 1 }
              : { y: 0, scale: 1, opacity: 0.95 }
          }
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative flex flex-col items-center justify-center">
            <BotanicalHeartWreath size={190} color="#34402A" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
              <span className="font-script text-3xl text-[#34402A]">
                Wedding Day
              </span>
              <span className="font-heading text-sm text-[#34402A] tracking-wider mt-0.5 font-semibold">
                {coupleNames}
              </span>
              <span className="font-body text-[8px] tracking-[0.25em] uppercase text-[#546845] mt-1 font-medium">
                {datePiped}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Envelope Body / Pocket */}
        <div
          className="absolute bottom-6 z-20 w-[320px] sm:w-[360px] h-[220px] rounded-b-2xl shadow-2xl flex flex-col items-center justify-end pb-4"
          style={{
            background: "linear-gradient(180deg, #EFE7DA 0%, #E2D7C5 100%)",
            border: "1px solid rgba(180, 160, 130, 0.35)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Triangular Top Flap with 3D open animation */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-28 origin-top"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 100% 0)",
              background: "linear-gradient(180deg, #E2D7C5 0%, #D5C8B4 100%)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
            animate={isOpening ? { rotateX: 180, opacity: 0.3 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Wax Seal Monogram */}
          <motion.div
            className="relative z-30 -mt-10 mb-4"
            animate={isOpening ? { scale: 0.8, opacity: 0 } : { scale: [1, 1.04, 1] }}
            transition={{ duration: isOpening ? 0.3 : 2.5, repeat: isOpening ? 0 : Infinity }}
          >
            <WaxSealMonogram monogram={coupleInitials} size={58} />
          </motion.div>

          <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#6E5D42] mb-1">
            OFFICIAL INVITATION
          </span>
        </div>
      </div>

      {/* Button to Open */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-20 mt-6 flex flex-col items-center gap-3"
      >
        <button
          onClick={handleOpenInvitation}
          disabled={isOpening}
          className="btn-pill-cream text-xs tracking-[0.25em] py-3.5 px-8 cursor-pointer shadow-lg"
        >
          {isOpening ? "OPENING..." : "OPEN INVITATION"}
        </button>

        {onSkip && (
          <button
            onClick={onSkip}
            className="text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white/80 transition-colors cursor-pointer mt-1"
          >
            Skip to Invitation
          </button>
        )}
      </motion.div>
    </div>
  );
}
