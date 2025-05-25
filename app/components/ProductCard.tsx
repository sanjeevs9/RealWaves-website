import React from 'react';
import Image from 'next/image';
const ProductCard = ({
  productCode,
  gsmValue,
  productImage,
  productName,
  price1,
  minQuantity1,
  price2,
  minQuantity2,
  dimensions
}: {
  productCode: string;
  gsmValue: string;
  productImage: string;
  productName: string;
  price1: string;
  minQuantity1: string;
  price2: string;
  minQuantity2: string;
  dimensions: { size: string; unit: string; color: string }[];
}) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-3 w-60 mx-auto border border-gray-200 relative cursor-pointer">
      <div className="flex flex-col bg-gray-200 rounded-lg p-2">
      {/* Header with product code and GSM */}

        <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-800 bg-white rounded-md p-1 pl-2 pr-2">{productCode}</span>
            <div className="flex items-center gap-1 bg-white rounded-md p-1 pl-1.5 pr-1.5">
            <span className="text-sm font-medium text-gray-800">{gsmValue}</span>
            <span className="bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                GSM
            </span>
            </div>
        </div>

        {/* Product Image */}
        <div className="flex justify-center h-48  ">
            <Image 
            src={productImage} 
            alt={productName}
            className="w-full h-full object-contain absolute bottom-16 left-0 right-0"
            />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-medium text-gray-800 mb-2 pt-">
        {productName}
      </h3>

      {/* Pricing */}
      <div className="space-y-1 mb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-semibold text-gray-800">Rs. {price1}</span>
            <span className="text-xs text-gray-500">/unit</span>
          </div>
          <span className="text-xs text-gray-500">min {minQuantity1}u</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-semibold text-gray-800">Rs. {price2}</span>
            <span className="text-xs text-gray-500">/unit</span>
          </div>
          <span className="text-xs text-gray-500">min {minQuantity2}u</span>
        </div>
      </div>

      {/* Dimensions */}
      <div className="flex gap-1">
        {dimensions.map((dim, index) => (
          <div key={index} className="flex items-center gap-0.5">
            <span className="text-xs font-medium text-gray-700">{dim.size}</span>
            <span className="text-[10px] text-gray-500">mm</span>
            <span className={`
              w-4 h-4 rounded-full text-white text-[10px] flex items-center justify-center
              ${dim.color === 'blue' ? 'bg-blue-500' : 
                dim.color === 'green' ? 'bg-green-500' : 
                'bg-gray-500'}
            `}>
              {dim.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;