'use client'
import { WhyChooseUsCard } from "../components/WhyChooseUsCard";
import { WhyChooseUsData as data } from "@/constants";
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations';

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn delay={0.1} direction="up">
        <div className="mb-12 sm:mb-16">
          <h2 className="section-heading max-w-2xl">
            Why Choosing Us Is the Smart Move for Your Business
          </h2>
        </div>
        </FadeIn>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {[...data].slice(0, 6).map((item, index) => (
            <StaggerItem key={index}>
            <WhyChooseUsCard
              index={index}
              title={item.title}
              description={item.description}
              icon={<div dangerouslySetInnerHTML={{ __html: item.icon1 }} />}
              icon2={<div dangerouslySetInnerHTML={{ __html: item.icon2 }} />}
              extraText={item.extraText}
              imageSrc={item.image}
            />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
