import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({
  productImage,
  productName,
  dimensions,
  slug,
  onInquiry,
}: {
  productImage: StaticImageData;
  productName: string;
  dimensions: { width?: number; height?: number; Gusset?: number };
  slug?: string;
  onInquiry?: (productName: string) => void;
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (slug) {
      router.push(`/products/${slug}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-xl ring-1 ring-black/[0.04] overflow-hidden cursor-pointer group hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative bg-linen flex justify-center items-center h-36 sm:h-48 p-4">
        <Image
          src={productImage}
          alt={productName}
          width={200}
          height={200}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />

        {/* Inquiry overlay */}
        {onInquiry && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onInquiry(productName);
            }}
            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full ring-1 ring-black/[0.06] shadow-sm opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:bg-forest hover:text-white text-charcoal"
            aria-label={`Inquire about ${productName}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm font-medium text-charcoal mb-2 group-hover:text-[#0992C2] transition-colors duration-300 leading-snug">
          {productName}
        </h3>

        {/* Dimensions */}
        <div className="flex items-center gap-2 flex-wrap">
          {dimensions?.height && (
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-sage">
              <span className="w-4 h-4 rounded bg-charcoal/10 text-charcoal text-[9px] font-semibold flex items-center justify-center">H</span>
              {dimensions.height}<span className="text-sage/60">in</span>
            </span>
          )}
          {dimensions?.width && (
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-sage">
              <span className="w-4 h-4 rounded bg-charcoal/10 text-charcoal text-[9px] font-semibold flex items-center justify-center">W</span>
              {dimensions.width}<span className="text-sage/60">in</span>
            </span>
          )}
          {dimensions?.Gusset && (
            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-sage">
              <span className="w-4 h-4 rounded bg-charcoal/10 text-charcoal text-[9px] font-semibold flex items-center justify-center">G</span>
              {dimensions.Gusset}<span className="text-sage/60">in</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
