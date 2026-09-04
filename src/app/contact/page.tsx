import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export default function Contact() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <Hero />
        <CTA />
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}