"use client";
// components/sections/HeroSection.tsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { WeddingData, VenueData } from "@/types";
import {
  BotanicalHeartWreath,
  CameoOvalWreath,
  VintageFlourish,
} from "@/components/ui/BotanicalOrnaments";

interface HeroSectionProps {
  wedding: WeddingData;
  venue?: VenueData;
}

export default function HeroSection({ wedding }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 0.97]);

  const targetDateStr = wedding.nikkahDate || wedding.date;
  const dateObj = new Date(targetDateStr || "2026-10-01");

  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const dayNum = String(dateObj.getDate() || 1).padStart(2, "0");
  const month = monthNames[dateObj.getMonth()] || "OCTOBER";
  const year = dateObj.getFullYear() || 2026;
  const datePiped = `${dayNum} | ${month} | ${year}`;

  const brideName = wedding.brideFirstName || "Ksenia";
  const groomName = wedding.groomFirstName || "Andrey";
  const coupleNames = `${brideName} & ${groomName}`;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-8 pb-16 px-4"
      style={{ background: "transparent" }}
    >
      <motion.div
        className="relative z-10 w-full max-w-[500px] flex flex-col items-center"
        style={{ opacity, scale }}
      >
        {/* Subtle Top Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-center text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/70 mb-5 px-3"
        >
          <span>WEDDING INVITATION</span>
          <span>SAVE THE DATE</span>
        </motion.div>

        {/* MAIN LUXURY ARCHED INVITATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full rounded-t-[180px] sm:rounded-t-[220px] rounded-b-[40px] px-6 sm:px-10 pt-12 pb-14 flex flex-col items-center text-center shadow-2xl relative"
          style={{
            background: "linear-gradient(180deg, #F9F6F0 0%, #F3EDE3 50%, #ECE3D5 100%)",
            border: "1px solid rgba(52, 64, 42, 0.16)",
            color: "#34402A",
            boxShadow: "0 22px 60px -15px rgba(18, 25, 14, 0.45)",
          }}
        >
          {/* Subtle interior gold border line */}
          <div
            className="absolute inset-2.5 rounded-t-[170px] sm:rounded-t-[210px] rounded-b-[32px] pointer-events-none"
            style={{ border: "1px dashed rgba(80, 100, 65, 0.25)" }}
          />

          {/* 1. Header Wreath with Wedding Day & Names */}
          <div className="relative flex flex-col items-center justify-center my-3 w-full">
            <BotanicalHeartWreath size={220} color="#38462F" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
              <span
                className="font-script text-3xl sm:text-4xl text-[#34402A] leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}
              >
                Wedding Day
              </span>
              <h1 className="font-heading text-base sm:text-lg text-[#34402A] tracking-[0.08em] mt-1 font-semibold">
                {coupleNames}
              </h1>
              <span className="font-body text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#546845] mt-1 font-medium">
                {datePiped}
              </span>
            </div>
          </div>

          <VintageFlourish color="#5A6D4B" width={110} className="my-4 opacity-80" />

          {/* 2. Cameo Oval Portrait Frame */}
          <div className="relative w-48 h-60 sm:w-52 sm:h-66 my-3 flex items-center justify-center">
            {/* The SVG Laurel Wreath */}
            <CameoOvalWreath className="absolute inset-0 w-full h-full pointer-events-none z-20" color="#48593C" />

            {/* Oval Portrait Photo */}
            <div
              className="relative w-[130px] h-[175px] sm:w-[145px] sm:h-[195px] overflow-hidden rounded-[50%]"
              style={{
                boxShadow: "inset 0 0 12px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src={wedding.bridePhotoUrl || "/images/cameo-portrait.jpg"}
                alt="Bride & Groom"
                fill
                className="object-cover object-center grayscale contrast-105"
                sizes="(max-width: 640px) 150px, 180px"
                priority
              />
            </div>
          </div>

          {/* 3. Welcome Message */}
          <h2
            className="font-script text-3xl sm:text-4xl text-[#34402A] mt-5 mb-3 font-normal leading-tight"
            style={{ textShadow: "0 1px 2px rgba(255,255,255,0.7)" }}
          >
            Dear Family &amp; Friends!
          </h2>

          <p className="font-body text-xs sm:text-sm text-[#4E5E42] max-w-xs leading-relaxed font-light mb-6">
            {wedding.invitationText ||
              "Together with our families, we warmly invite you to celebrate our wedding. We would be truly honored to have you share this unforgettable day with us."}
          </p>

          <VintageFlourish color="#5A6D4B" width={100} className="my-2" />

          {/* 4. Save the Date Subtitle */}
          <div className="mt-4 mb-2 flex flex-col items-center">
            <span className="font-script text-2xl sm:text-3xl text-[#34402A]">
              Save the Date
            </span>
            <span className="font-body text-[11px] text-[#556948] italic mt-1">
              Where our forever begins
            </span>
            <span className="font-heading text-xs sm:text-sm tracking-[0.25em] uppercase text-[#34402A] font-semibold mt-1">
              {datePiped}
            </span>
          </div>

          <VintageFlourish color="#5A6D4B" width={140} className="mt-4 opacity-80" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 flex flex-col items-center gap-1.5 opacity-75"
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/70">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/60 text-xs"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}