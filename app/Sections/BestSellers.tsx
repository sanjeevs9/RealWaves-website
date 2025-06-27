// import bagImage from "@/public/bags/redBag.png";
// import ProductCard from "../components/ProductCard";
// import { StaticImageData } from "next/image";

// const productData = [
//   {
//     productCode: "A29",
//     gsmValue: "250",
//     productImage: bagImage.src,
//     productName: "Paper Bag Premium",
//     price1: "2.65",
//     minQuantity1: "5,000",
//     price2: "2.05",
//     minQuantity2: "10,000",
//     dimensions: [
//       { size: "250", unit: "H", color: "blue" },
//       { size: "250", unit: "W", color: "blue" },
//       { size: "250", unit: "L", color: "blue" },
//     ]
//   },
//   {
//     productCode: "B42",
//     gsmValue: "300",
//     productImage: bagImage.src,
//     productName: "Eco-Friendly Tote Bag",
//     price1: "3.25",
//     minQuantity1: "3,000",
//     price2: "2.75",
//     minQuantity2: "8,000",
//     dimensions: [
//       { size: "300", unit: "H", color: "green" },
//       { size: "280", unit: "W", color: "green" },
//       { size: "120", unit: "L", color: "green" },
//     ]
//   },
//   {
//     productCode: "C18",
//     gsmValue: "200",
//     productImage: bagImage.src,
//     productName: "Luxury Gift Bag",
//     price1: "4.10",
//     minQuantity1: "2,000",
//     price2: "3.55",
//     minQuantity2: "6,000",
//     dimensions: [
//       { size: "220", unit: "H", color: "red" },
//       { size: "180", unit: "W", color: "red" },
//       { size: "100", unit: "L", color: "red" },
//     ]
//   },
//   {
//     productCode: "D35",
//     gsmValue: "350",
//     productImage: bagImage.src,
//     productName: "Heavy Duty Shopping Bag",
//     price1: "3.85",
//     minQuantity1: "4,000",
//     price2: "3.20",
//     minQuantity2: "12,000",
//     dimensions: [
//       { size: "350", unit: "H", color: "black" },
//       { size: "320", unit: "W", color: "black" },
//       { size: "150", unit: "L", color: "black" },
//     ]
//   },
//   {
//     productCode: "E22",
//     gsmValue: "180",
//     productImage: bagImage.src,
//     productName: "Lightweight Promotional Bag",
//     price1: "1.95",
//     minQuantity1: "10,000",
//     price2: "1.45",
//     minQuantity2: "25,000",
//     dimensions: [
//       { size: "200", unit: "H", color: "yellow" },
//       { size: "180", unit: "W", color: "yellow" },
//       { size: "80", unit: "L", color: "yellow" },
//     ]
//   }
// ];

// export default function BestSellers() {
//   return (
//     <div className="flex flex-col items-center justify-center p-2 pl-28 pr-28 pt-10">
//         <div className="w-full">
//             <div className="text-left mb-8 pl-10">
//                 <p className="pb-1 text-[#656565] font-roboto text-base font-normal leading-[124%] tracking-[0.8px] uppercase">BESTSELLERS</p>
//                 <h2 className="text-[#000] font-roboto text-[40px] font-normal leading-[124%] tracking-[2px]">Top Picks You Can&apos;t Go Wrong With</h2>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//                 {productData.map((product, index) => (
//                 <ProductCard
//                     key={index}
//                     productCode={product.productCode}
//                     gsmValue={product.gsmValue}
//                     productImage={product.productImage as StaticImageData}
//                     productName={product.productName}
//                     price1={product.price1}
//                     minQuantity1={product.minQuantity1}
//                     price2={product.price2}
//                     minQuantity2={product.minQuantity2}
//                     dimensions={product.dimensions}
//                 />
//                 ))}
//             </div>
//         </div>
//     </div>
//   );
// }

