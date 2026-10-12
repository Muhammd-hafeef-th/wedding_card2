"use client";
// components/sections/VenueSection.tsx
import { motion } from "framer-motion";
import { VenueData } from "@/types";
import { VenueEstateSketch, VintageFlourish } from "@/components/ui/BotanicalOrnaments";

interface VenueSectionProps {
  venue: VenueData;
}

export default function VenueSection({ venue }: VenueSectionProps) {
  const venueTitle =
    venue.nikkahVenue?.name ||
    venue.name ||
    "The Grand Estate & Country Club";

  const venueAddress =
    venue.nikkahVenue?.address ||
    venue.address ||
    "120 Royal Meadows Parkway, Riverside Estate";

  const mapLink =
    venue.nikkahVenue?.googleMapLink ||
    venue.googleMapLink ||
    `https://maps.google.com/?q=${encodeURIComponent(venueAddress)}`;

  return (
    <section id="venue" className="section-padding relative">
      <div className="container-luxury relative z-10 flex justify-center">
        <motion.div
          className="venue-card w-full max-w-[480px] rounded-t-[160px] sm:rounded-t-[200px] rounded-b-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          style={{
            background: "linear-gradient(180deg, #3E4E34 0%, #303D28 100%)",
            border: "1px solid rgba(245, 239, 235, 0.18)",
            boxShadow: "0 18px 48px -10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="venue-content px-6 sm:px-10 pt-12 pb-12 flex flex-col items-center text-center">
            {/* Title in script calligraphy */}
            <h2
              className="font-script text-3xl sm:text-4xl text-[#F5EFEB] mb-2 leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
            >
              The Venue
            </h2>

            {/* Date subtitle */}
            <p className="font-heading text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D8CEB9] mb-3">
              01 | OCTOBER | 2026
            </p>

            <VintageFlourish color="#C8BEA8" width={110} className="mb-6 opacity-85" />

            {/* Venue Name */}
            <h3 className="font-heading text-base sm:text-lg tracking-[0.12em] uppercase text-white font-semibold mb-2 max-w-sm">
              {venueTitle}
            </h3>

            {/* Venue Address */}
            <p className="font-body text-xs sm:text-sm text-[#D7CEBA] max-w-xs leading-relaxed font-light mb-6 opacity-90">
              {venueAddress}
            </p>

            {/* Hand-drawn architectural estate sketch */}
            <div className="w-full max-w-[380px] my-4 px-2">
              <VenueEstateSketch color="#EDE4D2" />
            </div>

            {/* Pill button: VIEW ON GOOGLE MAPS */}
            <div className="mt-6">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-cream inline-flex items-center gap-2"
              >
                <span>VIEW ON GOOGLE MAPS</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
