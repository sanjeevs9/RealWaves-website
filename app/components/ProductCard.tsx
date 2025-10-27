import React from "react";
import Image, { StaticImageData } from "next/image";

const ProductCard = ({
  productImage,
  productName,
  dimensions
}: {
  productImage: StaticImageData;
  productName: string;
  dimensions: { width?: number; height?: number; Gusset?: number };
}) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-2 sm:p-3 w-full sm:w-64 md:w-52  mx-auto border border-gray-200 relative cursor-pointer group hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="flex flex-col rounded-lg p-2 bg-gray-200 relative">

        {/* Product Image */}
        <div className="flex justify-center items-center h-36 sm:h-48 md:h-36 relative">
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
      <h3 className="text-xs sm:text-sm xl:text-base font-medium text-gray-800 mb-1 sm:mb-2 pt-2 group-hover:text-blue-600 transition-colors duration-300">
        {productName}
      </h3>

      {/* Dimensions */}
      <div className="flex gap-1">
        <div className="flex items-center gap-0.5">
          {dimensions && dimensions.height && (
            <> 
          <span className="text-[10px] sm:text-xs font-medium text-gray-700">
            {dimensions.height}
          </span>
          <span className="text-[8px] sm:text-[10px] text-gray-500">in</span>
          <span
            className={`
              w-3 h-3 sm:w-4 sm:h-4 rounded-full text-white text-[8px] sm:text-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300
              ${"bg-blue-500"
              }
            `}
          >
            H
          </span>
          </>
          )}
          {dimensions && dimensions.width && (
            <>
          <span className="text-[10px] sm:text-xs font-medium text-gray-700">
            {dimensions.width}
          </span>
          <span className="text-[8px] sm:text-[10px] text-gray-500">in</span>
          <span
            className={`
              w-3 h-3 sm:w-4 sm:h-4 rounded-full text-white text-[8px] sm:text-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300
              ${"bg-green-500"

              }
            `}
          >
            W
          </span>
          </>
          )}
          {dimensions && dimensions.Gusset && (
            <>
              <span className="text-[10px] sm:text-xs font-medium text-gray-700">
                {dimensions.Gusset}
              </span>
              <span className="text-[8px] sm:text-[10px] text-gray-500">in</span>
              <span
                className={`
              w-3 h-3 sm:w-4 sm:h-4 rounded-full text-white text-[8px] sm:text-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300
              ${"bg-gray-500"

                  }
            `}
              >
                G
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
