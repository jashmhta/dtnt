"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { DESTINATIONS } from "@/lib/destinations";

type Who = "couple" | "family" | "group" | "corporate";
type Vibe = "beach" | "mountains" | "city" | "culture";

const WHOS: Array<{ id: Who; label: string }> = [
  { id: "couple", label: "Couple" },
  { id: "family", label: "Family" },
  { id: "group", label: "Group" },
  { id: "corporate", label: "Corporate" },
];

const VIBES: Array<{ id: Vibe; label: string }> = [
  { id: "beach", label: "Beach" },
  { id: "mountains", label: "Mountains" },
  { id: "city", label: "City" },
  { id: "culture", label: "Culture" },
];

const PACES = ["Relaxed", "Balanced", "Packed"] as const;

export default function Quiz() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [who, setWho] = useState<Who | null>(null);
  const [vibe, setVibe] = useState<Vibe | null>(null);
  const [pace, setPace] = useState<string | null>(null);

  const result = useMemo(() => {
    if (!who || !vibe || who === "corporate") return null;
    let best = DESTINATIONS[0];
    let bestScore = -1;
    for (const d of DESTINATIONS) {
      const score = (d.forTags.includes(who) ? 2 : 0) + (d.vibeTags.includes(vibe) ? 3 : 0);
      if (score > bestScore) {
        bestScore = score;
        best = d;
      }
    }
    return best;
  }, [who, vibe]);

  const reset = () => {
    setStep(0);
    setWho(null);
    setVibe(null);
    setPace(null);
  };

  return (
    <section className="relative bg-[#fbf8f3] py-24 md:py-36">
      <div className="mx-auto max-w-[900px] px-5 md:px-10 text-center">
        <h2
          className="font-display mx-auto max-w-[16ch] uppercase text-[#2b1d12]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.6rem)", lineHeight: 1.05 }}
        >
          Not sure where to go
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-[#2b1d12]/70" style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
          Answer three quick questions. We will match you with the trip our
          Mumbai travellers book most for people like you.
        </p>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-black/[0.07] bg-white/60 p-7 text-left md:p-12">
          <p className="text-[12px] uppercase tracking-[0.24em] text-[#2b1d12]/60">
            {step < 3 ? `Question ${step + 1} of 3` : "Your match"}
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && (
                <div>
                  <h3 className="font-display mt-4 text-3xl uppercase text-[#2b1d12]">Who is travelling</h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {WHOS.map((w) => (
                      <button
                        key={w.id}
                        onClick={() => { setWho(w.id); setStep(1); }}
                        className="rounded-full border border-[#2b1d12]/25 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-[#2b1d12] transition-all hover:bg-[#2b1d12] hover:text-[#fbf8f3] active:scale-[0.98]"
                      >
                        {w.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step === 1 && (
                <div>
                  <h3 className="font-display mt-4 text-3xl uppercase text-[#2b1d12]">Pick a vibe</h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {VIBES.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => { setVibe(v.id); setStep(2); }}
                        className="rounded-full border border-[#2b1d12]/25 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-[#2b1d12] transition-all hover:bg-[#2b1d12] hover:text-[#fbf8f3] active:scale-[0.98]"
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(0)} className="mt-8 text-sm text-[#2b1d12]/60 underline underline-offset-4">
                    Back
                  </button>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h3 className="font-display mt-4 text-3xl uppercase text-[#2b1d12]">What pace</h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {PACES.map((p) => (
                      <button
                        key={p}
                        onClick={() => { setPace(p); setStep(3); }}
                        className="rounded-full border border-[#2b1d12]/25 px-7 py-3.5 text-[13px] uppercase tracking-[0.18em] text-[#2b1d12] transition-all hover:bg-[#2b1d12] hover:text-[#fbf8f3] active:scale-[0.98]"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="mt-8 text-sm text-[#2b1d12]/60 underline underline-offset-4">
                    Back
                  </button>
                </div>
              )}
              {step === 3 && who === "corporate" && (
                <div>
                  <h3 className="font-display mt-4 text-3xl uppercase text-[#2b1d12]">Corporate travel desk</h3>
                  <p className="mt-4 max-w-[52ch] text-[#2b1d12]/70" style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
                    For teams and offsites, talk to our corporate desk directly. Hotel
                    bookings, group movements and on-call support, managed from Mumbai.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="/corporate-service"
                      className="inline-flex items-center rounded-full bg-[#1c1410] px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#fbf8f3] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                    >
                      Corporate travel
                    </a>
                    <button
                      onClick={reset}
                      className="inline-flex items-center rounded-full border border-[#2b1d12]/25 px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-[#2b1d12]"
                    >
                      Retake
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && who !== "corporate" && result && (
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <img
                    src={result.hero}
                    alt={`${result.name}, ${result.tagline}`}
                    loading="lazy"
                    className="h-64 w-full rounded-2xl object-cover md:h-80"
                  />
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.24em] text-[#2b1d12]/60">
                      {who} · {vibe} · {pace} pace
                    </p>
                    <h3 className="font-display mt-3 text-4xl uppercase text-[#2b1d12]">{result.name}</h3>
                    <p className="mt-3 text-[#2b1d12]/70" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                      {result.tagline} {result.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={`/destinations/${result.slug}`}
                        className="inline-flex items-center rounded-full bg-[#1c1410] px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[#fbf8f3] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                      >
                        View guide
                      </a>
                      <a
                        href="#contact"
                        className="btn-fill inline-flex items-center rounded-full border border-black/25 px-8 py-4 text-[12px] uppercase tracking-[0.2em]"
                      >
                        Enquire
                      </a>
                    </div>
                    <button onClick={reset} className="mt-6 text-sm text-[#2b1d12]/60 underline underline-offset-4">
                      Retake quiz
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
