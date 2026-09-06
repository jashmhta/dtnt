import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export const metadata: Metadata = {
  title: "About Us | UdaanToli Mumbai",
  description:
    "UdaanToli has planned honeymoons, holidays and corporate travel from Mumbai since 2012. Call +91 88796 67506.",
};

export default function About() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <PageHero
          title="About UdaanToli"
          copy="From our Kandivali West studio in Mumbai, we have planned honeymoons, holidays and corporate travel since 2012. Flights, hotels, visas and transfers, handled end to end within your budget. Call +91 88796 67506 or DM @drashtitours."
        />
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}
