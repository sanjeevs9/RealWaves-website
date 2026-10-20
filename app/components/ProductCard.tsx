import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

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
  const size = [dimensions?.width, dimensions?.height, dimensions?.Gusset].filter(Boolean).join('″ × ');

  const content = (
    <>
      {/* Image on a soft cream tile, like the cards on the homepage */}
      <div className="flex h-44 items-center justify-center rounded-2xl bg-cream p-4 sm:h-56 sm:p-6">
        <Image
          src={productImage}
          alt={productName}
          width={220}
          height={220}
          className="max-h-full max-w-full object-contain drop-shadow-[0_10px_14px_rgba(11,45,114,0.14)] transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="px-2 pb-1.5 pt-3 sm:px-2.5">
        <h3 className="text-[15px] font-semibold leading-snug text-charcoal sm:text-base">{productName}</h3>
        {size && <p className="mt-1 text-[13px] text-sage sm:text-sm">{size}″ (W × H{dimensions?.Gusset ? ' × G' : ''})</p>}
      </div>
    </>
  );

  return (
    <div className="group relative rounded-[22px] bg-white p-2 ring-1 ring-inset ring-[#EADFC4] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(11,45,114,0.10)] sm:p-2.5">
      {/* A real <a href> so crawlers can follow it to the product page */}
      {slug ? (
        <Link href={`/products/${slug}`} className="block rounded-2xl">
          {content}
        </Link>
      ) : (
        content
      )}

      {/* Quote button: a sibling of the link, since a <button> can't nest inside <a> */}
      {onInquiry && (
        <button
          type="button"
          onClick={() => onInquiry(productName)}
          className="absolute right-3.5 top-3.5 inline-flex h-10 items-center rounded-full bg-white px-3.5 text-[13px] font-semibold text-forest shadow-sm ring-1 ring-inset ring-[#EADFC4] transition-all duration-300 hover:bg-forest hover:text-ivory sm:right-5 sm:top-5 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
          aria-label={`Get a quote for ${productName}`}
        >
          Quote
        </button>
      )}
    </div>
  );
};

export default ProductCard;
