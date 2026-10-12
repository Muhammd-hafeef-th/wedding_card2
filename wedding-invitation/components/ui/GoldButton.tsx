"use client";
// components/ui/GoldButton.tsx
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline" | "cream";
}

export default function GoldButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  size = "md",
  variant = "filled",
}: GoldButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2 text-[10px]",
    md: "px-8 py-3 text-xs",
    lg: "px-10 py-3.5 text-xs",
  };

  if (variant === "cream") {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={`btn-pill-cream ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  if (variant === "outline") {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={`btn-pill-outline-cream ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`btn-pill-dark ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
