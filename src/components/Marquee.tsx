"use client";

import { DESTINATIONS } from "@/lib/destinations";

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-8 pr-8">
      {DESTINATIONS.map((d) => (
        <a
          key={d.slug}
          href={`/destinations/${d.slug}`}
          className="font-display flex items-center gap-8 text-2xl uppercase tracking-wide text-[#3d2d20] transition-opacity hover:opacity-60 md:text-3xl"
        >
          {d.name}
          <span aria-hidden className="text-[#b99a68]">
            ✦
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Destinations we plan"
      className="relative overflow-hidden border-y border-[#1c1410]/10 bg-[#fbf8f3] py-6"
    >
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
