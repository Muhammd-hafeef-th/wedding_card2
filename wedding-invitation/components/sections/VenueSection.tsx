"use client";
// components/sections/VenueSection.tsx
import { motion } from "framer-motion";
import { VenueData, WeddingData } from "@/types";
import { VenueEstateSketch, VintageFlourish } from "@/components/ui/BotanicalOrnaments";

interface VenueSectionProps {
  venue: VenueData;
  wedding?: WeddingData;
}

export default function VenueSection({ venue, wedding }: VenueSectionProps) {
  // Groom's Venue Data
  const groomTitle =
    venue.groomVenue?.name?.trim() || "Groom's Residence";

  const groomAddress =
    venue.groomVenue?.address?.trim() ||
    venue.address ||
    "Chakkarakkal, Kannur";

  const groomMapLink =
    venue.groomVenue?.googleMapLink?.trim() || "https://maps.app.goo.gl/j33aP8861WeXgY2n6";

  // Bride's Venue Data
  const brideTitle =
    venue.brideVenue?.name?.trim() || "Bride's Residence";

  const brideAddress =
    venue.brideVenue?.address?.trim() || "Paisayi, Irikkur";

  const brideMapLink =
    venue.brideVenue?.googleMapLink?.trim() ||
    "https://maps.app.goo.gl/f7qoaw8UCJQXjxQ56";

  const dateStr = wedding?.date || "2026-11-12";
  const dateObj = new Date(dateStr);
  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const dateFormatted = !isNaN(dateObj.getTime())
    ? `${String(dateObj.getDate()).padStart(2, "0")} | ${monthNames[dateObj.getMonth()]} | ${dateObj.getFullYear()}`
    : "12 | NOVEMBER | 2026";

  return (
    <section
      id="venue"
      className="relative"
      style={{
        paddingTop: "clamp(1.5rem, 3vh, 2.5rem)",
        paddingBottom: "clamp(2rem, 4vh, 3.5rem)",
      }}
    >
      <style>{`
        .venue-subcard {
          width: 100%;
          border-radius: 1.15rem;
          padding: 1.25rem 1.25rem 1.15rem !important;
          background: transparent !important;
          border: 1px solid rgba(216, 206, 185, 0.28) !important;
          box-shadow: none !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
        }
        .venue-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.05rem, 2.8vw, 1.22rem) !important;
          font-weight: 600 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase !important;
          color: #F5EFEB !important;
          margin: 0 0 0.35rem 0 !important;
          line-height: 1.3 !important;
        }
        .venue-address {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.74rem, 1.8vw, 0.84rem) !important;
          font-weight: 300 !important;
          letter-spacing: 0.08em !important;
          color: #D8CEB9 !important;
          opacity: 0.88 !important;
          margin: 0 0 0.85rem 0 !important;
          line-height: 1.4 !important;
          max-width: 19rem;
        }
        .venue-map-btn {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          text-decoration: none;
          padding: 0.15rem 0.5rem;
          background: transparent;
          border: none;
        }
        .venue-map-text {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.68rem, 1.6vw, 0.75rem) !important;
          letter-spacing: 0.24em !important;
          text-transform: uppercase !important;
          color: #F5EFEB !important;
          font-weight: 500 !important;
          transition: color 0.3s ease;
        }
        .venue-map-bar {
          display: block;
          width: 2rem;
          height: 1.5px;
          background: #D8CEB9;
          opacity: 0.85;
          margin-top: 0.4rem !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .venue-map-btn:hover .venue-map-text {
          color: #F3D98A !important;
        }
        .venue-map-btn:hover .venue-map-bar {
          width: 3.5rem;
          background: #F3D98A;
        }
        .venue-map-btn:hover .venue-map-arrow {
          transform: translate(2px, -2px);
          color: #F3D98A !important;
        }
        .venue-map-arrow {
          transition: transform 0.3s ease, color 0.3s ease;
          color: #D8CEB9;
        }
      `}</style>

      <div className="container-luxury relative z-10 flex justify-center">
        <motion.div
          className="venue-card w-full max-w-[460px] rounded-t-[70px] sm:rounded-t-[120px] md:rounded-t-[160px] rounded-b-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          style={{
            background: "linear-gradient(180deg, #3E4E34 0%, #303D28 100%)",
            border: "1px solid rgba(245, 239, 235, 0.18)",
            boxShadow: "0 18px 48px -10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="venue-content px-4 sm:px-8 pt-9 pb-9 flex flex-col items-center text-center">
            {/* Title in script calligraphy */}
            <h2
              className="font-script text-3xl sm:text-4xl text-[#F5EFEB] mb-1 leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
            >
              The Venues
            </h2>

            {/* Date subtitle */}
            <p className="font-heading text-xs tracking-[0.28em] uppercase text-[#D8CEB9] mb-2.5">
              {dateFormatted}
            </p>

            <VintageFlourish color="#C8BEA8" width={100} className="mb-3 opacity-85" />

            {/* Hand-drawn architectural estate sketch */}
            <div className="w-full max-w-[270px] my-1 px-2 opacity-95">
              <VenueEstateSketch color="#EDE4D2" />
            </div>

            {/* Two Venues Container */}
            <div className="w-full flex flex-col mt-3.5">
              {/* ── 1. Groom's Residence ── */}
              <div
                className="venue-subcard"
                style={{
                  padding: "1.25rem 1.25rem 1.15rem",
                  background: "transparent",
                  border: "1px solid rgba(216, 206, 185, 0.28)",
                  borderRadius: "1.15rem",
                  boxShadow: "none",
                }}
              >
                {/* Residence Category Tag if custom house name */}
                {groomTitle.toLowerCase() !== "groom's residence" && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#D8CEB9",
                      fontWeight: 500,
                      marginBottom: "0.35rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      opacity: 0.9,
                    }}
                  >
                    <span>✦</span> GROOM&apos;S RESIDENCE <span>✦</span>
                  </span>
                )}

                {/* Venue Name */}
                <h3
                  className="venue-title"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.05rem, 2.8vw, 1.22rem)",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#F5EFEB",
                    marginBottom: "0.35rem",
                    lineHeight: 1.3,
                  }}
                >
                  {groomTitle}
                </h3>

                {/* Venue Address */}
                {groomAddress && (
                  <p
                    className="venue-address"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "clamp(0.74rem, 1.8vw, 0.84rem)",
                      fontWeight: 300,
                      letterSpacing: "0.08em",
                      color: "#D8CEB9",
                      opacity: 0.88,
                      marginBottom: "0.85rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {groomAddress}
                  </p>
                )}

                {/* Luxury Open In Maps Button (Image 3 design) */}
                <a
                  href={groomMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venue-map-btn"
                >
                  <span className="venue-map-text">
                    <span>OPEN IN MAPS</span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="venue-map-arrow"
                    >
                      <path d="M7 17l9.2-9.2M17 17V8H8" />
                    </svg>
                  </span>
                  <span className="venue-map-bar" />
                </a>
              </div>

              {/* Decorative Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6rem",
                  width: "100%",
                  maxWidth: "220px",
                  margin: "0.85rem auto",
                  opacity: 0.6,
                }}
              >
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(216, 206, 185, 0.45), transparent)" }} />
                <span style={{ color: "#D8CEB9", fontSize: "0.7rem" }}>❦</span>
                <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, rgba(216, 206, 185, 0.45), transparent)" }} />
              </div>

              {/* ── 2. Bride's Residence ── */}
              <div
                className="venue-subcard"
                style={{
                  padding: "1.25rem 1.25rem 1.15rem",
                  background: "transparent",
                  border: "1px solid rgba(216, 206, 185, 0.28)",
                  borderRadius: "1.15rem",
                  boxShadow: "none",
                }}
              >
                {/* Residence Category Tag if custom house name */}
                {brideTitle.toLowerCase() !== "bride's residence" && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#D8CEB9",
                      fontWeight: 500,
                      marginBottom: "0.35rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      opacity: 0.9,
                    }}
                  >
                    <span>✦</span> BRIDE&apos;S RESIDENCE <span>✦</span>
                  </span>
                )}

                {/* Venue Name */}
                <h3
                  className="venue-title"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(1.05rem, 2.8vw, 1.22rem)",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#F5EFEB",
                    marginBottom: "0.35rem",
                    lineHeight: 1.3,
                  }}
                >
                  {brideTitle}
                </h3>

                {/* Venue Address */}
                {brideAddress && (
                  <p
                    className="venue-address"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "clamp(0.74rem, 1.8vw, 0.84rem)",
                      fontWeight: 300,
                      letterSpacing: "0.08em",
                      color: "#D8CEB9",
                      opacity: 0.88,
                      marginBottom: "0.85rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {brideAddress}
                  </p>
                )}

                {/* Luxury Open In Maps Button (Image 3 design) */}
                <a
                  href={brideMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venue-map-btn"
                >
                  <span className="venue-map-text">
                    <span>OPEN IN MAPS</span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="venue-map-arrow"
                    >
                      <path d="M7 17l9.2-9.2M17 17V8H8" />
                    </svg>
                  </span>
                  <span className="venue-map-bar" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
