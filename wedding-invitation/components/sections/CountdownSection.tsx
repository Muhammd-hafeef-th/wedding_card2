"use client";
// components/sections/CountdownSection.tsx
import { motion } from "framer-motion";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { WeddingData } from "@/types";

interface CountdownSectionProps {
  wedding: WeddingData;
}

export default function CountdownSection({ wedding }: CountdownSectionProps) {
  return (
    <section
      id="countdown"
      className="relative overflow-hidden flex items-center justify-center py-10"
    >
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4 text-center px-8 py-6 rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        style={{
          background: "rgba(58, 74, 50, 0.4)",
          border: "1px solid rgba(245, 239, 235, 0.15)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="font-script text-2xl sm:text-3xl text-[#EBDCBA]">
          Until We Say &ldquo;I Do&rdquo;
        </span>

        {/* Countdown */}
        <CountdownTimer date={wedding.date || "2026-10-01"} time={wedding.time || "15:30"} />
      </motion.div>
    </section>
  );
}
