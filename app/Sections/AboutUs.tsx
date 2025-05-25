import React from "react";

interface StatCardProps {
  value: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description }) => (
  <div className="text-center">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{value}</h3>
    <p className="text-sm md:text-base text-gray-200 leading-relaxed">
      {description}
    </p>
  </div>
);

const AboutVideoSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://realwavespacks.com/wave/wp-content/uploads/2025/04/realwaves.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Logo */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
        <div className="text-white font-bold text-lg md:text-xl tracking-wider">
          REAL<span className="text-blue-400">WAVES</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        {/* Left Side Glass Card */}
        <div className="w-full max-w-2xl ml-8 md:ml-16 lg:ml-20">
          <div className="backdrop-blur-md bg-black/30 rounded-2xl border border-white/20 shadow-2xl p-6 md:p-8 lg:p-10">
            {/* About Us Label */}
            <div className="inline-block mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                About Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Our Journey-From
              <br />
              Trial to Excellence
            </h1>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed mb-12">
              <p>
                With over 22 years of experience in the garment and textile
                industry, our director,{" "}
                <span className="font-semibold text-white">
                  Mr. Chandan Kumar Chaudhary
                </span>
                , is the driving force behind Realwaves Packs India Private
                Limited.
              </p>
              <p>
                His journey began in his family&apos;s business, where he
                immersed himself in the world of fabrics and design, gaining
                invaluable insights and honing his entrepreneurial spirit.
              </p>
            </div>

            {/* Statistics Section */}
            <div className="border-t border-white/20 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                <StatCard
                  value="7+ years"
                  description="of establishing brands larger than life"
                />
                <StatCard
                  value="100+ clients"
                  description="With happy reviews and repeated offers"
                />
                <StatCard
                  value="96% retain"
                  description="of establishing brands larger than life"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
