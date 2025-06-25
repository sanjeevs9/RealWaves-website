import Image from 'next/image';
import heroImage from "@/public/heroSection/New Project (2).png";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8">
      <div className="text-center max-w-md mx-auto">
        <Image 
          src={heroImage.src} 
          alt="Under Construction" 
          width={600} 
          height={500} 
          className="rounded-2xl mb-8 w-full max-w-sm mx-auto"
          style={{ borderRadius: 16 }}
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Website Under Construction</h1>
        <p className="text-lg md:text-xl mb-6 text-black">We&apos;re working hard to bring you a better experience. Please check back soon!</p>
        <div className="text-base md:text-lg bg-white p-6 rounded-xl shadow-lg">
          <div className="mb-2">
            <strong>Email:</strong> <a href="mailto:info@realwavespacks.com" className="text-blue-600 hover:underline">info@realwavespacks.com</a>
          </div>
          <div>
            <strong>Phone:</strong> <a href="tel:+919009990000" className="text-blue-600 hover:underline">+91 90099 90000</a>
          </div>
        </div>
      </div>
    </div>
  );
} 