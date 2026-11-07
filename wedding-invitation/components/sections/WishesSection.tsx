"use client";
// components/sections/WishesSection.tsx
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GuestWish } from "@/types";
import { VintageFlourish } from "@/components/ui/BotanicalOrnaments";

const INITIAL_COUNT = 6;

export default function WishesSection() {
  const [wishes, setWishes] = useState<GuestWish[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [form, setForm] = useState({ guestName: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scrolling completely while modal is open and handle Escape key
  useEffect(() => {
    if (showModal) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      const prevTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setShowModal(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        document.body.style.touchAction = prevTouchAction;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [showModal]);

  useEffect(() => {
    fetch("/api/wishes")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setWishes(data);
      })
      .catch(console.error);
  }, []);

  const handleToggleWishes = () => {
    if (visibleCount >= wishes.length) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) => Math.min(prev + 6, wishes.length));
    }
  };

  const handleSubmitWish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.guestName.trim() || !form.message.trim()) return;

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

  return (
    <section
      id="wishes"
      className="relative flex justify-center px-4"
      style={{
        paddingTop: "clamp(2.5rem, 5vh, 4rem)",
        paddingBottom: "clamp(3.5rem, 6vh, 5.5rem)",
      }}
    >
      <div className="container-luxury relative z-10 flex flex-col items-center gap-14 w-full">
        {/* MAIN WISHES & GIFT NOTE CARD */}
        <motion.div
          className="wishes-main-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="family-role">DUAS &amp; BLESSINGS</span>

          <h2 className="rsvp-title">Our Wishes</h2>

          <p className="font-body text-xs sm:text-sm text-[#4E5E42] max-w-sm leading-relaxed font-light mb-3">
            The greatest gift of all is having you celebrate by our side. Your heartfelt Duas and blessings as we begin our new journey together would mean the world to us and is all we could ask for.
          </p>

          <p
            className="my-3.5 max-w-sm mx-auto leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1rem, 2.4vw, 1.15rem)",
              fontWeight: 600,
              color: "#303E26",
              letterSpacing: "0.015em",
            }}
          >
            So please keep us in your precious Duas for a life full of love, mercy and barakah.
          </p>

          <p className="font-heading italic text-sm text-[#526344] max-w-xs leading-relaxed mb-6">
            Thank you for being part of our story and filling our celebration with joy and blessings.
          </p>

          <div className="rsvp-flourish-wrap mb-6">
            <VintageFlourish color="#526644" width={110} className="opacity-80" />
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="rsvp-submit-btn max-w-[260px] mx-auto cursor-pointer"
          >
            <span>SEND A BLESSING</span>
          </button>
        </motion.div>

        {/* Guest Wishes Wall */}
        {wishes.length > 0 && (
          <div
            className="wishes-wall-container"
            style={{ marginTop: "clamp(3rem, 6vh, 5rem)" }}
          >
            <div className="wishes-header">
              <h3 className="font-script text-3xl sm:text-4xl text-[#F5EFEB] mb-2 leading-tight">
                Heartfelt Wishes from Loved Ones
              </h3>
              <div
                className="wishes-header-flourish"
                style={{ marginTop: "0.75rem", marginBottom: "2.5rem" }}
              >
                <VintageFlourish color="#C8BEA8" width={110} className="opacity-80" />
              </div>
            </div>

            <div className="wishes-grid">
              {wishes.slice(0, visibleCount).map((wish, index) => (
                <motion.div
                  key={wish._id || index}
                  className="wish-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
                >
                  <span className="wish-quote">&ldquo;</span>
                  <p className="wish-message">
                    &ldquo;{wish.message}&rdquo;
                  </p>
                  <div className="wish-author-wrapper">
                    <span className="wish-avatar">
                      {wish.guestName ? wish.guestName.trim().charAt(0) : "G"}
                    </span>
                    <span className="wish-author-name">
                      {wish.guestName}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons: Show More Wishes & Leave a Blessing (Matching Reference Design) */}
            <div className="wishes-actions-group">
              {wishes.length > INITIAL_COUNT && (
                <button
                  type="button"
                  onClick={handleToggleWishes}
                  className="wishes-btn-outline cursor-pointer"
                >
                  <span>
                    {visibleCount >= wishes.length
                      ? "SHOW LESS"
                      : "SHOW MORE WISHES"}
                  </span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="wishes-btn-solid cursor-pointer"
              >
                <span>LEAVE A BLESSING</span>

              </button>
            </div>
          </div>
        )}

        {/* Modal for Writing Wish - Portaled directly to document.body to avoid stacking context traps */}
        {mounted &&
          createPortal(
            <AnimatePresence>
              {showModal && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto overscroll-contain"
                  style={{
                    backgroundColor: "rgba(14, 20, 12, 0.78)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                  onClick={() => setShowModal(false)}
                >
                  <motion.div
                    initial={{ scale: 0.94, opacity: 0, y: 16 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.94, opacity: 0, y: 16 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                    className="wish-modal-card my-auto"
                  >
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#34402A]/60 hover:text-[#34402A] hover:bg-black/5 text-lg transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>

                    <span className="family-role">Leave a Wish</span>
                    <h3 className="rsvp-title">Warm Wishes &amp; Blessings</h3>
                    <p className="rsvp-subtitle mb-5">
                      Leave a personal message for the bride and groom
                    </p>

                    {formStatus === "success" ? (
                      <div className="py-8 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-[#34402A] text-[#F5EFEB] flex items-center justify-center text-2xl mb-3 shadow-md">
                          ✓
                        </div>
                        <h4 className="font-heading text-xl font-semibold text-[#34402A] mb-1">
                          Thank You!
                        </h4>
                        <p className="font-body text-xs text-[#526344]">
                          Your heartfelt blessing has been received with love.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitWish} className="flex flex-col gap-4 text-left">
                        <div className="rsvp-form-group">
                          <label className="rsvp-label" htmlFor="wish-name">
                            Your Full Name *
                          </label>
                          <input
                            id="wish-name"
                            type="text"
                            required
                            value={form.guestName}
                            onChange={(e) => setForm({ ...form, guestName: e.target.value })}
                            placeholder="e.g. John &amp; Sarah Doe"
                            className="rsvp-input"
                          />
                        </div>

                        <div className="rsvp-form-group">
                          <label className="rsvp-label" htmlFor="wish-message">
                            Your Message *
                          </label>
                          <textarea
                            id="wish-message"
                            required
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Wishing you a lifetime of joy, love, and countless blessings..."
                            className="wish-textarea"
                          />
                        </div>

                        {formStatus === "error" && (
                          <p className="text-xs text-red-600 text-center font-body">
                            Failed to send message. Please try again.
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={formStatus === "loading"}
                          className="rsvp-submit-btn cursor-pointer"
                        >
                          {formStatus === "loading" ? (
                            <>
                              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>SENDING...</span>
                            </>
                          ) : (
                            <>
                              <span>SEND BLESSING</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </section>
  );
}
