// components/ui/BotanicalOrnaments.tsx
// High-fidelity vintage botanical engravings, wreaths, architectural sketches, and seals
import React from "react";

// 1. Botanical Heart Wreath for "Wedding Day" envelope insert
export function BotanicalHeartWreath({ className = "", color = "#4A5B3D", size = 260 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.9}
      viewBox="0 0 300 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left Heart Vine */}
      <path
        d="M 150 240 C 110 210 30 160 30 95 C 30 45 75 25 115 45 C 135 55 145 75 150 90"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right Heart Vine */}
      <path
        d="M 150 240 C 190 210 270 160 270 95 C 270 45 225 25 185 45 C 165 55 155 75 150 90"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Foliage leaves along left side */}
      <g stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.12">
        <path d="M 60 70 C 50 60 40 68 45 80 C 50 82 58 78 60 70 Z" />
        <path d="M 40 110 C 25 105 25 120 35 125 C 40 125 42 118 40 110 Z" />
        <path d="M 50 145 C 35 150 42 165 55 160 C 58 155 56 148 50 145 Z" />
        <path d="M 80 185 C 70 195 82 208 92 198 C 94 190 88 185 80 185 Z" />
        <path d="M 115 220 C 110 230 124 238 130 228 C 130 222 122 218 115 220 Z" />
        {/* Inner leaves */}
        <path d="M 90 45 C 95 30 110 35 105 48 C 100 52 94 50 90 45 Z" />
        <path d="M 125 55 C 135 45 145 52 140 64 C 134 66 128 62 125 55 Z" />
        <path d="M 80 95 C 70 92 72 105 82 105 C 88 103 86 96 80 95 Z" />
      </g>

      {/* Foliage leaves along right side */}
      <g stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.12">
        <path d="M 240 70 C 250 60 260 68 255 80 C 250 82 242 78 240 70 Z" />
        <path d="M 260 110 C 275 105 275 120 265 125 C 260 125 258 118 260 110 Z" />
        <path d="M 250 145 C 265 150 258 165 245 160 C 242 155 244 148 250 145 Z" />
        <path d="M 220 185 C 230 195 218 208 208 198 C 206 190 212 185 220 185 Z" />
        <path d="M 185 220 C 190 230 176 238 170 228 C 170 222 178 218 185 220 Z" />
        {/* Inner leaves */}
        <path d="M 210 45 C 205 30 190 35 195 48 C 200 52 206 50 210 45 Z" />
        <path d="M 175 55 C 165 45 155 52 160 64 C 166 66 172 62 175 55 Z" />
        <path d="M 220 95 C 230 92 228 105 218 105 C 212 103 214 96 220 95 Z" />
      </g>

      {/* Tiny flower buds */}
      <circle cx="150" cy="38" r="3" fill={color} opacity="0.8" />
      <circle cx="150" cy="245" r="3.5" fill={color} opacity="0.8" />
      <circle cx="78" cy="34" r="2.5" fill={color} opacity="0.7" />
      <circle cx="222" cy="34" r="2.5" fill={color} opacity="0.7" />
      <circle cx="28" cy="95" r="2.5" fill={color} opacity="0.7" />
      <circle cx="272" cy="95" r="2.5" fill={color} opacity="0.7" />
    </svg>
  );
}

// 2. Cameo Oval Laurel Wreath for Couple Portrait (Card 2)
export function CameoOvalWreath({ className = "", color = "#3E4E34" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer oval guide */}
      <ellipse cx="160" cy="200" rx="146" ry="186" stroke={color} strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
      <ellipse cx="160" cy="200" rx="140" ry="180" stroke={color} strokeWidth="1.5" opacity="0.7" />

      {/* Botanical branches encircling oval */}
      <g stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15">
        {/* Top ribbon bow */}
        <path d="M 160 16 C 150 8 135 12 145 24 C 152 28 158 24 160 20 C 162 24 168 28 175 24 C 185 12 170 8 160 16 Z" />
        <path d="M 152 24 C 145 32 140 40 138 46" stroke={color} strokeWidth="1.2" fill="none" />
        <path d="M 168 24 C 175 32 180 40 182 46" stroke={color} strokeWidth="1.2" fill="none" />

        {/* Left Side Foliage Sprigs */}
        <path d="M 130 26 C 115 22 108 34 116 42 C 122 45 130 38 130 26 Z" />
        <path d="M 98 48 C 82 46 80 60 92 68 C 100 68 104 58 98 48 Z" />
        <path d="M 68 85 C 50 86 52 102 66 108 C 74 106 76 94 68 85 Z" />
        <path d="M 44 135 C 28 140 34 156 48 158 C 56 154 54 142 44 135 Z" />
        <path d="M 32 190 C 16 195 20 212 36 215 C 44 212 44 198 32 190 Z" />
        <path d="M 40 250 C 26 258 36 274 50 270 C 56 264 52 254 40 250 Z" />
        <path d="M 66 305 C 54 316 68 330 80 324 C 86 316 80 306 66 305 Z" />
        <path d="M 102 348 C 94 362 110 372 122 364 C 126 354 116 348 102 348 Z" />
        <path d="M 140 374 C 135 388 150 395 156 384 C 156 376 148 372 140 374 Z" />

        {/* Right Side Foliage Sprigs */}
        <path d="M 190 26 C 205 22 212 34 204 42 C 198 45 190 38 190 26 Z" />
        <path d="M 222 48 C 238 46 240 60 228 68 C 220 68 216 58 222 48 Z" />
        <path d="M 252 85 C 270 86 268 102 254 108 C 246 106 244 94 252 85 Z" />
        <path d="M 276 135 C 292 140 286 156 272 158 C 264 154 266 142 276 135 Z" />
        <path d="M 288 190 C 304 195 300 212 284 215 C 276 212 276 198 288 190 Z" />
        <path d="M 280 250 C 294 258 284 274 270 270 C 264 264 268 254 280 250 Z" />
        <path d="M 254 305 C 266 316 252 330 240 324 C 234 316 240 306 254 305 Z" />
        <path d="M 218 348 C 226 362 210 372 198 364 C 194 354 204 348 218 348 Z" />
        <path d="M 180 374 C 185 388 170 395 164 384 C 164 376 172 372 180 374 Z" />
      </g>

      {/* Bottom ribbon knot */}
      <circle cx="160" cy="385" r="4" fill={color} />
      <path d="M 160 385 C 150 392 145 398 140 404" stroke={color} strokeWidth="1.2" />
      <path d="M 160 385 C 170 392 175 398 180 404" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

// 3. Architectural Vintage Estate Sketch for Venue ("ЗАГОРОДНЫЙ КЛУБ ГОЛИЦЫН")
export function VenueEstateSketch({ className = "", color = "#E9E3D5" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 500 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Decorative Ribbon Banner on Top */}
      <g stroke={color} strokeWidth="1.2">
        <path d="M 160 38 L 340 38 L 350 48 L 340 58 L 160 58 L 150 48 Z" fill="none" />
        <text
          x="250"
          y="51"
          fill={color}
          textAnchor="middle"
          fontSize="11"
          fontFamily="'Cormorant Garamond', serif"
          letterSpacing="0.25em"
          fontWeight="600"
          stroke="none"
        >
          THE GRAND ESTATE
        </text>
      </g>

      {/* Main Roof Arch & Pediment */}
      <g stroke={color} strokeWidth="1.2" opacity="0.9">
        {/* Classical Central Pediment */}
        <path d="M 180 85 L 250 58 L 320 85 Z" fill="none" />
        <circle cx="250" cy="74" r="5" stroke={color} strokeWidth="1" />
        {/* Estate Wings Entablature */}
        <path d="M 70 95 L 430 95" />
        <path d="M 60 102 L 440 102" />

        {/* Central Portico / Dome Arch */}
        <path d="M 210 102 L 210 185" strokeWidth="1.5" />
        <path d="M 290 102 L 290 185" strokeWidth="1.5" />
        <path d="M 220 185 C 220 145 280 145 280 185 Z" strokeWidth="1.2" />
        <path d="M 250 145 L 250 185" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Columns & Colonnade */}
        <line x1="120" y1="102" x2="120" y2="185" strokeWidth="1" />
        <line x1="150" y1="102" x2="150" y2="185" strokeWidth="1" />
        <line x1="180" y1="102" x2="180" y2="185" strokeWidth="1" />
        <line x1="320" y1="102" x2="320" y2="185" strokeWidth="1" />
        <line x1="350" y1="102" x2="350" y2="185" strokeWidth="1" />
        <line x1="380" y1="102" x2="380" y2="185" strokeWidth="1" />

        {/* Arched Windows on Left Wing */}
        <path d="M 85 145 C 85 125 105 125 105 145 L 105 170 L 85 170 Z" />
        <line x1="95" y1="128" x2="95" y2="170" strokeWidth="0.8" />
        <line x1="85" y1="145" x2="105" y2="145" strokeWidth="0.8" />

        <path d="M 130 145 C 130 125 142 125 142 145 L 142 170 L 130 170 Z" />
        <path d="M 160 145 C 160 125 172 125 172 145 L 172 170 L 160 170 Z" />

        {/* Arched Windows on Right Wing */}
        <path d="M 395 145 C 395 125 415 125 415 145 L 415 170 L 395 170 Z" />
        <line x1="405" y1="128" x2="405" y2="170" strokeWidth="0.8" />
        <line x1="395" y1="145" x2="415" y2="145" strokeWidth="0.8" />

        <path d="M 328 145 C 328 125 340 125 340 145 L 340 170 L 328 170 Z" />
        <path d="M 358 145 C 358 125 370 125 370 145 L 370 170 L 358 170 Z" />

        {/* Balustrade & Parapet */}
        <path d="M 70 85 L 180 85" strokeWidth="0.8" />
        <path d="M 320 85 L 430 85" strokeWidth="0.8" />
        <line x1="90" y1="85" x2="90" y2="95" />
        <line x1="110" y1="85" x2="110" y2="95" />
        <line x1="130" y1="85" x2="130" y2="95" />
        <line x1="150" y1="85" x2="150" y2="95" />
        <line x1="170" y1="85" x2="170" y2="95" />
        <line x1="330" y1="85" x2="330" y2="95" />
        <line x1="350" y1="85" x2="350" y2="95" />
        <line x1="370" y1="85" x2="370" y2="95" />
        <line x1="390" y1="85" x2="390" y2="95" />
        <line x1="410" y1="85" x2="410" y2="95" />

        {/* Foundation & Steps */}
        <line x1="50" y1="185" x2="450" y2="185" strokeWidth="1.5" />
        <line x1="40" y1="190" x2="460" y2="190" strokeWidth="1.2" />
        <line x1="30" y1="195" x2="470" y2="195" strokeWidth="1" />

        {/* Courtyard Fountain / Lawn Motif */}
        <path d="M 230 205 C 230 198 270 198 270 205 L 275 215 L 225 215 Z" strokeWidth="0.8" />
        <path d="M 250 198 L 250 192" strokeWidth="1" />
        <circle cx="250" cy="190" r="1.5" fill={color} />

        {/* Surrounding Vintage Garden Foliage Sketch */}
        <path d="M 25 185 C 20 170 35 155 45 160 C 55 165 52 185 50 185" strokeWidth="0.8" strokeDasharray="2 1" />
        <path d="M 455 185 C 450 170 465 155 475 160 C 485 165 480 185 478 185" strokeWidth="0.8" strokeDasharray="2 1" />
      </g>
    </svg>
  );
}

// 4. Botanical Arch Top Framing (Card 4 "Тайминг" and Card 7 "Наш чат")
export function BotanicalArchTop({ className = "", color = "#3E4E34" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 400 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Semicircular arch vine */}
      <path
        d="M 50 120 C 60 50 120 15 200 15 C 280 15 340 50 350 120"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 70 120 C 80 65 135 30 200 30 C 265 30 320 65 330 120"
        stroke={color}
        strokeWidth="0.8"
        strokeDasharray="2 3"
        opacity="0.6"
      />

      {/* Center top flower/bud */}
      <circle cx="200" cy="15" r="3.5" fill={color} />
      <circle cx="190" cy="12" r="2" fill={color} opacity="0.6" />
      <circle cx="210" cy="12" r="2" fill={color} opacity="0.6" />

      {/* Left side leaves & flowers */}
      <g stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15">
        <path d="M 175 18 C 160 10 152 24 162 28 C 168 28 174 24 175 18 Z" />
        <path d="M 145 28 C 130 22 124 38 135 44 C 142 42 146 34 145 28 Z" />
        <path d="M 115 45 C 100 42 96 58 108 64 C 114 62 118 52 115 45 Z" />
        <path d="M 90 70 C 76 70 74 86 88 90 C 94 86 95 76 90 70 Z" />
        <path d="M 72 100 C 60 102 62 118 75 118 C 80 114 80 105 72 100 Z" />
      </g>

      {/* Right side leaves & flowers */}
      <g stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15">
        <path d="M 225 18 C 240 10 248 24 238 28 C 232 28 226 24 225 18 Z" />
        <path d="M 255 28 C 270 22 276 38 265 44 C 258 42 254 34 255 28 Z" />
        <path d="M 285 45 C 300 42 304 58 292 64 C 286 62 282 52 285 45 Z" />
        <path d="M 310 70 C 324 70 326 86 312 90 C 306 86 305 76 310 70 Z" />
        <path d="M 328 100 C 340 102 338 118 325 118 C 320 114 320 105 328 100 Z" />
      </g>
    </svg>
  );
}

// 5. Botanical Arch Bottom Framing
export function BotanicalArchBottom({ className = "", color = "#3E4E34" }: { className?: string; color?: string }) {
  return (
    <div className={`rotate-180 ${className}`}>
      <BotanicalArchTop color={color} />
    </div>
  );
}

// 6. Vintage Flourish Divider
export function VintageFlourish({ className = "", color = "#3E4E34", width = 120 }: { className?: string; color?: string; width?: number }) {
  return (
    <svg
      width={width}
      height="18"
      viewBox="0 0 160 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 10 10 C 30 10 40 4 55 10 C 70 16 75 10 80 10 C 85 10 90 16 105 10 C 120 4 130 10 150 10"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="80" cy="10" r="3" fill={color} />
      <circle cx="68" cy="10" r="1.5" fill={color} opacity="0.7" />
      <circle cx="92" cy="10" r="1.5" fill={color} opacity="0.7" />
    </svg>
  );
}

// 7. Timeline Vintage Icons (Champagne, Swans, Cake, Sparklers)
export function IconGuestArrival({ className = "", color = "#3E4E34", size = 36 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Two clinking champagne flutes / greeting toast */}
      <path d="M 14 10 L 17 22 L 19 22 L 19 30 L 16 32 L 22 32 L 19 30 L 19 22 L 21 22 L 24 10 Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M 14 14 C 18 16 20 16 24 14" stroke={color} strokeWidth="0.8" />
      {/* Subtle toast bubbles */}
      <circle cx="17" cy="8" r="1" fill={color} />
      <circle cx="21" cy="6" r="1" fill={color} />
      <circle cx="23" cy="9" r="0.8" fill={color} />
    </svg>
  );
}

export function IconCeremony({ className = "", color = "#3E4E34", size = 36 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Two swans facing each other making a heart shape or interlocking wedding rings */}
      <circle cx="16" cy="20" r="8" stroke={color} strokeWidth="1.3" />
      <circle cx="24" cy="20" r="8" stroke={color} strokeWidth="1.3" />
      {/* Gem facet on top ring */}
      <path d="M 14 12 L 16 9 L 18 12 Z" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.2" />
    </svg>
  );
}

export function IconBanquet({ className = "", color = "#3E4E34", size = 36 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Three tiered wedding cake */}
      {/* Bottom tier */}
      <rect x="10" y="24" width="20" height="9" rx="1.5" stroke={color} strokeWidth="1.2" />
      {/* Middle tier */}
      <rect x="13" y="17" width="14" height="7" rx="1.5" stroke={color} strokeWidth="1.2" />
      {/* Top tier */}
      <rect x="16" y="11" width="8" height="6" rx="1.5" stroke={color} strokeWidth="1.2" />
      {/* Cake topper */}
      <path d="M 20 7 L 19 9 L 21 9 Z" fill={color} />
      {/* Frosting swag lines */}
      <path d="M 10 27 Q 15 29 20 27 Q 25 29 30 27" stroke={color} strokeWidth="0.8" />
      <path d="M 13 20 Q 16.5 22 20 20 Q 23.5 22 27 20" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

export function IconFinale({ className = "", color = "#3E4E34", size = 36 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sparklers / fireworks bouquet */}
      <line x1="20" y1="24" x2="20" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Burst rays */}
      <line x1="20" y1="20" x2="20" y2="10" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="28" y2="13" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="12" y2="13" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="30" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20" y1="20" x2="10" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Sparkles */}
      <circle cx="20" cy="7" r="1.2" fill={color} />
      <circle cx="31" cy="11" r="1" fill={color} />
      <circle cx="9" cy="11" r="1" fill={color} />
      <circle cx="26" cy="17" r="0.8" fill={color} />
      <circle cx="14" cy="17" r="0.8" fill={color} />
    </svg>
  );
}

// 8. Calla Lily Botanical Line Art for Dress Code Card (Card 5)
export function CallaLilyBotanical({ className = "", color = "#E9E3D5", size = 180 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Calla Lily Flower 1 */}
      <path
        d="M 70 80 C 60 50 75 30 90 20 C 105 30 115 50 100 80 C 95 90 85 95 70 80 Z"
        stroke={color}
        strokeWidth="1.2"
      />
      {/* Spadix */}
      <path d="M 88 50 L 89 32" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Stem 1 */}
      <path d="M 85 90 C 82 130 75 170 70 210" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Calla Lily Flower 2 (Slightly smaller, angled) */}
      <path
        d="M 130 95 C 122 72 132 55 145 48 C 158 55 165 72 152 95 C 147 103 140 106 130 95 Z"
        stroke={color}
        strokeWidth="1.2"
      />
      <path d="M 143 72 L 144 58" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Stem 2 */}
      <path d="M 142 102 C 135 140 115 175 105 210" stroke={color} strokeWidth="1.3" strokeLinecap="round" />

      {/* Elegant curled leaves */}
      <path
        d="M 80 140 C 45 125 35 100 40 85 C 50 95 65 115 78 135 Z"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.1"
      />
      <path
        d="M 125 150 C 160 135 170 110 165 95 C 155 105 140 125 127 145 Z"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.1"
      />
    </svg>
  );
}

// 9. Wax Seal Monogram
export function WaxSealMonogram({ monogram = "КА", size = 52, className = "" }: { monogram?: string; size?: number; className?: string }) {
  return (
    <div
      className={`relative rounded-full flex items-center justify-center select-none shadow-md ${className}`}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 35% 35%, #D7C49E 0%, #B89F70 60%, #8C754B 100%)",
        border: "1.5px solid rgba(255, 255, 255, 0.35)",
        boxShadow: "0 4px 14px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.4)",
      }}
    >
      {/* Inner embossed rim */}
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: size * 0.78,
          height: size * 0.78,
          border: "1px dashed rgba(255,255,255,0.45)",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.35)",
        }}
      >
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: size * 0.36,
            fontWeight: 600,
            color: "#4A3D24",
            textShadow: "1px 1px 1px rgba(255,255,255,0.6), -1px -1px 1px rgba(0,0,0,0.25)",
            letterSpacing: "0.05em",
          }}
        >
          {monogram}
        </span>
      </div>
    </div>
  );
}
