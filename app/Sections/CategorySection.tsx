import categoryBag from "@/public/heroSection/categoryBag.png"; // Adjust the import path as needed
import CategoryCard from "../components/CategoryCard";
// Create your category data array with all the categories from page.tsx
const categoryData = [
  {
    id: 1,
    title: "D-Cut",
    imageUrl: categoryBag.src,
    backgroundColor: "#B9C7FF",
  },
  {
    id: 2,
    title: "Loop Handle",
    imageUrl: categoryBag.src,
    backgroundColor: "#7F9EFE",
  },
  {
    id: 3,
    title: "U-Cut",
    imageUrl: categoryBag.src,
    backgroundColor: "#2476FE",
  },
  {
    id: 4,
    title: "Box",
    imageUrl: categoryBag.src,
    backgroundColor: "#0454BF",
  },
  {
    id: 5,
    title: "Printed",
    imageUrl: categoryBag.src,
    backgroundColor: "#02357E",
  },
  {
    id: 6,
    title: "Designed",
    imageUrl: categoryBag.src,
    backgroundColor: "#001842",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-full p-5 pt-0  rounded-tr-[50px] rounded-tl-[50px] bg-white">
        <div className="flex flex-row justify-between items-center pl-7 pr-7 overflow-x-auto pt-5 gap-6 scrollbar-hide">
          {categoryData.map((category) => (
            <CategoryCard
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

