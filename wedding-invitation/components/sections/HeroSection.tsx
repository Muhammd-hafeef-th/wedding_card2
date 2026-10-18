"use client";
// components/sections/HeroSection.tsx
// Luxury Olive-Green & Gold Arch Wedding Invitation — faithful recreation of reference design
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WeddingData, VenueData } from "@/types";

interface HeroSectionProps {
  wedding: WeddingData;
  venue?: VenueData;
}

// ─────────────────────────────────────────────────────────────────────────────
//  Full Invitation Card SVG Layer (Arch Border + Refined Botanicals)
//  Coordinates: 500 × 715 (matches the 5:7.15 stationery card aspect ratio)
//  Arch margins: 34px inset on all sides (Arch width: 432px, height: 647px)
// ─────────────────────────────────────────────────────────────────────────────
function InvitationOrnamentSvg() {
  const gold = "#D6C58F";
  const goldFill = "#D6C58F";

  return (
    <svg
      viewBox="0 0 500 715"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 4,
        overflow: "visible",
      }}
      aria-hidden="true"
    >
      {/* ── 1. The Antique Gold Arch Border ── */}
      {/*
        Top arch: Starts at (34, 180), arches to apex (250, 34), ends at (466, 180)
        Straight right side: (466, 180) to (466, 535)
        Bottom arch: Starts at (466, 535), arches to apex (250, 681), ends at (34, 535)
        Straight left side: (34, 535) to (34, 180)
      */}
      <path
        d="M 34 180 A 216 146 0 0 1 466 180 V 535 A 216 146 0 0 1 34 535 Z"
        stroke={gold}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── 2. Upper-Right Botanical Branch ── */}
      {/*
        Gracefully sweeps along the top-right arch shoulder (around X: 240..470, Y: 25..270).
        Features delicate willow/olive lanceolate leaves (some solid, some with veins)
        and dainty golden berry buds on slender twigs.
      */}
      <g id="botanical-upper-right">
        {/* Main Arching Stem */}
        <path
          d="M 230 46 C 285 36 345 42 396 66 C 435 85 458 116 465 158 C 470 190 465 224 456 258"
          stroke={gold}
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Secondary Upper Branch (reaches into top-right corner margin) */}
        <path
          d="M 365 52 C 395 38 430 32 458 35 C 472 37 482 44 488 52"
          stroke={gold}
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Inner Sprig (curving softly into inner arch margin) */}
        <path
          d="M 432 95 C 424 116 414 135 400 152"
          stroke={gold}
          strokeWidth="0.95"
          strokeLinecap="round"
        />

        {/* Lower Twig Extension */}
        <path
          d="M 464 195 C 478 208 484 225 480 242"
          stroke={gold}
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* ── Leaves along Upper-Right Branch ── */}

        {/* Leaf 1: Near top center, solid, pointing left */}
        <path
          d="M 245 44 C 235 34 218 35 208 40 C 220 48 234 49 245 44 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf 2: Top arch, outlined with midrib, pointing up-left */}
        <path
          d="M 270 41 C 265 26 250 18 238 20 C 248 30 258 38 270 41 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 270 41 Q 252 28 238 20" stroke={gold} strokeWidth="0.75" />

        {/* Leaf 3: Small solid leaf at top branch */}
        <path
          d="M 292 40 C 290 28 278 19 268 18 C 275 28 284 36 292 40 Z"
          fill={goldFill}
          opacity="0.88"
        />

        {/* Leaf 4: Branching leaf outward */}
        <path
          d="M 320 42 C 322 28 314 16 304 12 C 306 24 312 34 320 42 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 320 42 Q 312 24 304 12" stroke={gold} strokeWidth="0.75" />

        {/* Leaf 5: Inward leaf, solid */}
        <path
          d="M 338 45 C 330 56 318 64 306 66 C 318 61 329 54 338 45 Z"
          fill={goldFill}
          opacity="0.92"
        />

        {/* Leaf 6: Upper spray leaf 1 */}
        <path
          d="M 382 45 C 388 32 398 22 410 16 C 404 28 395 38 382 45 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf 7: Upper spray leaf 2 (veined) */}
        <path
          d="M 412 37 C 424 25 438 18 452 14 C 442 26 428 34 412 37 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 412 37 Q 432 25 452 14" stroke={gold} strokeWidth="0.75" />

        {/* Leaf 8: Upper spray tip leaf */}
        <path
          d="M 445 34 C 460 25 476 22 490 22 C 478 32 462 36 445 34 Z"
          fill={goldFill}
          opacity="0.92"
        />

        {/* Leaf 9: Outward corner leaf (veined) */}
        <path
          d="M 425 76 C 445 64 466 60 484 62 C 468 74 446 80 425 76 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 425 76 Q 455 67 484 62" stroke={gold} strokeWidth="0.75" />

        {/* Leaf 10: Inward curving leaf at corner shoulder */}
        <path
          d="M 415 85 C 402 102 388 114 372 120 C 388 111 403 99 415 85 Z"
          fill={goldFill}
          opacity="0.88"
        />

        {/* Leaf 11: Corner shoulder outward leaf */}
        <path
          d="M 448 105 C 468 100 486 102 498 108 C 484 116 466 116 448 105 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf 12: Inward sprig leaf (veined) */}
        <path
          d="M 420 125 C 406 142 390 152 374 156 C 390 146 406 137 420 125 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 420 125 Q 396 140 374 156" stroke={gold} strokeWidth="0.75" />

        {/* Leaf 13: Along vertical edge, pointing out */}
        <path
          d="M 462 140 C 482 142 496 150 504 162 C 488 162 474 154 462 140 Z"
          fill={goldFill}
          opacity="0.85"
        />

        {/* Leaf 14: Along vertical edge, veined, pointing down-out */}
        <path
          d="M 465 170 C 482 178 494 190 498 206 C 484 198 472 186 465 170 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 465 170 Q 482 188 498 206" stroke={gold} strokeWidth="0.75" />

        {/* Leaf 15: Inward leaf on vertical stem */}
        <path
          d="M 458 185 C 445 200 432 208 418 212 C 432 203 446 195 458 185 Z"
          fill={goldFill}
          opacity="0.85"
        />

        {/* Leaf 16: Outward leaf lower */}
        <path
          d="M 462 215 C 478 226 486 240 488 256 C 474 246 466 232 462 215 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf 17: Terminal leaf of upper branch */}
        <path
          d="M 456 250 C 452 268 444 282 432 292 C 440 276 448 262 456 250 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 456 250 Q 444 272 432 292" stroke={gold} strokeWidth="0.75" />

        {/* ── Delicate Berries / Buds on Upper-Right Branch ── */}
        <g fill={gold}>
          {/* Stalk 1 */}
          <line x1="365" y1="52" x2="358" y2="64" stroke={gold} strokeWidth="0.7" />
          <circle cx="357" cy="66" r="2.2" />

          {/* Stalk 2 */}
          <line x1="395" y1="65" x2="390" y2="78" stroke={gold} strokeWidth="0.7" />
          <circle cx="389" cy="80" r="2.0" />

          {/* Stalk 3 */}
          <line x1="442" y1="78" x2="452" y2="70" stroke={gold} strokeWidth="0.7" />
          <circle cx="454" cy="69" r="2.2" />
          <circle cx="460" cy="74" r="1.7" opacity="0.85" />

          {/* Stalk 4 (outer corner) */}
          <line x1="472" y1="92" x2="484" y2="86" stroke={gold} strokeWidth="0.7" />
          <circle cx="486" cy="85" r="2.0" />

          {/* Stalk 5 (mid-side) */}
          <line x1="465" y1="158" x2="476" y2="152" stroke={gold} strokeWidth="0.7" />
          <circle cx="478" cy="151" r="2.2" />

          {/* Stalk 6 (lower spray) */}
          <line x1="458" y1="230" x2="470" y2="236" stroke={gold} strokeWidth="0.7" />
          <circle cx="472" cy="237" r="2.0" />
          <circle cx="478" cy="232" r="1.6" opacity="0.8" />
        </g>
      </g>

      {/* ── 3. Lower-Left Botanical Branch ── */}
      {/*
        Climbs up the lower-left arch shoulder and vertical edge (around X: 20..180, Y: 430..680).
        Features matching graceful willow/olive lanceolate leaves and delicate golden berries.
      */}
      <g id="botanical-lower-left">
        {/* Main Arching Stem */}
        <path
          d="M 210 672 C 160 676 108 665 68 635 C 38 610 28 572 32 525 C 36 480 44 435 52 385"
          stroke={gold}
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Secondary Lower Branch (sweeps into bottom-left corner margin) */}
        <path
          d="M 125 664 C 95 674 62 678 35 670 C 22 666 14 656 10 644"
          stroke={gold}
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* Inner Sprig (curving softly into inner arch margin) */}
        <path
          d="M 58 595 C 68 572 82 550 102 532"
          stroke={gold}
          strokeWidth="0.95"
          strokeLinecap="round"
        />

        {/* Upper Twig Extension */}
        <path
          d="M 40 460 C 26 444 20 425 24 406"
          stroke={gold}
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        {/* ── Leaves along Lower-Left Branch ── */}

        {/* Leaf B1: Near bottom center, solid, pointing right */}
        <path
          d="M 195 674 C 205 684 222 683 232 678 C 220 670 206 669 195 674 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf B2: Bottom arch veined leaf */}
        <path
          d="M 165 672 C 172 688 186 698 200 696 C 188 684 178 676 165 672 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 165 672 Q 183 686 200 696" stroke={gold} strokeWidth="0.75" />

        {/* Leaf B3: Bottom spray leaf, solid */}
        <path
          d="M 135 666 C 138 680 150 690 162 692 C 154 680 144 671 135 666 Z"
          fill={goldFill}
          opacity="0.88"
        />

        {/* Leaf B4: Outward branch leaf (veined) */}
        <path
          d="M 105 668 C 102 684 110 698 122 704 C 118 690 112 678 105 668 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 105 668 Q 114 688 122 704" stroke={gold} strokeWidth="0.75" />

        {/* Leaf B5: Inward leaf near bottom */}
        <path
          d="M 112 654 C 122 642 136 634 150 630 C 136 636 124 644 112 654 Z"
          fill={goldFill}
          opacity="0.92"
        />

        {/* Leaf B6: Lower corner spray leaf 1 */}
        <path
          d="M 72 650 C 65 664 54 675 40 682 C 48 669 58 658 72 650 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf B7: Lower corner spray tip (veined) */}
        <path
          d="M 45 666 C 30 678 15 684 0 688 C 12 676 28 668 45 666 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 45 666 Q 22 678 0 688" stroke={gold} strokeWidth="0.75" />

        {/* Leaf B8: Bottom-left curve outer leaf */}
        <path
          d="M 52 626 C 32 638 12 642 -4 640 C 14 628 34 622 52 626 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf B9: Inward curve leaf (veined) */}
        <path
          d="M 64 615 C 78 596 94 584 112 576 C 96 586 80 599 64 615 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 64 615 Q 88 595 112 576" stroke={gold} strokeWidth="0.75" />

        {/* Leaf B10: Inner sprig leaf, solid */}
        <path
          d="M 76 565 C 92 548 108 538 126 534 C 108 544 92 554 76 565 Z"
          fill={goldFill}
          opacity="0.88"
        />

        {/* Leaf B11: Along left vertical edge, pointing out */}
        <path
          d="M 32 555 C 12 558 -2 552 -12 538 C 4 540 18 546 32 555 Z"
          fill={goldFill}
          opacity="0.85"
        />

        {/* Leaf B12: Vertical edge veined leaf */}
        <path
          d="M 34 515 C 16 505 4 492 0 475 C 14 485 26 498 34 515 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 34 515 Q 16 494 0 475" stroke={gold} strokeWidth="0.75" />

        {/* Leaf B13: Inward leaf on vertical stem */}
        <path
          d="M 38 495 C 52 480 66 470 82 466 C 66 476 52 485 38 495 Z"
          fill={goldFill}
          opacity="0.85"
        />

        {/* Leaf B14: Outward upper leaf */}
        <path
          d="M 38 450 C 22 438 14 424 10 408 C 24 418 32 432 38 450 Z"
          fill={goldFill}
          opacity="0.9"
        />

        {/* Leaf B15: Terminal leaf ascending left side */}
        <path
          d="M 48 405 C 52 386 60 372 74 360 C 64 378 56 392 48 405 Z"
          stroke={gold}
          strokeWidth="1.1"
          fill="none"
        />
        <path d="M 48 405 Q 60 382 74 360" stroke={gold} strokeWidth="0.75" />

        {/* ── Delicate Berries / Buds on Lower-Left Branch ── */}
        <g fill={gold}>
          {/* Stalk B1 */}
          <line x1="140" y1="662" x2="148" y2="650" stroke={gold} strokeWidth="0.7" />
          <circle cx="150" cy="648" r="2.2" />

          {/* Stalk B2 */}
          <line x1="88" y1="645" x2="94" y2="632" stroke={gold} strokeWidth="0.7" />
          <circle cx="96" cy="630" r="2.0" />

          {/* Stalk B3 (lower outer corner) */}
          <line x1="48" y1="656" x2="36" y2="664" stroke={gold} strokeWidth="0.7" />
          <circle cx="34" cy="665" r="2.2" />
          <circle cx="28" cy="660" r="1.7" opacity="0.85" />

          {/* Stalk B4 (inner lower curve) */}
          <line x1="68" y1="588" x2="78" y2="596" stroke={gold} strokeWidth="0.7" />
          <circle cx="80" cy="598" r="2.0" />

          {/* Stalk B5 (mid-side) */}
          <line x1="33" y1="520" x2="20" y2="524" stroke={gold} strokeWidth="0.7" />
          <circle cx="18" cy="525" r="2.2" />

          {/* Stalk B6 (upper left spray) */}
          <line x1="44" y1="440" x2="30" y2="434" stroke={gold} strokeWidth="0.7" />
          <circle cx="28" cy="433" r="2.0" />
          <circle cx="22" cy="438" r="1.6" opacity="0.8" />
        </g>
      </g>
    </svg>
  );
}

// ── Natural Wedding Flower Blossom & Petal SVGs ──
function FlowerBlossomSvg({ size = 20, color = "#D6C58F" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* 5 delicate rounded flower petals */}
      <circle cx="12" cy="7" r="4.2" fill={color} opacity="0.82" />
      <circle cx="16.7" cy="10.5" r="4.2" fill={color} opacity="0.82" />
      <circle cx="15" cy="16.2" r="4.2" fill={color} opacity="0.82" />
      <circle cx="9" cy="16.2" r="4.2" fill={color} opacity="0.82" />
      <circle cx="7.3" cy="10.5" r="4.2" fill={color} opacity="0.82" />
      {/* Flower pistil center */}
      <circle cx="12" cy="12" r="2.4" fill="#F4EBD8" />
      <circle cx="12" cy="12" r="1.3" fill={color} />
    </svg>
  );
}

function FlowerPetalSvg({ size = 18, color = "#D6C58F" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Curved organic petal */}
      <path
        d="M 12 3 C 7 6 4 11 5 16 C 6 20 10 22 13 21 C 17 20 20 16 19 11 C 18 6 15 4 12 3 Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M 12 5 Q 12 13 13 20"
        stroke="#F4EBD8"
        strokeWidth="0.7"
        opacity="0.45"
      />
    </svg>
  );
}

// Gentle falling flowers (sparse & subtle)
const NATURAL_FLOWERS = [
  { type: "blossom", left: "10%", size: 21, duration: 22, delay: 0, opacity: 0.38 },
  { type: "petal", left: "26%", size: 18, duration: 25, delay: 7, opacity: 0.32 },
  { type: "blossom", left: "78%", size: 20, duration: 21, delay: 3, opacity: 0.35 },
  { type: "petal", left: "88%", size: 17, duration: 24, delay: 11, opacity: 0.30 },
  { type: "blossom", left: "52%", size: 19, duration: 23, delay: 15, opacity: 0.28 },
];

// ─────────────────────────────────────────────────────────────────────────────
//  Hero Section Component
// ─────────────────────────────────────────────────────────────────────────────
export default function HeroSection({ wedding, venue }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.08]);
  const scale = useTransform(scrollYProgress, [0, 0.65], [1, 0.97]);

  // ── Wedding Data ────────────────────────────────────────────────────────────
  const brideName = wedding.brideFirstName || "Shifa";
  const brideLast = wedding.brideLastName || "";
  const groomName = wedding.groomFirstName || "Ajmal";
  const groomLast = wedding.groomLastName || "";

  // Venue formatting: smartly split multi-part venue into title and location
  const rawVenue =
    wedding.venue ||
    venue?.name ||
    "Wasava Cliff House, Kannur";
  const venueParts = rawVenue.split(",").map((s) => s.trim()).filter(Boolean);
  const venueMain = venueParts.length > 1 ? venueParts[0] : rawVenue;
  const venueSub =
    venueParts.length > 1
      ? venueParts.slice(1).join(", ")
      : venue?.address || "Kannur";

  // Date parsing — Reception date (11-12-2026: Thursday, 12 November 2026)
  const targetDateStr = wedding.date || "2026-11-12";
  const parseSafeDate = (str: string) => {
    const parts = str.split("-");
    if (parts.length === 3)
      return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return new Date(str);
  };
  const dateObj = parseSafeDate(targetDateStr);
  const dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ];
  const isValid = !isNaN(dateObj.getTime());
  const dayOfWeek = isValid ? dayNames[dateObj.getDay()] : "THURSDAY";
  const dayNum = isValid ? dateObj.getDate() : 12;
  const month = isValid ? monthNames[dateObj.getMonth()] : "NOVEMBER";
  const year = isValid ? dateObj.getFullYear() : 2026;
  const eventTime = wedding.time || "05:00 PM";

  return (
    <section
      ref={ref}
      id="hero"
      className="wedding-hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-main)",
        padding: "clamp(2rem, 4vh, 3.5rem) clamp(1rem, 3vw, 2.5rem) clamp(1.5rem, 3vh, 2.2rem)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ── Gentle Falling Flowers Animation (Clean background, no yellow shade) ── */}
      <div className="hero-flowers-layer" aria-hidden="true">
        {NATURAL_FLOWERS.map((flower, i) => (
          <div
            key={`flower-${i}`}
            className="natural-falling-flower"
            style={
              {
                left: flower.left,
                animationDuration: `${flower.duration}s`,
                animationDelay: `${flower.delay}s`,
                "--flower-opacity": flower.opacity,
              } as React.CSSProperties
            }
          >
            {flower.type === "blossom" ? (
              <FlowerBlossomSvg size={flower.size} />
            ) : (
              <FlowerPetalSvg size={flower.size} />
            )}
          </div>
        ))}
      </div>

      <motion.div
        style={{
          opacity,
          scale,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          position: "relative",
          zIndex: 5,
        }}
      >
        {/* ── The Wedding Card (Stationery Rectangle with Inset Gold Arch) ── */}
        <motion.div
          className="wedding-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* SVG Ornament Layer: Arch Border + Botanical Sprays */}
          <InvitationOrnamentSvg />

          {/* ── Dynamic Typography / Inner Content ── */}
          <div className="card-content-flow">
            {/* 0. The Bismi */}
            <motion.div
              className="inv-bismi"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </motion.div>

            {/* 1. Introductory invitation text */}
            <motion.div
              className="inv-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.9 }}
            >
              <span>TOGETHER WITH THEIR FAMILIES, WE JOYFULLY INVITE YOU</span>
              <span>TO CELEBRATE THE UNION OF</span>
            </motion.div>

            {/* 2. Bride Name */}
            <motion.div
              className="inv-name-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
            >
              <h1 className="inv-person-name">{brideName.toUpperCase()}</h1>
              {brideLast && (
                <p className="inv-surname">{brideLast.toUpperCase()}</p>
              )}
            </motion.div>

            {/* 3. Decorative 'and' */}
            <motion.div
              className="inv-amp-container"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
            >
              <span className="inv-ampersand">and</span>
            </motion.div>

            {/* 4. Groom Name */}
            <motion.div
              className="inv-name-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
            >
              <h2 className="inv-person-name">{groomName.toUpperCase()}</h2>
              {groomLast && (
                <p className="inv-surname">{groomLast.toUpperCase()}</p>
              )}
            </motion.div>

            {/* 5. Request of presence */}
            <motion.div
              className="inv-presence-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9 }}
            >
              <p>REQUEST THE HONOR OF YOUR PRESENCE</p>
              <p>AT THEIR WEDDING RECEPTION</p>
            </motion.div>

            {/* 6. Wedding Date Row */}
            <motion.div
              className="inv-date-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.9 }}
            >
              <div className="inv-date-side">
                <span className="inv-date-word">{dayOfWeek}</span>
                <span className="inv-date-sub">{eventTime}</span>
              </div>
              <span className="inv-date-number">{dayNum}</span>
              <div className="inv-date-side">
                <span className="inv-date-word">{month}</span>
                <span className="inv-date-sub">{year}</span>
              </div>
            </motion.div>

            {/* 7. Venue */}
            <motion.div
              className="inv-venue-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.9 }}
            >
              <p className="inv-venue-tag">RECEPTION AT</p>
              <p className="inv-venue-main">{venueMain.toUpperCase()}</p>
              {venueSub && <p className="inv-venue-sub">{venueSub.toUpperCase()}</p>}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator on right side ── */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hero-scroll-text">SCROLL</span>
        <div className="hero-scroll-track">
          <motion.div
            className="hero-scroll-thumb"
            animate={{ y: [0, 26, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* ───────────── Scoped Component Styles ───────────── */}
      <style>{`
        /* ── Invitation Card Container ── */
        .wedding-card {
          position: relative;
          aspect-ratio: 5 / 7.15;
          background: transparent;
          box-shadow: none;
          overflow: visible;
          flex-shrink: 0;
          container-type: inline-size;

          /* Mobile default (< 640px): larger and more immersive */
          width: min(95vw, 410px, calc(86vh * 5 / 7.15));
          max-height: 88vh;
        }

        /* Tablet size (640px to 1023px): significantly larger on iPad / tablets */
        @media (min-width: 640px) and (max-width: 1023px) {
          .wedding-card {
            width: min(78vw, 590px, calc(84vh * 5 / 7.15));
            max-height: 85vh;
          }
        }

        /* Laptop & Desktop (1024px+): strictly unchanged */
        @media (min-width: 1024px) {
          .wedding-card {
            width: clamp(480px, 36vw, 520px);
            max-height: 750px;
          }
        }

        /* ── Content Flow Column ── */
        .card-content-flow {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          /* Comfortable padding matching the inner arch boundaries */
          padding: 12% 10% 11%;
          color: #F4EBD8;
          box-sizing: border-box;
        }

        /* ── 0. The Bismi ── */
        .inv-bismi {
          font-family: 'Amiri', 'Traditional Arabic', 'Scheherazade New', 'Cormorant Garamond', serif;
          font-size: clamp(0.95rem, 4.2cqi, 1.45rem);
          color: #D6C58F;
          margin-bottom: clamp(0.7rem, 3.2cqi, 1.4rem);
          line-height: 1.4;
          letter-spacing: 0.02em;
          direction: rtl;
        }

        /* ── 1. Intro Text ── */
        .inv-intro {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(0.52rem, 2.2cqi, 0.68rem);
          line-height: 1.7;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #F4EBD8;
          opacity: 0.9;
          margin-bottom: clamp(0.85rem, 3.8cqi, 1.7rem);
        }

        /* ── 2 & 4. Name Groups ── */
        .inv-name-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
        }
        .inv-person-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 200;
          font-size: clamp(2.15rem, 9.4cqi, 3.1rem);
          line-height: 1.05;
          letter-spacing: 0.16em;
          color: #F4EBD8;
          margin: 0;
          text-align: center;
        }
        .inv-surname {
          font-family: 'Cormorant Garamond', 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(0.75rem, 3.2cqi, 0.96rem);
          letter-spacing: 0.32em;
          line-height: 1.6;
          color: #D6C58F;
          text-transform: uppercase;
          margin: clamp(0.1rem, 0.5cqi, 0.22rem) 0 0 0;
        }

        /* ── 3. 'and' ── */
        .inv-amp-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: clamp(0.25rem, 1.1cqi, 0.55rem) 0;
          line-height: 1;
        }
        .inv-ampersand {
          font-family: 'Cormorant Garamond', 'Playfair Display', serif;
          font-style: italic;
          font-weight: 300;
          font-size: clamp(1.4rem, 6.2cqi, 2.05rem);
          line-height: 1;
          color: #D6C58F;
          display: inline-block;
        }

        /* ── 5. Presence Block ── */
        .inv-presence-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(0.46rem, 1.9cqi, 0.6rem);
          line-height: 1.65;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #D6C58F;
          margin-top: clamp(0.85rem, 3.8cqi, 1.7rem);
          margin-bottom: clamp(0.85rem, 3.8cqi, 1.7rem);
        }

        /* ── 6. Date Row ── */
        .inv-date-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.4rem, 2cqi, 0.75rem);
          margin-top: clamp(0.8rem, 3.6cqi, 1.65rem);
          margin-bottom: clamp(0.8rem, 3.6cqi, 1.65rem);
        }
        .inv-date-side {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
        }
        .inv-date-word {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(0.54rem, 2.3cqi, 0.72rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #D6C58F;
        }
        .inv-date-sub {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(0.44rem, 1.9cqi, 0.58rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #F4EBD8;
          opacity: 0.85;
        }
        .inv-date-number {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(1.6rem, 7.2cqi, 2.35rem);
          line-height: 1;
          color: #F4EBD8;
          letter-spacing: 0.02em;
          margin: 0 clamp(0.2rem, 1cqi, 0.4rem);
        }

        /* ── 7. Venue Block ── */
        .inv-venue-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          margin-top: clamp(0.8rem, 3.6cqi, 1.65rem);
        }
        .inv-venue-tag {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(0.48rem, 2cqi, 0.62rem);
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #D6C58F;
          opacity: 0.9;
          margin-bottom: clamp(0.2rem, 0.9cqi, 0.45rem);
        }
        .inv-venue-main {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: clamp(0.56rem, 2.4cqi, 0.74rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #F4EBD8;
          line-height: 1.6;
          margin: 0;
        }
        .inv-venue-sub {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          font-size: clamp(0.5rem, 2.1cqi, 0.66rem);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #D6C58F;
          line-height: 1.5;
          margin: 0;
        }

        /* ── Scroll Indicator on right ── */
        .hero-scroll-indicator {
          position: absolute;
          right: clamp(1rem, 3.5vw, 2.5rem);
          bottom: clamp(2rem, 7vh, 4.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 25;
          pointer-events: none;
        }
        .hero-scroll-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #D6C58F;
          opacity: 0.75;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .hero-scroll-track {
          width: 1px;
          height: 44px;
          background: rgba(214, 197, 143, 0.2);
          position: relative;
          overflow: hidden;
        }
        .hero-scroll-thumb {
          width: 1px;
          height: 18px;
          background: #D6C58F;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* ── Gentle Falling Flowers Animation (No yellow shade/glow) ── */
        .hero-flowers-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .natural-falling-flower {
          position: absolute;
          top: -30px;
          pointer-events: none;
          animation: naturalFlowerDrift infinite linear;
          will-change: transform, opacity;
        }

        @keyframes naturalFlowerDrift {
          0% {
            transform: translateY(-30px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          12% {
            opacity: var(--flower-opacity, 0.35);
          }
          40% {
            transform: translateY(38vh) translateX(22px) rotate(45deg);
          }
          72% {
            transform: translateY(72vh) translateX(-18px) rotate(90deg);
          }
          88% {
            opacity: var(--flower-opacity, 0.35);
          }
          100% {
            transform: translateY(105vh) translateX(14px) rotate(140deg);
            opacity: 0;
          }
        }

        /* ── Small Mobile Adjustments (<360px) ── */
        @media (max-width: 360px) {
          .wedding-card {
            width: 94vw;
          }
          .inv-person-name {
            letter-spacing: 0.1em;
          }
        }
      `}</style>
    </section>
  );
}