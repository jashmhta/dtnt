"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AVATARS, IMG } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Kenneth Mackinnon",
    title: "Top Notch!",
    copy: "I originally thought using an agent would be more expensive, but Flyward actually saved me money. Their relationships with airlines and hotels meant I got a what I wanted for a better price. They are masters at optimizing a budget.",
    img: AVATARS.kenneth,
  },
  {
    name: "Amir Elayyan",
    title: "Great Experience!",
    copy: "Planning a holiday to Madagascar was something I always thought would be a logistical nightmare, until I called Flyward. They handled everything: research, planning, bookings, even payments, then simply sent me the final itinerary and invoice. I was speechless. It felt like a close family member had taken care of it all, anticipating every detail before I even asked. This is more than service, it’s trust and warmth, wrapped into one incredible team.",
    img: AVATARS.amir,
  },
];

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, direction?: number) => {
    setDir(direction ?? (next > index ? 1 : -1));
    setIndex((next + testimonials.length) % testimonials.length);
  }, [index]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".testi-photo", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const t = testimonials[index];

  return (
    <section ref={root} className="relative bg-[#fbf8f3]">
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-20 text-center md:pt-28">
        <h2
          className="font-display mx-auto max-w-[16ch] uppercase text-[#2b1d12]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.6rem)", lineHeight: 1.05 }}
        >
          Trusted by travelers who return
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="testi-photo absolute -inset-y-[10%] inset-x-0">
          <img
            src={IMG.testiBg}
            alt="Mountain terrace restaurant at dusk"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#fbf8f3]/25" />

        <div className="relative mx-auto max-w-[900px] px-6 py-24 text-center md:py-36">
          <button
            onClick={() => go(index - 1, -1)}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#2b1d12]/40 text-[#2b1d12] transition-all hover:bg-[#2b1d12] hover:text-[#fbf8f3] md:inline-flex"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            onClick={() => go(index + 1, 1)}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#2b1d12]/40 text-[#2b1d12] transition-all hover:bg-[#2b1d12] hover:text-[#fbf8f3] md:inline-flex"
          >
            <span aria-hidden>→</span>
          </button>

          <div key={index} className="testi-enter">
            <img
              src={t.img}
              alt={t.name}
              loading="lazy"
              className="mx-auto h-16 w-16 rounded-full object-cover"
            />
            <h3
              className="font-display mt-6 uppercase text-[#2b1d12]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", letterSpacing: "0.02em" }}
            >
              {t.name}
            </h3>
            <p
              className="mt-3 uppercase text-[#2b1d12]/70"
              style={{ fontSize: "12px", letterSpacing: "0.28em" }}
            >
              {t.title}
            </p>
            <blockquote
              className="font-display mx-auto mt-8 max-w-[62ch]"
              style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.45rem)", lineHeight: 1.55 }}
            >
              {t.copy}
            </blockquote>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 md:hidden">
            <button
              onClick={() => go(index - 1, -1)}
              aria-label="Previous slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2b1d12]/40 text-[#2b1d12]"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              onClick={() => go(index + 1, 1)}
              aria-label="Next slide"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2b1d12]/40 text-[#2b1d12]"
            >
              <span aria-hidden>→</span>
            </button>
          </div>

          <p className="mt-8 text-[13px] tabular-nums text-[#2b1d12]/50">
            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <img src={IMG.testiBottom} alt="" aria-hidden loading="lazy" className="block w-full" />
      <style jsx>{`
        .testi-enter {
          animation: testiIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes testiIn {
          from {
            opacity: 0;
            transform: translateX(${dir * 40}px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .testi-enter {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
