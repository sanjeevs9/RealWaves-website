import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center  bg-[#F9F9F9] py-16 px-4">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Image on the left */}
                <div className="w-full md:w-1/2 h-[350px] md:h-[500px] relative">
                    <Image
                        src="/dummy_factory.jpg"
                        alt="Who we are"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                {/* Text on the right */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#2476FE] mb-6">Who we are</h2>
                    <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-roboto">
                        <p><b>Realwaves</b> is a trusted name in the field of <b>eco-friendly, durable, and customizable non-woven bags</b>, proudly <b>manufacturing and exporting from Raipur, Chhattisgarh</b> for the past <b>7+ years</b>.</p>
                        <p>Founded with a vision to contribute to a <b>sustainable and plastic-free future</b>, Realwaves combines innovation, quality, and affordability to deliver non-woven solutions that meet global standards. We specialize in manufacturing <b>reusable, recyclable, and biodegradable non-woven bags</b> that cater to various industries like retail, fashion, food & grocery, corporate gifting, exhibitions, events, and more.</p>
                        <p>Our state-of-the-art facility in Raipur is equipped with advanced machinery, a skilled workforce, and a strict quality control system that ensures every bag leaving our unit stands out in durability, design, and finish.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}