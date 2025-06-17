import { WhyChooseUsCard} from "../components/WhyChooseUsCard";
import image5 from '../../public/WhyChooseus/close-up-environment-sign-collection.jpg';

import image2 from '../../public/WhyChooseus/light-bulb-with-drawing-graph.jpg';

import image3 from '../../public/WhyChooseus/location-symbol-with-landscape-background.jpg';

import image4 from '../../public/WhyChooseus/woman-holding-gift-bag-desk.jpg';

import image1 from '../../public/WhyChooseus/ecological-bag-grass.jpg';

import image6 from '../../public/WhyChooseus/laptop-delivery-truck-with-box.jpg';





import { icon1, icon10, icon11, icon12, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9 } from "@/constants";

const data = [
  {
    title: "Sustainable Products",
    description: "Partnering with realwave transformed our packaging process—superior quality, reliable delivery, and outstanding customer service.They've become a vital part of our supply chain. Highly recommend for any B2B needs!",
    icon1,
    icon2,
    extraText: "They've become a vital part of our supply chain. Highly recommend for any B2B needs!",
    image: image1
  },
  {
    title: "7+ Years of Expertise",
    description: "With over 7 years of experience in non-woven bag manufacturing, our team delivers consistently high-quality products and understands the evolving needs of businesses across sectors.",
    icon1:icon3,
    icon2:icon4,
    extraText: "Trusted by shops and brands across industries for reliability, consistency, and attention to detail.",
    image: image2
  },
  {
    title: "Nationwide & Export Delivery",
    description: "Based in the heart of Chhattisgarh, we are strategically positioned to serve clients across India and beyond. Our logistics network ensures timely delivery, wherever you are.",
    icon1:icon5,
    icon2:icon6,
    extraText: "Whether you're a local shop or a global brand, we deliver quality bags at your doorstep—on time, every time.",
    image: image3
  },
  {
    title: "Custom Branding & Printing",
    description: "From logos to taglines, we offer personalized printing options to help businesses reflect their brand identity with every bag. Professional design support available on request.",
    icon1:icon7,
    icon2:icon8,
    extraText: "Turn every bag into a walking billboard for your business.",
    image: image4
  },
  {
    title: "Eco-Conscious Manufacturing",
    description: "We follow sustainable production practices using recyclable and reusable materials to reduce environmental impact. Eco-friendly choices without compromising on quality.",
    icon1:icon9,
    icon2:icon10,
    extraText: "Helping brands go green—one bag at a time.",
    image: image5
  },
  {
    title: "Quick Turnaround & Competitive Pricing",
    description: "Our streamlined production and delivery process ensures fast turnaround times without cutting corners. Transparent pricing and a flexible, client-first approach make working with us easy.",
    icon1:icon11,
    icon2:icon12,
    extraText: "Fast, fair, and focused on helping your business grow.",
    image: image6
    }
]

export default function WhyChooseUs() {
  return (
    <div className="w-full pl-40 pr-40 pt-14 pb-16">
      <div className="text-start mb-12 pl-10">
        <p className="text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">Why Realwaves?</p>
        <h2 className="text-4xl font-normal text-black font-roboto leading-[124%] tracking-[2px]">
          Why Choosing Us Is the Smart Move for Your Business?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...data].slice(0, 6).map((item, index) =>
        
        {
          console.log({index})
          return (
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
          )
        })}
      </div>
    </div>
  );
}

