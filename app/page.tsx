import Image from "next/image";
import ProductCard from "./components/ProductCard";
import bagImage from "@/public/bags/redBag.png";
import Navbar from "./components/Navbar";
import CategoryCard from "./components/CategoryCard";
import categoryBag from "@/public/heroSection/categoryBag.png"
import Hero from "./components/Hero";
import CustomerReviewSection from "./Sections/CustomerReviewSection";

export default function Home() {
  return (
    <>
      <div className=" bg-gray-100 min-h-screen w-full bg">
    <Navbar />
    <Hero />
    
      <ProductCard 
        productCode="A29"
        gsmValue="250"
        productImage={bagImage.src}
        productName="Product Name (Can go to next line)"
        price1="2.65"
        minQuantity1="5,000"
        price2="2.05"
        minQuantity2="10,000"
        dimensions={[
          { size: "250", unit: "H", color: "blue" },
          { size: "250", unit: "W", color: "blue" },
          { size: "250", unit: "L", color: "blue" }
        ]}
      />
      <div className="flex flex-row gap-10 justify-center items-center pt-5">
       <CategoryCard
        title="Category 1"
        imageUrl={categoryBag.src}
        backgroundColor="#B9C7FF"
      />
      <CategoryCard
        title="Category 1"
        imageUrl={categoryBag.src}
        backgroundColor="#7F9EFE"
      />
      <CategoryCard
        title="Category 1"
        imageUrl={categoryBag.src}
        backgroundColor="#2476FE"
      />
      <CategoryCard
        title="Category 1"
        imageUrl={categoryBag.src}
        backgroundColor="#0454BF"
      />
      <CategoryCard
        title="Category 1"
        imageUrl={categoryBag.src}
        backgroundColor="#02357E"
      />
      <CategoryCard
        title="Category 1"
        imageUrl={categoryBag.src}
        backgroundColor="#001842"
      />
      </div>
      
      <CustomerReviewSection />

    </div>
     
    </>
  );
}
