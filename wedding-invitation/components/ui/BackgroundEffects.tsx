"use client";
import { motion } from "framer-motion";

const floatingParticles = [
  { left: "12%", top: "18%", size: 3, delay: 0, duration: 14 },
  { left: "82%", top: "12%", size: 3.5, delay: 2, duration: 16 },
  { left: "22%", top: "68%", size: 2.2, delay: 4, duration: 11 },
  { left: "72%", top: "58%", size: 3, delay: 1, duration: 15 },
  { left: "38%", top: "28%", size: 2.5, delay: 5, duration: 12 },
  { left: "58%", top: "78%", size: 3.2, delay: 3, duration: 14 },
  { left: "14%", top: "48%", size: 2, delay: 6, duration: 17 },
  { left: "88%", top: "42%", size: 3, delay: 2.5, duration: 13 },
  { left: "28%", top: "88%", size: 2.8, delay: 7, duration: 15 },
  { left: "78%", top: "82%", size: 2.4, delay: 0.5, duration: 16 },
  { left: "48%", top: "8%", size: 2, delay: 4.5, duration: 12 },
  { left: "6%", top: "82%", size: 3.2, delay: 1.5, duration: 14 },
];

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingParticles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            background: "#EBDCBA",
            left: p.left,
            top: p.top,
            opacity: 0,
            boxShadow: "0 0 6px rgba(235, 220, 186, 0.6)",
          }}
          animate={{
            y: [0, -80, -160],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
