'use client'
import Image from 'next/image';
import CategoryCard2 from './CategoryCard2';
import { categoryData } from '@/constants';
import bag2 from "@/public/heroSection/_DSC3176 2.png"
import { useRouter } from 'next/navigation'

export default function Hero2() {
    const router = useRouter()
    return (
        <>
        <div className="relative w-full">
            {/* SVG Background */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/heroSection/BG2.svg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            
            {/* Content */}
            <div className='relative h-full w-full flex flex-col justify-end gap-16 lg:gap-64 '>
                <div className='flex flex-col items-center justify-center  w-full z-20 pt-10 md:pt-16 p-2 lg:p-0 lg:pt-20'>
                        <div className='text-xl font-semibold lg:font-bold md:text-3xl lg:text-5xl mb-6 font-roboto text-center '>Premium Non-Woven Bags,Manufacturer & Exporter</div>
                        <div className='text-sm md:text-2xl font-semibold mb-8 tracking-wide text-black font-poppins text-center'>Sustainable. Customizable. Reusable.</div>
                        <button onClick={()=>{
                            router.push('/products')
                        }} className='bg-[#0A0A3A] px-2 lg:px-3 py-2 text-white rounded-full flex items-center justify-between gap-4'>
                            <span className="text-xs lg:text-base  lg:font-normal pl-3">View Products</span>
                            <div className="bg-[#0057B8] rounded-full p-1 lg:p-3 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </button>

                </div>
                <div className="z-10 w-full items-end flex justify-center  h-[5rem]   overflow-x-clip lg:overflow-x-visible">
                    <Image
                    src={bag2}
                    alt="bag"
                    width={1500}
                    height={1500}
                    quality={100}
                    className=" w-full sm:w-3/4  max-h-[600px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] object-contain scale-110 md:scale-100"
                    />
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center pl-5 pr-5 lg:pl-10 lg:pr-10 pt-10 xl:pt-16 overflow-x-auto overflow-y-hidden md:overflow-x-hidden scrollbar-hide lg:pb-5'>
            {categoryData.map((item)=>{
                return(
                    <CategoryCard2 
                        key={item.category}
                        category={item.category}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                )
            })}
        </div>
        </>
    )
}