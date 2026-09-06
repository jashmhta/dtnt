import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export const metadata: Metadata = {
  title: "Contact Us | UdaanToli Mumbai",
  description:
    "Call +91 88796 67506, DM @drashtitours or send an enquiry. Honeymoon, holiday and corporate travel from Mumbai.",
};

const FAQS = [
  {
    q: "Do you help with tourist visas?",
    a: "Yes. We handle tourist visa guidance end to end: documents, appointments and follow-ups, along with your flights and hotels, so the whole trip is booked in one place.",
  },
  {
    q: "Which honeymoon packages are most popular?",
    a: "Kashmir, Maldives, Thailand and Singapore. Tell us your dates and budget on +91 88796 67506 and we will plan stays, transfers and sightseeing within it.",
  },
  {
    q: "Do you handle corporate hotel bookings?",
    a: "Yes. We manage corporate hotel bookings, group movements, transfers and on-call support for Mumbai businesses, from weekly stays to full group travel.",
  },
  {
    q: "How do I book a trip?",
    a: "Call +91 88796 67506, DM @drashtitours on Instagram, or send the enquiry form above. We confirm hotels, flights and transfers before you pay anything.",
  },
  {
    q: "Where is your office?",
    a: "Our studio is in Kandivali West, Mumbai. We have planned honeymoons, holidays and corporate travel since 2012, serving travellers across India.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Contact() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <PageHero
          title="Contact us"
          copy="Call +91 88796 67506, DM @drashtitours or send the enquiry form below. Honeymoon, holiday and corporate travel from Kandivali West, Mumbai."
        />
        <CTA />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 pb-24 md:pb-32">
          <h2 className="font-display max-w-[20ch] text-[9vw] sm:text-5xl lg:text-6xl leading-[1.02]">
            Questions travellers ask
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-2xl">{f.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed opacity-70">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Overlays />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </div>
  );
}
