import React from "react";
import Image, { StaticImageData } from "next/image";

const ProductCard2 = ({
  productImage,
  productName,
}: {
  productImage: StaticImageData;
  productName: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full sm:w-64 md:w-52 mx-auto border border-gray-100 relative cursor-pointer group hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="flex flex-col rounded-lg p-3 bg-gray-50 relative">
        {/* Product Image */}
        <div className="flex justify-center items-center h-40 sm:h-48 md:h-40 relative">
          <Image
            src={productImage}
            alt={productName}
            width={200}
            height={200}
            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mt-3 text-center group-hover:text-blue-600 transition-colors duration-300">
        {productName}
      </h3>
    </div>
  );
};

export default ProductCard2;
