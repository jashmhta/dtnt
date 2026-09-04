import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TravelGrid from "@/components/TravelGrid";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export default function Private() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <Hero />
        <TravelGrid />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-32 md:py-40">
          <h2 className="font-display text-[9vw] sm:text-5xl lg:text-6xl leading-[1.02] max-w-[20ch]">
            Private travel
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed opacity-70 max-w-2xl mx-auto">
            Thoughtfully planned travel for individuals and families. Every detail
            handled with care, discretion, and flexibility. From honeymoons to
            solo adventures, we design journeys as unique as you are.
          </p>
        </section>
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}