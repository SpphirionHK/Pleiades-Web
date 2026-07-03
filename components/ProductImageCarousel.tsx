"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProductImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ProductImageCarousel({
  images,
  alt,
  className = "",
  priority = false
}: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageCount = images.length;
  const activeImage = images[activeIndex] ?? images[0];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % imageCount);
  };

  return (
    <div className={`group relative overflow-hidden bg-white ${className}`}>
      <Image
        key={activeImage}
        src={activeImage}
        alt={`${alt} ${activeIndex + 1}`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain transition duration-500"
      />

      {imageCount > 1 ? (
        <>
          <button
            type="button"
            aria-label="Show previous product image"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-white/90 text-navy-900 shadow-soft transition hover:bg-accent-blue hover:text-white"
          >
            <ChevronLeft aria-hidden="true" size={24} />
          </button>
          <button
            type="button"
            aria-label="Show next product image"
            onClick={showNext}
            className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center bg-white/90 text-navy-900 shadow-soft transition hover:bg-accent-blue hover:text-white"
          >
            <ChevronRight aria-hidden="true" size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Show product image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`size-2.5 border border-white transition ${
                  index === activeIndex ? "bg-accent-blue" : "bg-white/75 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
