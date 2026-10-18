"use client";
// components/ui/CountdownTimer.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

interface CountdownTimerProps {
  date: string;
  time?: string;
}

export default function CountdownTimer({ date, time }: CountdownTimerProps) {
  const { days, hours, minutes, seconds } = useCountdown(date, time);

  const units = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" }
  ];

  return (
    <div className="grid grid-cols-4 gap-1.5 sm:gap-6 md:gap-9 w-full max-w-[480px] mx-auto">
      {units.map((unit, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center py-2 sm:py-3 px-1 sm:px-2 relative"
          style={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
          }}
        >
          <div className="h-8 sm:h-11 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={unit.value}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-[#F4EBD8]"
                style={{ lineHeight: 1, textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </div>
          <span
            className="font-body uppercase tracking-[0.25em] text-[8px] sm:text-[10px] mt-3.5 sm:mt-4 font-medium text-[#D6C58F]"
          >
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
