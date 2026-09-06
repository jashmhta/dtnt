"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMG } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(max-width: 767px)").matches;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          }
        );
      });
      if (coarse) return;
      gsap.to(".intro-photo", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".intro-media",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".transition-bg-img", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".transition-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} id="discover" className="relative bg-[#fbf8f3]">
      <section className="intro-media relative overflow-hidden">
        <div className="intro-photo absolute -inset-y-[10%] inset-x-0">
          <img
            src={IMG.transitionBg}
            alt="Sunset over mountains from an airplane wing"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#1c1410]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-40 pt-28 md:px-10 md:pb-56 md:pt-40">
          <h2
            data-reveal
            className="font-display max-w-[14ch] uppercase text-white"
            style={{ fontSize: "clamp(2.6rem, 6.2vw, 5.8rem)", lineHeight: 1.0, letterSpacing: "0.01em" }}
          >
            We make dream trips simple
          </h2>
          <div className="mt-10 grid gap-6 text-white/90 md:grid-cols-3 md:pl-[38%]">
            <p data-reveal style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
              We don’t just book flights and hotels.
            </p>
            <p data-reveal style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
              We manage the entire journey, before, during and after travel,
              anticipating needs, resolving issues proactively, and ensuring
              every trip runs smoothly.
            </p>
            <p data-reveal style={{ fontSize: "0.98rem", lineHeight: 1.65 }}>
              From honeymoons in Kashmir and Maldives to Europe and Bali,
              UdaanToli operates from Mumbai as an extension of your family.
            </p>
          </div>
        </div>
      </section>

      <section className="transition-wrap relative bg-[#101418]">
        <div className="transition-bg-img">
          <img
            src={IMG.travelBottom}
            alt="Dark mountain silhouette at dusk"
            loading="lazy"
            className="h-[46vh] w-full object-cover md:h-[62vh]"
          />
        </div>
        <h3
          aria-label="Holidays crafted around you"
          className="font-display pointer-events-none absolute inset-0 flex flex-col items-center justify-center uppercase leading-[1.02]"
          style={{
            fontSize: "clamp(2.4rem, 7vw, 6.5rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(251,248,243,0.85)",
          }}
        >
          <span>Holidays crafted</span>
          <span>around you</span>
        </h3>
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-white/20 md:block" />
      </section>
    </div>
  );
}
