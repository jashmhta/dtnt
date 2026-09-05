"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function Security() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sec-bg",
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
      gsap.fromTo(
        ".sec-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".sec-grid", start: "top 82%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="mx-3 md:mx-6 rounded-[28px] bg-[#1c1410] text-[#fbf8f3] overflow-hidden relative py-20 md:py-28"
    >
      <img
        src={IMG.securityBg}
        alt=""
        loading="lazy"
        className="sec-bg pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-80"
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-[9vw] sm:text-5xl lg:text-6xl leading-[1.02] max-w-[20ch]">
          Seamless Visas for the Modern Traveler
        </h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-6 text-[15px] leading-relaxed opacity-80 max-w-[110ch]">
          <p>
            We handle flights, hotels, visas and transfers from Mumbai, from
            honeymoons in Kashmir and Maldives to holidays in Europe, Bali
            and Turkey. One call to 88796 67506 or a DM to @drashtitours,
            and every detail is taken care of within your budget.
          </p>
          <p>
            You retain total control over your plan. Drashti Tours And
            Travels has served Mumbai since 2012 with corporate hotel
            bookings, tour packages and visa support for families, couples
            and businesses.
          </p>
        </div>

        <div className="sec-grid mt-12 grid md:grid-cols-1 gap-5">
          <div className="sec-card rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur p-8 md:p-10">
            <h3 className="font-display text-3xl md:text-4xl">
              Visas are not paperwork, they’re peace of mind
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
