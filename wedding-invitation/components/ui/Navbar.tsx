"use client";
import { motion } from "framer-motion";
import { WeddingData } from "@/types";

interface NavbarProps {
  wedding: WeddingData;
}

export default function Navbar({ wedding }: NavbarProps) {
  const brideInit = wedding?.brideFirstName?.[0] || "К";
  const groomInit = wedding?.groomFirstName?.[0] || "А";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-40 flex justify-between items-center pointer-events-none px-4 sm:px-8 py-3.5"
      style={{
        background: "linear-gradient(180deg, rgba(30, 40, 24, 0.75) 0%, transparent 100%)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        className="font-script pointer-events-auto text-[#EBDCBA]"
        style={{ fontSize: "1.6rem", letterSpacing: "0.05em" }}
      >
        {brideInit} &amp; {groomInit}
      </div>
      <div
        className="font-body uppercase pointer-events-auto text-[#F5EFEB]/70"
        style={{ fontSize: "9px", letterSpacing: "0.3em" }}
      >
        save the date
      </div>
    </motion.nav>
  );
}
