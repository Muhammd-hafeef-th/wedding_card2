"use client";
// components/sections/FooterSection.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { WeddingData } from "@/types";

interface FooterSectionProps {
  wedding: WeddingData;
}

export default function FooterSection({ wedding }: FooterSectionProps) {
  const handleShare = async () => {
    try {
      if (typeof window !== "undefined" && navigator.share) {
        await navigator.share({
          title: `${wedding.brideFirstName || "Shifa"} & ${wedding.groomFirstName || "Ajmal"} — Wedding Invitation`,
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
    <footer className="footer-wrap">
      <div className="footer-content">
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
        >
          {/* 1. Arabic Calligraphy blessing: Barakallahu Lakuma */}
          <div
            className="footer-arabic"
            dir="rtl"
          >
            بَارَكَ اللهُ لَكُمَا
          </div>

          {/* 2. With Love */}
          <p className="footer-with-love">
            With Love,
          </p>

          {/* 3. Subtitle / Quote */}
          <p className="footer-quote">
            Two hearts, one soul, a lifetime of love.
          </p>

          {/* 4. Couple Names in Calligraphy Script */}
          <h2 className="footer-names">
            {wedding.brideFirstName || "Shifa"} &amp; {wedding.groomFirstName || "Ajmal"} .
          </h2>

          {/* 5. Date & Place info line */}
          <p className="footer-meta">
            12 &bull; NOVEMBER &bull; 2026 &bull; WEDDING &bull; KANNUR
          </p>

          {/* 6. Action Buttons */}
          <div className="footer-btn-group">
            <button
              type="button"
              onClick={handleShare}
              className="footer-btn footer-btn-primary"
            >
              SHARE INVITATION
            </button>

            <Link href="/admin" className="footer-btn footer-btn-secondary">
              ADMIN PANEL
            </Link>
          </div>

          {/* 7. Subtle Divider */}
          <div className="footer-divider" />

          {/* 8. Copyright & Credit in two lines */}
          <div className="footer-credits-wrap">
            <p className="footer-credits-line">
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
            <p className="footer-credits-line">
              DEVELOPED BY{" "}
              <a
                href="https://hafeef-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credits-link"
              >
                HAFEEF
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
