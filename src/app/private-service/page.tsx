import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import TravelGrid from "@/components/TravelGrid";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export const metadata: Metadata = {
  title: "Honeymoon Packages Mumbai | Drashti Tours",
  description:
    "Honeymoon specials to Kashmir, Maldives, Thailand and Singapore. Best stays within your budget, planned from Mumbai.",
};

export default function Private() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <PageHero
          title="Honeymoon travel"
          copy="Honeymoon specials to Kashmir, Maldives, Thailand and Singapore. Best stays within your budget, planned with care. Flights, hotels, transfers and support on call, from Mumbai to the world."
        />
        <TravelGrid />
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}
