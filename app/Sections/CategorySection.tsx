import { categoryData } from "@/constants";
import CategoryCard from "../components/CategoryCard";
// Create your category data array with all the categories from page.tsx


export default function CategorySection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full p-5 pt-0  rounded-tr-[50px] rounded-tl-[50px] bg-white">
        <div className="flex flex-row justify-between items-center pl-7 pr-7 overflow-x-auto pt-5 gap-6 scrollbar-hide">
          {categoryData.map((category) => (
            <CategoryCard
              category={category.category}
              key={category.id}
              title={category.title}
              imageUrl={category.imageUrl}
              backgroundColor={category.backgroundColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

