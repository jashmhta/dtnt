"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Day } from "@/lib/destinations";

gsap.registerPlugin(ScrollTrigger);

export default function Itinerary({ days }: { days: Day[] }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".iti-item").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      <div className="pointer-events-none absolute bottom-0 left-[23px] top-2 w-px bg-[#2b1d12]/15 md:left-[27px]" />
      <div className="flex flex-col gap-10">
        {days.map((d) => (
          <div key={d.day} className="iti-item relative grid gap-4 pl-16 md:pl-20">
            <span
              aria-hidden
              className="font-display absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#2b1d12] text-sm text-[#fbf8f3] md:h-14 md:w-14"
            >
              {d.day.replace("Day ", "")}
            </span>
            <div>
              <p className="text-[12px] uppercase tracking-[0.24em] text-[#2b1d12]/60">{d.day}</p>
              <h3 className="font-display mt-1 text-2xl uppercase text-[#2b1d12] md:text-3xl">
                {d.title}
              </h3>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-[#2b1d12]/70">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
