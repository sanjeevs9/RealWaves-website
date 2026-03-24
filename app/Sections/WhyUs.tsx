import Image from 'next/image';

const features = [
  {
    title: 'Sustainable Products',
    description:
      'Our non-woven bags are crafted from recyclable, reusable materials — helping your brand make an eco-friendly statement without compromising on strength or quality.',
    image: '/WhyChooseus/ecological-bag-grass.jpg',
  },
  {
    title: '7+ Years of Expertise',
    description:
      'With over 7 years of experience in non-woven bag manufacturing, our team delivers consistently high-quality products and understands the evolving needs of businesses across sectors.',
    image: '/WhyChooseus/light-bulb-with-drawing-graph.jpg',
  },
  {
    title: 'Custom Branding & Printing',
    description:
      'From logos to taglines, we offer personalized printing options to help businesses reflect their brand identity with every bag. Professional design support available on request.',
    image: '/WhyChooseus/woman-holding-gift-bag-desk.jpg',
  },
  {
    title: 'Quick Turnaround & Competitive Pricing',
    description:
      'Our streamlined production and delivery process ensures fast turnaround times without cutting corners. Transparent pricing and a flexible, client-first approach make working with us easy.',
    image: '/WhyChooseus/laptop-delivery-truck-with-box.jpg',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="section-heading text-center mb-16 sm:mb-20">
          Why Choose{' '}
          <span className="text-[#0992C2]">RealWaves?</span>
        </h2>

        {/* Alternating Rows */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {features.map((feature, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-10 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2">
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal leading-snug tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-sage text-sm sm:text-base leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
