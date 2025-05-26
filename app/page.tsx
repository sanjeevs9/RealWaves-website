import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomerReviewSection from "./Sections/CustomerReviewSection";
import MapSection from "./Sections/location";
import WhyChooseUsSection from "./Sections/WhyChooseUs";
import AboutVideoSection from "./Sections/AboutUs";
import BestSellers from "./Sections/BestSellers";

export default function Home() {
  return (
    <>
      <div className="bg-white min-h-screen w-full">
        <Navbar />
        <Hero />

        <BestSellers />
        <MapSection />

        <AboutVideoSection />

        <CustomerReviewSection />
      </div>
      

      <WhyChooseUsSection />
    </>
  );
}
