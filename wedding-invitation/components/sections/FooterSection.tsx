"use client";
// components/sections/FooterSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { WeddingData } from "@/types";

interface FooterSectionProps {
  wedding: WeddingData;
}

export default function FooterSection({ wedding }: FooterSectionProps) {
  const handleShare = async () => {
    try {
      if (typeof window !== "undefined" && navigator.share) {
        await navigator.share({
          title: `${wedding.brideFirstName || "Ksenia"} & ${wedding.groomFirstName || "Andrey"} — Wedding Invitation`,
          text: `We warmly invite you to celebrate our wedding!`,
          url: window.location.href,
        });
      } else if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        alert("Invitation link copied to clipboard!");
      }
    } catch (e) {
      console.log("Share skipped", e);
    }
  };

  return (
    <footer className="relative pt-6 pb-16 flex flex-col items-center">
      <div className="container-luxury relative z-10 flex flex-col items-center">
        {/* CARD 10: CLOSING FOREST PHOTO CARD "WE CAN'T WAIT TO SEE YOU!" */}
        <motion.div
          className="w-full max-w-[480px] h-[580px] sm:h-[640px] rounded-3xl relative overflow-hidden shadow-2xl flex flex-col justify-end p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          style={{
            border: "1px solid rgba(245, 239, 235, 0.2)",
          }}
        >
          {/* Background image: couple embracing in misty forest with veil */}
          <Image
            src="/images/forest-closing.jpg"
            alt="Bride & Groom in Forest"
            fill
            className="object-cover object-center brightness-75 contrast-105"
            sizes="(max-width: 640px) 100vw, 480px"
          />

          {/* Dark gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 40, 24, 0.2) 0%, rgba(20, 28, 16, 0.4) 40%, rgba(20, 28, 16, 0.88) 100%)",
            }}
          />

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center">
            <p className="font-body text-xs sm:text-sm text-[#F5EFEB] max-w-xs leading-relaxed font-light mb-4 text-shadow">
              You hold a truly cherished place in our lives. On the most meaningful day of our journey, we cannot wait to have you standing beside us!
            </p>

            <h2
              className="font-script text-4xl sm:text-5xl text-[#EBDCBA] mb-6 font-normal leading-tight"
              style={{
                textShadow: "0 2px 14px rgba(0, 0, 0, 0.6)",
              }}
            >
              See You There!
            </h2>

            {/* Share / Copy button */}
            <button
              onClick={handleShare}
              className="btn-pill-outline-cream text-[10px] tracking-[0.25em] py-2.5 px-6 cursor-pointer"
            >
              SHARE INVITATION
            </button>
          </div>
        </motion.div>

        {/* Footer bottom signature */}
        <div className="mt-12 text-center flex flex-col items-center gap-1.5 opacity-80">
          <p className="font-script text-xl sm:text-2xl text-[#EBDCBA]">
            Crafted with love for an unforgettable celebration
          </p>
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50">
            SAVE THE DATE &middot; DIGITAL WEDDING INVITATION
          </p>
        </div>
      </div>
    </footer>
  );
}
