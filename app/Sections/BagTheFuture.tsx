import Image from "next/image";
import Link from "next/link";

export default function BagTheFuture() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overlapping layout container */}
        <div className="relative">
          {/* Text Card — acts as the base layer */}
          <div className="bg-[#EDE8DF] rounded-2xl p-8 sm:p-10 lg:p-14 lg:pr-[45%] min-h-[28rem] lg:min-h-[34rem] flex flex-col justify-center">
            <h2 className="section-heading">
              Bag The Future
            </h2>

            <div className="mt-5">
              <p className="text-lg lg:text-xl text-charcoal/80">
                Simple act, Big impact!
              </p>
              <div className="w-16 h-[3px] bg-[#8B7355] mt-3 rounded-full" />
            </div>

            <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-charcoal/65">
              We are one of the region&apos;s leading manufacturers and
              suppliers of customized eco-friendly, reusable, biodegradable
              and recyclable non-woven bags for various industries including
              supermarkets, retail chains, e-commerce, healthcare, fashion,
              hospitality, amongst others. We understand our clients&apos;
              corporate requirements in detail and provide a range of
              sustainable and green bag solutions for them to choose from.
            </p>

            <p className="mt-5 text-sm sm:text-base lg:text-lg font-semibold text-charcoal/80">
              Say goodbye to plastics and get ready to bag the future now!
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block w-fit border-2 border-[#8B7355] text-[#8B7355] rounded-sm px-10 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#8B7355] hover:text-white"
            >
              Learn More
            </Link>
          </div>

          {/* Image — overlaps the card from top-right */}
          <div className="relative mt-6 lg:mt-0 lg:absolute lg:right-6 xl:right-10 lg:top-[-2rem] lg:bottom-[-2rem] lg:w-[42%] rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-72 sm:h-96 lg:h-full bg-gradient-to-br from-[#E8E0D4] via-[#F5F0E8] to-[#DDD5C8] flex items-center justify-center">
              <Image
                src="/bags/LH4.png"
                alt="Eco-friendly reusable loop handle bag"
                width={500}
                height={600}
                className="object-contain w-full h-full p-6 lg:p-10 drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
