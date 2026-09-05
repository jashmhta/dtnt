"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "1",
    title: "Flights, Hotels, Visas & Transfers",
    copy: "Honeymoon, holiday and corporate bookings, handled from Mumbai",
    img: IMG.journey1,
    side: "right" as const,
  },
  {
    n: "2",
    title: "Call, DM Anytime",
    copy: "Real people on 88796 67506 and @drashtitours",
    img: IMG.journey2,
    side: "left" as const,
  },
  {
    n: "3",
    title: "Honeymoon & Holiday Specialists",
    copy: "Kashmir, Bali, Europe and Turkey, tailored to your budget",
    img: IMG.journey3,
    side: "right" as const,
  },
  {
    n: "4",
    title: "Corporate & Group Bookings",
    copy: "We anticipate issues and solve them before they become problems",
    img: IMG.journey4,
    side: "left" as const,
  },
];

export default function Journey() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".journey-item").forEach((el) => {
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
      const route = root.current?.querySelector(".route-draw");
      if (route) {
        const len = 2400;
        gsap.fromTo(
          route,
          { strokeDasharray: len, strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.8,
            },
          }
        );
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-[#fbf8f3] py-24 md:py-36">
      <img
        src={IMG.journeyMap}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <svg
        viewBox="0 0 1440 2200"
        preserveAspectRatio="none"
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          className="route-draw"
          d="M200 0 C 500 300, 1100 420, 950 700 S 500 1050, 700 1350 S 1100 1750, 800 2200"
          fill="none"
          stroke="#b99a68"
          strokeWidth="3"
        />
      </svg>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <h2
          className="font-display mx-auto max-w-[16ch] text-center uppercase text-[#3d2d20]"
          style={{ fontSize: "clamp(2.4rem, 5.4vw, 5rem)", lineHeight: 1.04 }}
        >
          How we support every journey
        </h2>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`journey-item grid items-center gap-8 md:grid-cols-12 ${
                s.side === "right" ? "" : ""
              }`}
            >
              <div
                className={`relative md:col-span-5 ${
                  s.side === "right" ? "md:col-start-8" : "md:col-start-1"
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <span
                  aria-hidden
                  className="font-display absolute -top-6 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#2b1d12] text-lg text-[#fbf8f3] md:-right-6"
                >
                  {s.n}
                </span>
              </div>
              <div
                className={`md:col-span-4 ${
                  s.side === "right" ? "md:col-start-4 md:text-right" : "md:col-start-7"
                }`}
              >
                <h3
                  className="font-display uppercase text-[#2b1d12]"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)", lineHeight: 1.15 }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[#2b1d12]/70" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {s.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
