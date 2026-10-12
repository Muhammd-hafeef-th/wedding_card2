"use client";
// app/(page)/page.tsx
import { useState, useEffect } from "react";
import OpeningScreen from "@/components/sections/OpeningScreen";
import HeroSection from "@/components/sections/HeroSection";
import Gallery from "@/components/sections/Gallery";
import ItinerarySection from "@/components/sections/ItinerarySection";
import VenueSection from "@/components/sections/VenueSection";
import FamilySection from "@/components/sections/FamilySection";
import CountdownSection from "@/components/sections/CountdownSection";
import RSVPSection from "@/components/sections/RSVPSection";
import WishesSection from "@/components/sections/WishesSection";
import FooterSection from "@/components/sections/FooterSection";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import Navbar from "@/components/ui/Navbar";
import { WeddingData, GalleryItem, VenueData } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

// Default data fallback so page renders even without DB
const DEFAULT_WEDDING: WeddingData = {
  title: "Wedding Invitation",
  brideFirstName: "Ksenia",
  brideLastName: "",
  groomFirstName: "Andrey",
  groomLastName: "",
  date: "2026-10-01",
  time: "15:30",
  venue: "The Grand Estate & Country Club",
  subtitle: "Where our forever begins",
  invitationText: "Together with our families, we warmly invite you to celebrate our wedding. We would be truly honored to have you share this unforgettable day with us.",
  bridePhotoUrl: "/images/cameo-portrait.jpg",
  brideFatherName: "Alexander",
  brideMotherName: "Elena",
  groomFatherName: "Sergey",
  groomMotherName: "Olga",
};

const DEFAULT_VENUE: VenueData = {
  name: "The Grand Estate & Country Club",
  address: "120 Royal Meadows Parkway, Riverside Estate",
  googleMapLink: "https://maps.google.com/?q=The+Grand+Estate",
  googleMapEmbed: "",
  parkingInfo: "Complimentary valet parking available",
  accommodation: "Guest accommodations arranged at the venue hotel",
  imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200",
  groomVenue: { name: "", address: "", googleMapLink: "", googleMapEmbed: "" },
  brideVenue: { name: "", address: "", googleMapLink: "", googleMapEmbed: "" },
  nikkahVenue: { name: "", address: "", googleMapLink: "", googleMapEmbed: "" },
};

export default function InvitationPage() {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);

  // Data states
  const [wedding, setWedding] = useState<WeddingData>(DEFAULT_WEDDING);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [venue, setVenue] = useState<VenueData>(DEFAULT_VENUE);

  // Fetch all data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        const [weddingRes, galleryRes, venueRes] =
          await Promise.allSettled([
            fetch("/api/wedding").then((r) => r.json()),
            fetch("/api/gallery").then((r) => r.json()),
            fetch("/api/venue").then((r) => r.json()),
          ]);

        if (weddingRes.status === "fulfilled" && weddingRes.value && !weddingRes.value.error)
          setWedding(weddingRes.value);
        if (galleryRes.status === "fulfilled" && Array.isArray(galleryRes.value))
          setGallery(galleryRes.value);
        if (venueRes.status === "fulfilled" && venueRes.value && !venueRes.value.error)
          setVenue(venueRes.value);
      } catch (err) {
        console.error("Data fetch error:", err);
      } finally {
        setIsLoaded(true);
      }
    }
    fetchData();
  }, []);

  return (
    <main style={{ background: "var(--bg-main)" }}>
      {/* Opening Screen */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="intro-screen"
            className="fixed inset-0 z-[100]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <OpeningScreen
              wedding={wedding}
              onOpen={() => setIsOpen(true)}
              onSkip={() => setIsOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main invitation content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-0"
          >
            <Navbar wedding={wedding} />
            <BackgroundEffects />
            <HeroSection wedding={wedding} venue={venue} />
            <VenueSection venue={venue} />
            <ItinerarySection wedding={wedding} venue={venue} />
            <CountdownSection wedding={wedding} />
            <WishesSection />
            <RSVPSection />
            {gallery.length > 0 && <Gallery items={gallery} />}
            <FamilySection wedding={wedding} />
            <FooterSection wedding={wedding} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

