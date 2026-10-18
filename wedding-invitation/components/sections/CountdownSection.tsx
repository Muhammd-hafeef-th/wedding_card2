"use client";
// components/sections/CountdownSection.tsx
import { motion } from "framer-motion";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { VintageFlourish } from "@/components/ui/BotanicalOrnaments";
import { WeddingData } from "@/types";

interface CountdownSectionProps {
  wedding: WeddingData;
}

export default function CountdownSection({ wedding }: CountdownSectionProps) {
  const targetDate = wedding.date || "2026-11-12";
  const targetTime = wedding.time || "05:00 PM";

  return (
    <section
      id="countdown"
      className="relative flex items-center justify-center px-4"
      style={{
        paddingTop: "clamp(3.5rem, 7vh, 5.5rem)",
        paddingBottom: "clamp(4rem, 8vh, 6.5rem)",
      }}
    >
      <div className="container-luxury relative z-10 flex justify-center w-full">
        <motion.div
          className="countdown-card w-full max-w-2xl rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              padding: "clamp(2rem, 4vh, 3.5rem) clamp(0.5rem, 3vw, 2rem)",
            }}
            className="flex flex-col items-center text-center w-full"
          >
            {/* Title - guaranteed one line on all screens */}
            <h2
              className="font-script text-3xl sm:text-4xl md:text-5xl text-[#F5EFEB] whitespace-nowrap"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                lineHeight: 1.4,
                paddingBottom: "4px",
                marginBottom: "clamp(12px, 2vh, 18px)",
              }}
            >
              Until We Say &ldquo;I Do&rdquo;
            </h2>

            {/* Subtitle */}
            <p
              className="font-heading text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D6C58F]"
              style={{
                marginBottom: "clamp(14px, 2.2vh, 20px)",
                lineHeight: 1.5,
              }}
            >
              COUNTING DOWN TO THE CELEBRATION
            </p>

            {/* Line / Divider */}
            <div
              className="flex justify-center w-full"
              style={{
                marginBottom: "clamp(18px, 2.8vh, 26px)",
              }}
            >
              <VintageFlourish color="#D6C58F" width={110} className="opacity-90 block" />
            </div>

            {/* The Countdown Timer */}
            <CountdownTimer date={targetDate} time={targetTime} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
