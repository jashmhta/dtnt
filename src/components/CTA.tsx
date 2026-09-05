"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG, VIDEOS } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const root = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-bg",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus("idle");
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "");
    await new Promise((r) => setTimeout(r, 900));
    if (!email.includes("@")) setStatus("error");
    else {
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
    }
    setSending(false);
  }

  return (
    <section ref={root} id="contact" className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none px-3 md:px-6">
        <img src={IMG.ctaBg} alt="" loading="lazy" className="cta-bg aspect-[4/3] w-full scale-110 rounded-2xl object-cover md:aspect-[21/9]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-12">
        <div className="overflow-hidden rounded-[28px] border border-black/[0.07] bg-white/60">
          <video
            className="h-[180px] md:h-[240px] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={IMG.ctaTop}
            aria-label="Ocean waves rolling onto the beach"
          >
            <source src={VIDEOS.cta} type="video/mp4" />
          </video>
          <div className="grid lg:grid-cols-2 gap-10 p-7 md:p-12">
            <div>
              <h2 className="font-display text-[9vw] sm:text-5xl lg:text-[3.4rem] leading-[1.04]">
                Tell us your dream trip. We’ll plan it from Mumbai
              </h2>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-2" aria-label="Contact enquiry">
              <div className="grid sm:grid-cols-2 gap-x-6">
                <input name="first" required placeholder="First name" aria-label="First name" autoComplete="given-name" className="field" />
                <input name="last" required placeholder="Last name" aria-label="Last name" autoComplete="family-name" className="field" />
              </div>
              <input name="email" required type="email" inputMode="email" spellCheck={false} autoComplete="email" placeholder="Email Address" aria-label="Email Address" className="field" />
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Your phone number" aria-label="Your phone number" className="field" />
              <textarea name="message" rows={4} placeholder="Message / your preferences" aria-label="Message / your preferences" className="field resize-none" />
              <button
                disabled={sending}
                aria-live="polite"
                className="btn-fill mt-6 inline-flex items-center justify-center rounded-full border border-black/25 px-8 py-4 text-[13px] uppercase tracking-[0.2em] active:scale-[0.98] disabled:opacity-50"
              >
                {sending ? "Sending…" : "Shall we begin?"}
              </button>
              {status === "ok" && (
                <p role="status" className="mt-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm">
                  Thank you! Your submission has been received!
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm">
                  Oops! Something went wrong while submitting the form. Check your email and try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
