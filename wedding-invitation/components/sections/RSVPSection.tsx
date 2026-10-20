"use client";
// components/sections/RSVPSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VintageFlourish } from "@/components/ui/BotanicalOrnaments";

export default function RSVPSection() {
  const [guestName, setGuestName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedAttendance, setSubmittedAttendance] = useState<"yes" | "no">("yes");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: guestName.trim(),
          attendance,
          guestCount: attendance === "yes" ? Math.max(1, guestCount || 1) : 1,
        }),
      });

      if (res.ok) {
        setSubmittedName(guestName.trim());
        setSubmittedAttendance(attendance);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setGuestName("");
    setAttendance("yes");
    setGuestCount(1);
    setStatus("idle");
  };

  return (
    <section
      id="rsvp"
      className="relative flex justify-center px-4"
      style={{
        paddingTop: "clamp(2rem, 4vh, 3.5rem)",
        paddingBottom: "clamp(2.5rem, 5vh, 4rem)",
      }}
    >
      <div className="container-luxury relative z-10 flex justify-center w-full">
        <motion.div
          className="rsvp-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="rsvp-content">
            <span className="family-role">R.S.V.P.</span>

            <h2 className="rsvp-title">Will You Join Us?</h2>

            <p className="rsvp-subtitle">
              Please kindly let us know if you will celebrate with us on our special day.
            </p>

            {/* Vintage flourish with clear generous spacing */}
            <div className="rsvp-flourish-wrap">
              <VintageFlourish color="#526644" width={110} className="opacity-80" />
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full flex flex-col items-center py-4 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#34402A] text-[#F5EFEB] flex items-center justify-center text-2xl mb-3 shadow-md">
                    ✓
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#34402A] mb-1">
                    Thank You, {submittedName}!
                  </h3>
                  <p className="font-body text-xs text-[#526344] max-w-xs mb-5 leading-relaxed">
                    {submittedAttendance === "yes"
                      ? "We are delighted to have you join us and look forward to celebrating together!"
                      : "We are so sorry you cannot attend, but you will be in our hearts and prayers."}
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="font-body text-[11px] uppercase tracking-wider text-[#34402A] underline cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    Change Response or RSVP for Another Guest
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex flex-col gap-4 text-left"
                >
                  {/* Guest Name */}
                  <div className="rsvp-form-group">
                    <label className="rsvp-label" htmlFor="rsvp-name">
                      Your Full Name *
                    </label>
                    <input
                      id="rsvp-name"
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="rsvp-input"
                    />
                  </div>

                  {/* Attendance Choice Buttons */}
                  <div className="rsvp-form-group">
                    <label className="rsvp-label">Will you be attending? *</label>
                    <div className="rsvp-choice-grid">
                      <button
                        type="button"
                        onClick={() => setAttendance("yes")}
                        className={`rsvp-choice-btn ${attendance === "yes" ? "active" : ""}`}
                      >
                        <span className="rsvp-choice-icon">✓</span>
                        <span>Accept</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setAttendance("no")}
                        className={`rsvp-choice-btn ${attendance === "no" ? "active" : ""}`}
                      >
                        <span className="rsvp-choice-icon">✕</span>
                        <span>Decline</span>
                      </button>
                    </div>
                  </div>

                  {/* Guest Count (Typed input + Steppers) */}
                  {attendance === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="rsvp-form-group overflow-hidden"
                    >
                      <label className="rsvp-label" htmlFor="guest-count">
                        Number of Guests Attending
                      </label>
                      <div className="rsvp-counter-wrap">
                        <button
                          type="button"
                          onClick={() => setGuestCount((prev) => Math.max(1, (Number(prev) || 1) - 1))}
                          className="rsvp-stepper-btn"
                          aria-label="Decrease guest count"
                        >
                          −
                        </button>

                        <input
                          id="guest-count"
                          type="number"
                          min="1"
                          max="50"
                          value={guestCount}
                          onChange={(e) => {
                            const val = parseInt(e.target.value, 10);
                            setGuestCount(isNaN(val) ? 1 : Math.max(1, val));
                          }}
                          className="rsvp-guest-input"
                        />

                        <button
                          type="button"
                          onClick={() => setGuestCount((prev) => (Number(prev) || 1) + 1)}
                          className="rsvp-stepper-btn"
                          aria-label="Increase guest count"
                        >
                          +
                        </button>

                        <span className="rsvp-guest-label">
                          {guestCount === 1 ? "Person" : "People"}
                        </span>
                      </div>
                      <p className="font-body text-[10px] text-[#637654] mt-0.5 opacity-80">
                        Type any number or use the + / − buttons
                      </p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <p className="text-xs text-red-600 text-center font-body">
                      Failed to submit RSVP. Please try again.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rsvp-submit-btn"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>CONFIRM RSVP</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
