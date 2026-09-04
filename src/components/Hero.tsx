"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { IMG } from "@/lib/assets";
import { HERO_MASK_BLOB } from "@/lib/hero-mask";

gsap.registerPlugin(ScrollTrigger);

function GridSvg() {
  return (
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1440 840"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <g opacity="0.5">
        {[60, 415.5, 423.5, 787].map((y) => (
          <rect key={y} x="52" y={y} width="1336" height="1" fill="#C2C6CA" />
        ))}
        {[52, 386, 720, 1054, 1388].map((x) => (
          <g key={x}>
            <line x1={x} y1={69} x2={x} y2={415} stroke="#C2C6CA" strokeWidth="1" />
            <line x1={x} y1={432} x2={x} y2={779} stroke="#C2C6CA" strokeWidth="1" />
          </g>
        ))}
        <path
          d="M52 69C197.7 278.2 442.5 415.5 720 415.5C997.5 415.5 1242.3 278.2 1388 69"
          stroke="#C4C3C1"
          strokeWidth="0.96"
          strokeDasharray="3.83 3.83"
          fill="none"
        />
        <path
          d="M52 779C197.7 569.8 442.5 432.5 720 432.5C997.5 432.5 1242.3 569.8 1388 779"
          stroke="#C4C3C1"
          strokeWidth="0.96"
          strokeDasharray="3.83 3.83"
          fill="none"
        />
      </g>
    </svg>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 29 32" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14.44 0 16.42 11.89l11.29-4.23.39.67L18.79 16l9.31 7.67-.39.67-11.29-4.23L14.44 32h-.78l-1.98-11.89L.39 24.33 0 23.67 9.31 16 0 8.33l.39-.67 11.29 4.23L13.66 0h.78Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const maskUrl = useMemo(() => {
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 840">` +
      `<rect width="1440" height="840" fill="black"/>` +
      `<path d="${HERO_MASK_BLOB}" fill="white"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, []);

  useEffect(() => {
    if (!root.current || !photo.current) return;
    if (reduce) return;
    const ctx = gsap.context(() => {
      const state = { size: 26 };
      const apply = () => {
        if (!photo.current) return;
        photo.current.style.webkitMaskImage = maskUrl;
        photo.current.style.maskImage = maskUrl;
        photo.current.style.webkitMaskRepeat = "no-repeat";
        photo.current.style.maskRepeat = "no-repeat";
        photo.current.style.webkitMaskPosition = "45% 42%";
        photo.current.style.maskPosition = "45% 42%";
        photo.current.style.maskMode = "luminance";
        (photo.current.style as CSSStyleDeclaration & { webkitMaskMode?: string }).webkitMaskMode =
          "luminance";
        photo.current.style.webkitMaskSize = `${state.size}% auto`;
        photo.current.style.maskSize = `${state.size}% auto`;
      };
      apply();
      gsap.to(state, {
        size: 340,
        ease: "none",
        onUpdate: apply,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });
      gsap.to(".hero-photo-inner", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      gsap.to(".hero-title", {
        yPercent: -46,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "55% top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, [maskUrl, reduce]);

  return (
    <section ref={root} id="top" className="relative h-[220vh] bg-[#fbf8f3]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <GridSvg />
        <div className="absolute left-[7%] top-[22%] opacity-70 text-[#3d2d20]">
          <Star className="h-5 w-5 animate-[spin_14s_linear_infinite]" />
        </div>
        <div className="absolute right-[9%] top-[30%] opacity-50 text-[#3d2d20]">
          <Star className="h-4 w-4 animate-[spin_14s_linear_infinite_reverse]" />
        </div>

        <div ref={photo} className="absolute inset-0">
          <div className="hero-photo-inner absolute -inset-y-[8%] inset-x-0">
            <Image
              src={IMG.heroBottom}
              alt="Aerial view of clouds below the horizon"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="hero-title absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-[12ch] text-balance uppercase text-white"
            style={{
              fontSize: "clamp(2.4rem, 5.6vw, 5.2rem)",
              lineHeight: 0.98,
              letterSpacing: "0.02em",
              textShadow: "0 1px 30px rgba(28,20,16,0.35)",
            }}
          >
            With you at every horizon
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 max-w-[54ch] text-white/90"
            style={{ fontSize: "1.02rem", lineHeight: 1.6 }}
          >
            We manage travel end to end for individuals and businesses. As your
            travel partner, we take care of every detail, so you can focus on
            what really matters.
          </motion.p>
          <motion.a
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
            href="#discover"
            className="mt-8 inline-flex items-center rounded-full bg-[#fbf8f3] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.22em] text-[#1c1410] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] active:scale-[0.98]"
          >
            Discover
          </motion.a>
        </div>
      </div>
    </section>
  );
}
