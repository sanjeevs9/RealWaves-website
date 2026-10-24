import MapSection from "./Sections/location";
import WhyChooseUsSection from "./Sections/WhyChooseUs";
// import WhyUs from "./Sections/WhyUs";
import AboutVideoSection from "./Sections/AboutUs";
import ContactUs from "./Sections/ContactUs";
import Reviews from "./Sections/Reviews";
import HomeHero from "./components/HomeHero";
import PromoBanners from "./components/PromoBanners";
// import Hero3 from "./components/Hero3";
import type { Metadata } from "next";
import { SITE_NAME, DEFAULT_OPEN_GRAPH } from "./site";

const title = `Non-Woven Bag Manufacturer in Raipur | ${SITE_NAME}`;
const description =
  "RealWaves Packs makes custom printed non-woven bags in Raipur, Chhattisgarh: D-Cut, U-Cut, Loop Handle, Box and BOPP bags, supplied wholesale across India.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { ...DEFAULT_OPEN_GRAPH, title, description, url: "/" },
};

export default function Home() {
  return (
    <>
      <div className="bg-cream min-h-screen w-full">
        <HomeHero />
        <PromoBanners />
        <AboutVideoSection />
        {/* Sits right under the About section and shares its spacing (no top padding) */}
        <WhyChooseUsSection />
        <MapSection />
      </div>
      {/* <WhyUs />/ */}
      <Reviews />
      <ContactUs />
    </>
  );
}
