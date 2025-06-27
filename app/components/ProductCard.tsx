import React from "react";
import Image, { StaticImageData } from "next/image";

const ProductCard = ({
  gsmValue,
  productImage,
  productName,
  dimensions:{
    width,
    height,
    Gusset
  }
}: {
  gsmValue: string;
  productImage: StaticImageData;
  productName: string;
  dimensions: { width: number; height: number; Gusset: number };
}) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-3 w-64 mx-auto border border-gray-200 relative cursor-pointer group hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="flex flex-col rounded-lg p-2 bg-gray-200 relative">
        {/* GSM Badge - Hidden by default, shown on hover */}
        <div className="absolute top-0 right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium ">
            {gsmValue} GSM
          </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center items-center h-48 relative">
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
      <h3 className="text-sm xl:text-base font-medium text-gray-800 mb-2 pt-2 group-hover:text-blue-600 transition-colors duration-300">
        {productName}
      </h3>

      {/* Dimensions */}
      <div className="flex gap-1">
        <div className="flex items-center gap-0.5">
            <span className="text-xs font-medium text-gray-700">
              {height}
            </span>
            <span className="text-[10px] text-gray-500">mm</span>
            <span
              className={`
              w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300
              ${
              "bg-blue-500"
              }
            `}
            >
              H
          </span>
            <span className="text-xs font-medium text-gray-700">
              {width}
            </span>
            <span className="text-[10px] text-gray-500">mm</span>
            <span
              className={`
              w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300
              ${
                "bg-green-500"
                
              }
            `}
            >
              W
          </span>
            <span className="text-xs font-medium text-gray-700">
              {Gusset}
            </span>
            <span className="text-[10px] text-gray-500">mm</span>
            <span
              className={`
              w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300
              ${
                  "bg-gray-500"
                
              }
            `}
            >
              G
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
