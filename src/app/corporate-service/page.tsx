import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Overlays from "@/components/Overlays";

export const metadata: Metadata = {
  title: "Corporate Hotel Booking Mumbai | UdaanToli",
  description:
    "Corporate hotel bookings and business travel from Mumbai. Rooms, transfers and on-call support. Call +91 88796 67506.",
};

export default function Corporate() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <PageHero
          title="Corporate travel"
          copy="Corporate hotel bookings and reliable business travel managed from Mumbai, end to end. From weekly city stays to group movements, we handle rooms, transfers and support on call. Write to drashti.tours@gmail.com or call +91 88796 67506."
        />
      </main>
      <Footer />
      <Overlays />
    </div>
  );
}
