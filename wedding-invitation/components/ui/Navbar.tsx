"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WeddingData } from "@/types";

interface NavbarProps {
  wedding: WeddingData;
}

export default function Navbar({ wedding }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const brideInit = wedding?.brideFirstName?.[0] || "S";
  const groomInit = wedding?.groomFirstName?.[0] || "A";

  // Format wedding date for navbar
  const formatWeddingDate = () => {
    if (!wedding?.date) return "12 NOVEMBER 2026";
    const parts = wedding.date.split("-");
    if (parts.length === 3 && parts[0].length === 4) {
      const year = parts[0];
      const mIdx = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const monthNames = [
        "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
        "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
      ];
      if (mIdx >= 0 && mIdx < 12) {
        return `${day} ${monthNames[mIdx]} ${year}`;
      }
    }
    return wedding.date;
  };

  const weddingDateText = formatWeddingDate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-4 sm:px-8 transition-all duration-300 pointer-events-none ${
        isScrolled
          ? "py-2.5 bg-[#2B3724]/85 backdrop-blur-md border-b border-[#B89F70]/20 shadow-md"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div
        className="font-script pointer-events-auto text-[#EBDCBA] select-none"
        style={{ fontSize: "1.5rem", letterSpacing: "0.05em", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
      >
        {brideInit} &amp; {groomInit}
      </div>
      <div
        className="font-body uppercase pointer-events-auto text-[#F5EFEB]/80 tracking-[0.25em] select-none text-[9px] sm:text-[10px]"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
      >
        {weddingDateText}
      </div>
    </motion.nav>
  );
}

