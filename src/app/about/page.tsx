import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export default function About() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <Hero />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-24 md:py-32 text-center">
          <h2 className="font-display max-w-[28ch] mx-auto text-[9vw] sm:text-5xl lg:text-6xl leading-[1.02]">
            About Flyward
          </h2>
          <p className="mt-8 text-[15px] leading-relaxed opacity-70 max-w-2xl mx-auto">
            We manage travel end to end for individuals and businesses. As your
            travel partner, we take care of every detail, so you can focus on what
            really matters. Since 2025, we've been redefining travel for a modern
            world — combining premium service with uncompromising security.
          </p>
        </section>
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}