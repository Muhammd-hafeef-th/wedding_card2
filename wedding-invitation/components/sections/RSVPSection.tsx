"use client";
// components/sections/RSVPSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BotanicalArchTop,
  BotanicalArchBottom,
  VintageFlourish,
} from "@/components/ui/BotanicalOrnaments";

export default function RSVPSection() {
  const [form, setForm] = useState({
    guestName: "",
    phone: "",
    attendance: "yes",
    guestCount: 1,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="rsvp" className="section-padding relative">
      <div className="container-luxury relative z-10 flex justify-center">
        {/* Grand Cream Arch Card containing: Guest Chat, Day-of Contact, RSVP */}
        <motion.div
          className="w-full max-w-[480px] rounded-t-[160px] sm:rounded-t-[200px] rounded-b-[160px] sm:rounded-b-[200px] shadow-2xl relative overflow-hidden"
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

          <div className="px-6 sm:px-10 pt-2 pb-6 flex flex-col items-center text-center">
            {/* PART 1: GUEST CHAT */}
            <div className="w-full flex flex-col items-center my-6">
              <h2
                className="font-script text-3xl sm:text-4xl text-[#34402A] mb-3 leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.7)" }}
              >
                Guest Chat
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#4E5E42] max-w-xs leading-relaxed font-light mb-5">
                We have created a private group chat where you can share photos, connect with other guests, and download gallery pictures after the wedding!
              </p>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-dark"
              >
                JOIN GUEST CHAT
              </a>
            </div>

            <VintageFlourish color="#5A6D4B" width={110} className="my-4 opacity-75" />

            {/* PART 2: DAY-OF CONTACT */}
            <div className="w-full flex flex-col items-center my-6">
              <h2
                className="font-script text-3xl sm:text-4xl text-[#34402A] mb-3 leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.7)" }}
              >
                Wedding Day Contact
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#4E5E42] max-w-xs leading-relaxed font-light mb-5">
                Should you have any questions or require assistance on the day of the wedding, our wedding coordinator will be delighted to guide you.
              </p>
              <a
                href="tel:+1234567890"
                className="btn-pill-dark"
              >
                CALL COORDINATOR
              </a>
            </div>

            <VintageFlourish color="#5A6D4B" width={110} className="my-4 opacity-75" />

            {/* PART 3: RSVP QUESTIONNAIRE */}
            <div className="w-full flex flex-col items-center my-6">
              <h2
                className="font-script text-3xl sm:text-4xl text-[#34402A] mb-3 leading-tight"
                style={{ textShadow: "0 1px 2px rgba(255,255,255,0.7)" }}
              >
                RSVP
              </h2>
              <p className="font-body text-xs sm:text-sm text-[#4E5E42] max-w-xs leading-relaxed font-light mb-6">
                Please kindly respond by September 01, 2026, so we can prepare for your presence and celebrate together with joy.
              </p>

              {/* Questionnaire Form or Expand Button */}
              {!isFormOpen && status !== "success" ? (
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="btn-pill-dark cursor-pointer"
                >
                  CONFIRM ATTENDANCE
                </button>
              ) : null}

              {/* Interactive Form */}
              <AnimatePresence>
                {(isFormOpen || status === "success") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="w-full overflow-hidden"
                  >
                    {status === "success" ? (
                      <div className="py-6 flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#34402A] text-white flex items-center justify-center text-xl">
                          ✓
                        </div>
                        <h3 className="font-heading text-lg font-semibold text-[#34402A]">
                          Thank You for Your Response!
                        </h3>
                        <p className="font-body text-xs text-[#526344]">
                          We have received your RSVP and cannot wait to celebrate with you!
                        </p>
                        <button
                          onClick={() => {
                            setStatus("idle");
                            setIsFormOpen(false);
                          }}
                          className="font-body text-[10px] tracking-widest uppercase text-[#526344] underline mt-2 cursor-pointer"
                        >
                          Submit Another Response
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="w-full text-left mt-2 flex flex-col gap-4">
                        {/* Name */}
                        <div>
                          <label className="font-body text-[10px] uppercase tracking-wider text-[#4A5C3D] font-semibold block mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.guestName}
                            onChange={(e) => setForm({ ...form, guestName: e.target.value })}
                            placeholder="John Doe"
                            className="rsvp-input"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="font-body text-[10px] uppercase tracking-wider text-[#4A5C3D] font-semibold block mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="rsvp-input"
                          />
                        </div>

                        {/* Attendance */}
                        <div className="my-2">
                          <label className="font-body text-[10px] uppercase tracking-wider text-[#4A5C3D] font-semibold block mb-2">
                            Will you join our celebration? *
                          </label>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => setForm({ ...form, attendance: "yes" })}
                              className={`flex-1 py-2.5 px-3 rounded-full text-[11px] font-body uppercase tracking-wider transition-all cursor-pointer border ${
                                form.attendance === "yes"
                                  ? "bg-[#34402A] text-white border-[#34402A]"
                                  : "border-[#34402A]/30 text-[#34402A]"
                              }`}
                            >
                              Joyfully Accept
                            </button>
                            <button
                              type="button"
                              onClick={() => setForm({ ...form, attendance: "no" })}
                              className={`flex-1 py-2.5 px-3 rounded-full text-[11px] font-body uppercase tracking-wider transition-all cursor-pointer border ${
                                form.attendance === "no"
                                  ? "bg-[#34402A] text-white border-[#34402A]"
                                  : "border-[#34402A]/30 text-[#34402A]"
                              }`}
                            >
                              Regretfully Decline
                            </button>
                          </div>
                        </div>

                        {/* Number of guests */}
                        {form.attendance === "yes" && (
                          <div>
                            <label className="font-body text-[10px] uppercase tracking-wider text-[#4A5C3D] font-semibold block mb-1">
                              Number of Guests
                            </label>
                            <input
                              type="number"
                              min={1}
                              max={10}
                              value={form.guestCount}
                              onChange={(e) => setForm({ ...form, guestCount: parseInt(e.target.value) || 1 })}
                              className="rsvp-input max-w-[80px]"
                            />
                          </div>
                        )}

                        {/* Message */}
                        <div>
                          <label className="font-body text-[10px] uppercase tracking-wider text-[#4A5C3D] font-semibold block mb-1">
                            Dietary Restrictions or Notes
                          </label>
                          <input
                            type="text"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Vegetarian, allergies, etc."
                            className="rsvp-input"
                          />
                        </div>

                        {status === "error" && (
                          <p className="text-xs text-red-600 text-center">
                            An error occurred while submitting. Please try again.
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="btn-pill-dark w-full mt-3 cursor-pointer"
                        >
                          {status === "loading" ? "SENDING..." : "CONFIRM RSVP"}
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
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
