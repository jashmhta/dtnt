"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ESCAPES } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

function Card({ name, blurb, img }: { name: string; blurb: string; img: string }) {
  return (
    <a
      href="#contact"
      className="group relative block h-[62vh] w-[75vw] shrink-0 overflow-hidden rounded-[28px] md:w-[30vw]"
    >
      <img
        src={img}
        alt={`${name}, ${blurb}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <h3 className="font-display text-4xl uppercase text-white">{name}</h3>
        <p className="mt-2 text-sm text-white/85">{blurb}</p>
        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
          Enquire <span aria-hidden>↗</span>
        </span>
      </div>
    </a>
  );
}

export default function Escapes() {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const staticLayout = reduce || coarse;

  useEffect(() => {
    if (staticLayout || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [staticLayout]);

  if (staticLayout) {
    return (
      <section className="bg-[#fbf8f3] py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <h2 className="font-display max-w-[14ch] uppercase text-[#2b1d12]" style={{ fontSize: "clamp(2.4rem, 5.4vw, 5rem)", lineHeight: 1.04 }}>
            Escapes travellers ask for
          </h2>
          <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {ESCAPES.map((e) => (
              <div key={e.name} className="shrink-0 snap-start">
                <Card {...e} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={wrap} className="relative overflow-hidden bg-[#fbf8f3]">
      <div ref={track} className="flex h-[100dvh] items-center gap-6 px-5 md:px-10">
        <div className="w-[80vw] shrink-0 md:w-[32vw]">
          <h2 className="font-display uppercase text-[#2b1d12]" style={{ fontSize: "clamp(2.4rem, 5vw, 4.6rem)", lineHeight: 1.04 }}>
            Escapes travellers ask for
          </h2>
          <p className="mt-6 max-w-[38ch] text-[#2b1d12]/70" style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
            Five routes our Mumbai travellers book again and again. Scroll on.
            Each one is planned around your dates and budget.
          </p>
        </div>
        {ESCAPES.map((e) => (
          <Card key={e.name} {...e} />
        ))}
        <div className="w-[10vw] shrink-0" />
      </div>
    </section>
  );
}
