import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Itinerary from "@/components/Itinerary";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";
import { DESTINATIONS, destinationBySlug } from "@/lib/destinations";

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = destinationBySlug(slug);
  if (!d) return {};
  return {
    title: `${d.name} Packages from Mumbai | Drashti Tours`,
    description: `${d.name} trips from Mumbai: ${d.tagline} Call +91 88796 67506 to plan around your dates.`,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = destinationBySlug(slug);
  if (!d) notFound();
  const i = DESTINATIONS.findIndex((x) => x.slug === slug);
  const prev = DESTINATIONS[(i - 1 + DESTINATIONS.length) % DESTINATIONS.length];
  const next = DESTINATIONS[(i + 1) % DESTINATIONS.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${d.name} trip from Mumbai`,
    description: d.description,
    touristType: d.forTags.join(", "),
    itinerary: {
      "@type": "ItemList",
      itemListElement: d.itinerary.map((s, n) => ({
        "@type": "ListItem",
        position: n + 1,
        name: `${s.day}: ${s.title}`,
        description: s.desc,
      })),
    },
    provider: {
      "@type": "TravelAgency",
      name: "Drashti Tours And Travels",
      telephone: "+91 88796 67506",
    },
  };

  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <PageHero title={d.name} copy={`${d.tagline} ${d.description}`} />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-[28px] md:col-span-2">
              <img
                src={d.gallery[0]}
                alt={`${d.name} highlight`}
                loading="lazy"
                className="h-[50vh] w-full object-cover md:h-[62vh]"
              />
            </div>
            <div className="grid gap-6">
              {d.gallery.slice(1).map((src, n) => (
                <img
                  key={n}
                  src={src}
                  alt={`${d.name} photo ${n + 2}`}
                  loading="lazy"
                  className="h-[24vh] w-full rounded-[28px] object-cover md:h-[calc(31vh-12px)]"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
          <div className="flex flex-wrap gap-3">
            {[`Best time: ${d.bestTime}`, ...d.highlights].map((h) => (
              <span
                key={h}
                className="inline-flex items-center rounded-full border border-[#2b1d12]/20 px-5 py-2 text-[12px] uppercase tracking-[0.18em] text-[#2b1d12]/80"
              >
                {h}
              </span>
            ))}
          </div>
          <h2
            className="font-display mt-16 max-w-[16ch] uppercase text-[#2b1d12]"
            style={{ fontSize: "clamp(2rem, 4.6vw, 4rem)", lineHeight: 1.05 }}
          >
            Day-wise plan
          </h2>
          <div className="mt-12">
            <Itinerary days={d.itinerary} />
          </div>
          <p className="mt-16 max-w-2xl text-[15px] leading-relaxed text-[#2b1d12]/70">
            {d.description} Every plan is adjusted to your dates and budget. Call
            +91 88796 67506 or DM @drashtitours to book.
          </p>
        </section>
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: "Previous", dest: prev },
              { label: "Next", dest: next },
            ].map(({ label, dest }) => (
              <a
                key={label}
                href={`/destinations/${dest.slug}`}
                className="group relative block overflow-hidden rounded-[28px]"
              >
                <img
                  src={dest.hero}
                  alt={dest.name}
                  loading="lazy"
                  className="h-[32vh] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-7">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/70">{label}</p>
                  <p className="font-display text-3xl uppercase text-white">{dest.name}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
      <Overlays />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
