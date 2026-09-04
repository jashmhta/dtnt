import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export default function Careers() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <Hero />
        <Numbers />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-32 md:py-40 bg-[#f0ece6] rounded-[28px]">
          <h2 className="font-display text-[9vw] sm:text-5xl lg:text-6xl leading-[1.02] max-w-[16ch]">
            Join our team
          </h2>
          <p className="mt-8 text-[15px] leading-relaxed opacity-70 max-w-2xl mx-auto">
            We're always looking for passionate travel experts who want to redefine
            the industry. Competitive benefits, full travel benefits, and the chance
            to work with clients from around the world.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-display text-2xl">Benefits</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Full travel coverage for you + family</li>
                <li>Health & dental insurance</li>
                <li>Professional development budget</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Growth</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Mentorship program</li>
                <li>Quarterly travel stipend</li>
                <li>Leadership track</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Location</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Dubai HQ</li>
                <li>London office</li>
                <li>New York hub</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Culture</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Quarterly retreats</li>
                <li>Hack weeks</li>
                <li>Team first</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}