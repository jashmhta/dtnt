import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";
import { DESTINATIONS } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations | Drashti Tours Mumbai",
  description:
    "Honeymoon and holiday destinations from Mumbai: Kashmir, Maldives, Bali, Thailand, Singapore, Europe, Turkey, Bhutan, Vietnam and Mauritius.",
};

export default function Destinations() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <PageHero
          title="Destinations"
          copy="Ten routes our Mumbai travellers book again and again. Open any guide for highlights and a day-wise plan, then call +91 88796 67506 to book it around your dates."
        />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-24 md:pb-32">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <a
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="group relative block h-[52vh] overflow-hidden rounded-[28px]"
              >
                <img
                  src={d.hero}
                  alt={`${d.name}, ${d.tagline}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h2 className="font-display text-4xl uppercase text-white">{d.name}</h2>
                  <p className="mt-2 text-sm text-white/85">{d.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    View guide <span aria-hidden>↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}
