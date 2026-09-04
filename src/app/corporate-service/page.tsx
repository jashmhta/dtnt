import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export default function Corporate() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <Hero />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-32 md:py-40">
          <h2 className="font-display text-[9vw] sm:text-5xl lg:text-6xl leading-[1.02] max-w-[20ch]">
            Corporate travel
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed opacity-70 max-w-2xl mx-auto">
            Efficient, reliable travel management for businesses and executives who
            need things done right. From weekly city hops to global executive
            programs, we handle the complexity so your team can focus on work.
          </p>
        </section>
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}