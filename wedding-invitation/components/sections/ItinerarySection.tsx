"use client";
// components/sections/ItinerarySection.tsx
import { motion } from "framer-motion";
import { WeddingData, VenueData } from "@/types";
import {
  BotanicalArchTop,
  BotanicalArchBottom,
  VintageFlourish,
  IconGuestArrival,
  IconCeremony,
  IconBanquet,
  IconFinale,
} from "@/components/ui/BotanicalOrnaments";

interface ItinerarySectionProps {
  wedding: WeddingData;
  venue?: VenueData;
}

interface TimelineEvent {
  time: string;
  title: string;
  desc: string;
  icon: (color: string) => React.ReactNode;
}

export default function ItinerarySection({ }: ItinerarySectionProps) {
  const events: TimelineEvent[] = [
    {
      time: "03:30 PM",
      title: "GUEST ARRIVAL",
      desc: "Welcome refreshments & gathering of beloved guests",
      icon: (color) => <IconGuestArrival color={color} size={38} />,
    },
    {
      time: "04:00 PM",
      title: "WEDDING CEREMONY",
      desc: "The heartfelt exchange of vows and our sacred union",
      icon: (color) => <IconCeremony color={color} size={38} />,
    },
    {
      time: "05:00 PM",
      title: "DINNER & RECEPTION",
      desc: "Feast, joyful toasts, dancing, and wonderful memories",
      icon: (color) => <IconBanquet color={color} size={38} />,
    },
    {
      time: "11:00 PM",
      title: "EVENING FINALE",
      desc: "Sparkler send-off and celebratory farewell",
      icon: (color) => <IconFinale color={color} size={38} />,
    },
  ];

  return (
    <section id="itinerary" className="section-padding relative">
      <div className="container-luxury relative z-10 flex justify-center">
        <motion.div
          className="itinerary-card w-full max-w-[480px] rounded-t-[160px] sm:rounded-t-[200px] rounded-b-[160px] sm:rounded-b-[200px] shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          style={{
            background: "linear-gradient(180deg, #F8F4EE 0%, #EFE8DE 100%)",
            border: "1px solid rgba(52, 64, 42, 0.16)",
            color: "#34402A",
          }}
        >
          {/* Top Arch Floral Framing */}
          <div className="w-full flex justify-center pt-8 px-6">
            <BotanicalArchTop color="#415236" className="w-full max-w-[340px]" />
          </div>

          <div className="itinerary-content px-6 sm:px-12 pt-2 pb-6 flex flex-col items-center text-center">
            {/* Calligraphy Title */}
            <h2
              className="font-script text-4xl sm:text-5xl text-[#34402A] mb-8 font-normal leading-tight"
              style={{ textShadow: "0 1px 2px rgba(255,255,255,0.8)" }}
            >
              Wedding Timeline
            </h2>

            {/* Timeline Items */}
            <div className="w-full flex flex-col items-center gap-7">
              {events.map((event, idx) => (
                <div key={idx} className="w-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-2 flex items-center justify-center">
                    {event.icon("#38472F")}
                  </div>

                  {/* Time */}
                  <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-[#34402A] mb-0.5">
                    {event.time}
                  </span>

                  {/* Title */}
                  <span className="font-heading text-xs sm:text-sm tracking-[0.22em] uppercase text-[#34402A] font-semibold mb-1">
                    {event.title}
                  </span>

                  {/* Description */}
                  <p className="font-body text-xs text-[#526344] max-w-[270px] leading-relaxed font-light mb-3">
                    {event.desc}
                  </p>

                  {/* Divider except last item */}
                  {idx < events.length - 1 && (
                    <VintageFlourish color="#5A6D4B" width={100} className="opacity-75 my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Arch Floral Framing */}
          <div className="w-full flex justify-center pb-8 px-6">
            <BotanicalArchBottom color="#415236" className="w-full max-w-[340px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
