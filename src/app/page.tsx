import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import TravelGrid from "@/components/TravelGrid";
import Marquee from "@/components/Marquee";
import Journey from "@/components/Journey";
import Escapes from "@/components/Escapes";
import Numbers from "@/components/Numbers";
import Testimonials from "@/components/Testimonials";
import Security from "@/components/Security";
import Quiz from "@/components/Quiz";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <Hero />
        <Intro />
        <TravelGrid />
        <Marquee />
        <Journey />
        <Escapes />
        <Numbers />
        <Testimonials />
        <Security />
        <Quiz />
        <CTA />
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}
