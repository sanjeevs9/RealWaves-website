import { WhyChooseUsCard } from "../components/WhyChooseUsCard";
import { WhyChooseUsData as data } from "@/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="section-heading max-w-2xl">
            Why Choosing Us Is the Smart Move for Your Business
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[...data].slice(0, 6).map((item, index) => (
            <WhyChooseUsCard
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              icon={<div dangerouslySetInnerHTML={{ __html: item.icon1 }} />}
              icon2={<div dangerouslySetInnerHTML={{ __html: item.icon2 }} />}
              extraText={item.extraText}
              imageSrc={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
