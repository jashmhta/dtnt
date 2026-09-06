import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Numbers from "@/components/Numbers";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export const metadata: Metadata = {
  title: "Careers | UdaanToli Mumbai",
  description:
    "Join our Mumbai travel team. Learn visas and bookings, travel on duty and grow into a trip leader. Write to drashti.tours@gmail.com.",
};

export default function Careers() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <PageHero
          title="Join our team"
          copy="We are always looking for passionate travel experts who love planning honeymoons, holidays and corporate trips. Learn visas and bookings with us, travel on duty, and grow with a Mumbai team travellers recommend. Write to drashti.tours@gmail.com or call +91 88796 67506."
        />
        <Numbers />
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-32 md:py-40 bg-[#f0ece6] rounded-[28px]">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-display text-2xl">Benefits</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Full travel coverage for you + family</li>
                <li>Training on visas and bookings</li>
                <li>Travel with groups on duty</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Growth</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Mentorship on every booking</li>
                <li>Learn honeymoon and holiday routes</li>
                <li>Grow into trip leader</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Location</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Kandivali West, Mumbai studio</li>
                <li>On-trip with groups</li>
                <li>Support over call and DM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl">Culture</h3>
              <ul className="list-disc list-inside text-[#2b1d12]/80 space-y-3">
                <li>Festival tours together</li>
                <li>Learning weeks</li>
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
