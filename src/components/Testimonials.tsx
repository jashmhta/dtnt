"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AVATARS, IMG } from "@/lib/assets";

const testimonials = [
  {
    name: "Honeymoon Couple, Mumbai",
    title: "Maldives Sorted!",
    copy: "We booked our Maldives honeymoon through Drashti Tours And Travels. Flights, stay and transfers were handled end to end within our budget. We just packed and flew.",
    img: AVATARS.kenneth,
  },
  {
    name: "Family Traveller, Mumbai",
    title: "Kashmir Made Easy!",
    copy: "Planning Kashmir for the family felt overwhelming until we called Drashti on 88796 67506. They handled hotels, sightseeing and support on call. It felt like family had planned it for us.",
    img: AVATARS.amir,
  },
];

export default function Testimonials() {
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

  const t = testimonials[index];

  return (
    <section className="relative bg-[#fbf8f3]">
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-20 text-center md:pt-28">
        <h2
          className="font-display mx-auto max-w-[16ch] uppercase text-[#2b1d12]"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4.6rem)", lineHeight: 1.05 }}
        >
          Trusted by travelers who return
        </h2>
      </div>

      <div className="relative">
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

      <img src={IMG.testiBottom} alt="" aria-hidden loading="lazy" className="block aspect-[16/10] w-full object-cover md:aspect-[21/8]" />
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
