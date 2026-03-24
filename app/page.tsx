import MapSection from "./Sections/location";
import WhyChooseUsSection from "./Sections/WhyChooseUs";
// import WhyUs from "./Sections/WhyUs";
import AboutVideoSection from "./Sections/AboutUs";
import ContactUs from "./Sections/ContactUs";
import Reviews from "./Sections/Reviews";
import Hero2 from "./components/Hero2";
// import Hero3 from "./components/Hero3";
export default function Home() {
  return (
    <>
      <div className="bg-cream min-h-screen w-full">
        <Hero2 />
        <AboutVideoSection />
        <MapSection />
      </div>
      <WhyChooseUsSection/>
      {/* <WhyUs />/ */}
      <Reviews />
      <ContactUs />
    </>
  );
}
