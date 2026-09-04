"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function TravelGrid() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".travel-photo").forEach((el) => {
        gsap.fromTo(
          el.querySelector("img"),
          { yPercent: -10, scale: 1.15 },
          {
            yPercent: 10,
            scale: 1.15,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[#fbf8f3]">
      <div className="grid md:grid-cols-2">
        <a id="private" href="#contact" className="travel-photo group relative block min-h-[92vh] overflow-hidden">
          <img
            src={IMG.grid1}
            alt="Private travel — resort pool with umbrella"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
            <span
              data-reveal
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2 uppercase text-white"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}
            >
              Explore <span aria-hidden>↗</span>
            </span>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h3
                data-reveal
                className="font-display uppercase leading-[1.0] text-white"
                style={{ fontSize: "clamp(2.6rem, 4.6vw, 4.4rem)" }}
              >
                Private
                <br />
                travel
              </h3>
              <p data-reveal className="max-w-[30ch] text-white/85" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Thoughtfully planned travel for individuals and families.
                Every detail handled with care, discretion, and flexibility.
              </p>
            </div>
          </div>
        </a>

        <a id="corporate" href="#contact" className="travel-photo group relative block min-h-[92vh] overflow-hidden">
          <img
            src={IMG.grid2}
            alt="Corporate travel — traveler at a marina"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
            <span
              data-reveal
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2 uppercase text-white"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}
            >
              Explore <span aria-hidden>↗</span>
            </span>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h3
                data-reveal
                className="font-display uppercase leading-[1.0] text-white"
                style={{ fontSize: "clamp(2.6rem, 4.6vw, 4.4rem)" }}
              >
                Corporate
                <br />
                travel
              </h3>
              <p data-reveal className="max-w-[30ch] text-white/85" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Efficient, reliable travel management for businesses and
                executives who need things done right
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
