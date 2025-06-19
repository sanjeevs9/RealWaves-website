import { WhyChooseUsCard} from "../components/WhyChooseUsCard";
import { WhyChooseUsData as data } from "@/constants";

export default function WhyChooseUs() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-40 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-12 sm:pb-14 md:pb-16">
      <div className="text-start mb-8 sm:mb-10 md:mb-12 pl-2 2xl:pl-10">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">Why Realwaves?</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black font-roboto leading-[120%] sm:leading-[122%] md:leading-[124%] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px]">
          Why Choosing Us Is the Smart Move for Your Business?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

