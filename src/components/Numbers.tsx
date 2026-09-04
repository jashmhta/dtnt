"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG, PARTNERS } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

function useCounter(target: number, started: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return val;
}

function Stat({
  value,
  suffix,
  label,
  extra,
  started,
}: {
  value: number;
  suffix: string;
  label: React.ReactNode;
  extra?: string;
  started: boolean;
}) {
  const v = useCounter(value, started);
  return (
    <div>
      <div
        className="font-display tabular-nums text-[#2b1d12]"
        style={{ fontSize: "clamp(3.4rem, 6vw, 5.6rem)", lineHeight: 1 }}
      >
        {v}
        <span className="italic font-light">{suffix}</span>
      </div>
      <div
        className="mt-3 uppercase text-[#2b1d12]/70"
        style={{ fontSize: "12px", letterSpacing: "0.24em", lineHeight: 1.9 }}
      >
        {label}
        {extra ? (
          <>
            <br />
            <span className="font-display normal-case italic" style={{ fontSize: "1.3rem", letterSpacing: 0 }}>
              {extra}
            </span>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default function Numbers() {
  const root = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".stats-grid",
        start: "top 80%",
        once: true,
        onEnter: () => setStarted(true),
      });
      gsap.to(".num-photo", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="numbers" className="relative bg-[#fbf8f3]">
      <div className="relative overflow-hidden">
        <div className="num-photo absolute -inset-y-[8%] inset-x-0">
          <img src={IMG.numTop} alt="Sunrise over mountain lake" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-40 md:px-10 md:pb-32 md:pt-64">
          <h2
            className="font-display max-w-[14ch] uppercase text-[#2b1d12]"
            style={{ fontSize: "clamp(2.4rem, 5.4vw, 5rem)", lineHeight: 1.04 }}
          >
            Experience you can rely on
          </h2>
          <div className="stats-grid mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value={94} suffix="%" label={<>Repeat<br />Bookings</>} started={started} />
            <Stat value={89} suffix="%" label={<>Net Promotor Score</>} started={started} />
            <Stat value={5} suffix="" label={<>Average Agent Experience</>} extra="years" started={started} />
            <Stat value={25} suffix="+" label={<>Travel<br />Agents</>} started={started} />
          </div>
          <p
            className="mb-6 mt-20 uppercase text-[#2b1d12]/60"
            style={{ fontSize: "12px", letterSpacing: "0.3em" }}
          >
            Partners
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
            {PARTNERS.slice(0, 5).map((src, i) => (
              <img key={i} src={src} alt="Partner logo" loading="lazy" className="h-9 w-auto object-contain brightness-0 md:h-11" />
            ))}
          </div>
        </div>
      </div>
      <img src={IMG.numFin} alt="Golden mountain sunset" loading="lazy" className="block w-full" />
    </section>
  );
}
