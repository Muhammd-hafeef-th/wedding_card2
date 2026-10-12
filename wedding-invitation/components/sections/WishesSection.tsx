"use client";
// components/sections/WishesSection.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GuestWish } from "@/types";
import { CallaLilyBotanical, VintageFlourish } from "@/components/ui/BotanicalOrnaments";

export default function WishesSection() {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [form, setForm] = useState({ guestName: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/api/wishes")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setWishes(data);
      })
      .catch(console.error);
  }, []);

  const handleSubmitWish = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("/api/wishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormStatus("success");
        setForm({ guestName: "", message: "" });
        setTimeout(() => {
          setFormStatus("idle");
          setShowModal(false);
        }, 2200);
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const paletteColors = [
    { name: "Olive", hex: "#48593E" },
    { name: "Sage", hex: "#7E9073" },
    { name: "Champagne", hex: "#DDD2BF" },
    { name: "Warm Taupe", hex: "#B9A78E" },
    { name: "Forest", hex: "#2A3622" },
  ];

  return (
    <section id="wishes" className="section-padding relative">
      <div className="container-luxury relative z-10 flex flex-col items-center gap-14">
        
        {/* CARD 5: DRESS CODE */}
        <motion.div
          className="w-full max-w-[480px] rounded-t-[160px] sm:rounded-t-[200px] rounded-b-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          style={{
            background: "linear-gradient(180deg, #3E4E34 0%, #2F3C27 100%)",
            border: "1px solid rgba(245, 239, 235, 0.18)",
            boxShadow: "0 18px 48px -10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="px-6 sm:px-10 pt-12 pb-12 flex flex-col items-center text-center relative z-10">
            {/* Title in cursive script */}
            <h2
              className="font-script text-3xl sm:text-4xl text-[#F5EFEB] mb-3 leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
            >
              Dress Code
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#D7CEBA] max-w-xs leading-relaxed font-light mb-6 opacity-90">
              We warmly invite you to dress in elegant semi-formal or cocktail attire. To complement the natural aesthetic of our celebration, we suggest neutral, earthy, or soft botanical tones. Please kindly refrain from pure white.
            </p>

            {/* Color Palette Swatches */}
            <div className="flex items-center gap-3 my-2">
              {paletteColors.map((color, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/30 shadow-md transition-transform hover:scale-110"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                </div>
              ))}
            </div>

            {/* Botanical Calla Lily illustration framing the bottom */}
            <div className="w-full flex justify-center mt-6 -mb-4">
              <CallaLilyBotanical color="#EBE3D3" size={170} />
            </div>
          </div>
        </motion.div>

        {/* CARD 6: OUR WISHES & GIFT NOTE */}
        <motion.div
          className="w-full max-w-[480px] rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, delay: 0.1 }}
          style={{
            background: "linear-gradient(180deg, #37472F 0%, #2C3824 100%)",
            border: "1px solid rgba(245, 239, 235, 0.18)",
            boxShadow: "0 18px 48px -10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="px-6 sm:px-10 py-12 flex flex-col items-center text-center">
            {/* Title in cursive script */}
            <h2
              className="font-script text-3xl sm:text-4xl text-[#F5EFEB] mb-3 leading-tight"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
            >
              Our Wishes
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#D7CEBA] max-w-sm leading-relaxed font-light mb-4 opacity-90">
              The greatest gift of all is having you celebrate by our side. If you wish to honor us with a gift, a contribution toward our new journey together and future home would be received with heartfelt gratitude.
            </p>

            <p className="font-body text-xs text-[#C8BEA8] max-w-xs leading-relaxed font-light italic mb-6">
              Thank you for being part of our story and filling our celebration with joy and blessings.
            </p>

            <VintageFlourish color="#C8BEA8" width={110} className="mb-6 opacity-75" />

            {/* Pill button: SEND A WISH */}
            <button
              onClick={() => setShowModal(true)}
              className="btn-pill-cream cursor-pointer"
            >
              SEND A BLESSING
            </button>
          </div>
        </motion.div>

        {/* Guest Wishes Wall if any wishes exist */}
        {wishes.length > 0 && (
          <div className="w-full max-w-[900px] flex flex-col items-center mt-6">
            <h3 className="font-script text-3xl text-white/90 mb-6 text-center">
              Heartfelt Wishes from Loved Ones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-2">
              {wishes.slice(0, 6).map((wish, index) => (
                <div
                  key={wish._id || index}
                  className="rounded-2xl p-5 relative overflow-hidden"
                  style={{
                    background: "rgba(58, 74, 50, 0.65)",
                    border: "1px solid rgba(245, 239, 235, 0.15)",
                  }}
                >
                  <p className="font-heading italic text-base text-[#F5EFEB] mb-3">
                    &ldquo;{wish.message}&rdquo;
                  </p>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-[#D7CEBA]">
                    — {wish.guestName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for writing wish */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-3xl p-6 sm:p-8 relative text-center"
                style={{
                  background: "#3E4E35",
                  border: "1px solid rgba(245, 239, 235, 0.2)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white text-xl cursor-pointer"
                >
                  ✕
                </button>

                <h3 className="font-script text-3xl text-white mb-2">
                  Warm Wishes &amp; Blessings
                </h3>
                <p className="font-body text-xs text-[#D7CEBA] mb-6">
                  Leave a personal message for the bride and groom
                </p>

                {formStatus === "success" ? (
                  <div className="py-8">
                    <span className="text-3xl mb-2 block">🌿</span>
                    <p className="font-heading text-lg text-white">
                      Thank you for your heartfelt wish!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitWish} className="flex flex-col gap-4 text-left">
                    <div>
                      <label className="font-body text-[10px] uppercase tracking-wider text-[#D7CEBA] block mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.guestName}
                        onChange={(e) => setForm({ ...form, guestName: e.target.value })}
                        placeholder="John &amp; Sarah Doe"
                        className="w-full bg-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none border border-white/20 focus:border-white/50"
                      />
                    </div>
                    <div>
                      <label className="font-body text-[10px] uppercase tracking-wider text-[#D7CEBA] block mb-1">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Wishing you a lifetime of love and happiness..."
                        className="w-full bg-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none border border-white/20 focus:border-white/50"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="btn-pill-cream w-full mt-2 cursor-pointer"
                    >
                      {formStatus === "loading" ? "SENDING..." : "SEND BLESSING"}
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
