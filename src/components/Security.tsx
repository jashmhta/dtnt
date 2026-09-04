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
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-[9vw] sm:text-5xl lg:text-6xl leading-[1.02] max-w-[20ch]">
          Uncompromising Security for the Modern Traveler
        </h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-6 text-[15px] leading-relaxed opacity-80 max-w-[110ch]">
          <p>
            We understand that travel requires the exchange of highly sensitive
            information, from passport scans to private itineraries. We believe
            that true premium service is impossible without absolute digital
            discretion. Our security framework is built on a &quot;Zero
            Trust&quot; architecture, ensuring that your personal identity and
            financial data are shielded by the most advanced protective measures
            available in the travel industry.
          </p>
          <p>
            We also believe you should retain total sovereignty over your digital
            footprint. Flyward is one of the few agencies to offer a Data Kill
            Switch, an on-demand feature that allows you to instantly trigger the
            permanent deletion of all your stored personal documents.
          </p>
        </div>

        <div className="sec-grid mt-12 grid md:grid-cols-1 gap-5">
          <div className="sec-card rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur p-8 md:p-10">
            <h3 className="font-display text-3xl md:text-4xl">
              Security is not a feature, it’s a foundation
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
