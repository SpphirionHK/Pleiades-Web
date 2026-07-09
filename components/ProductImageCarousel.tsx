"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";

type ProductImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  priority?: boolean;
  tone?: "light" | "dark";
};

export function ProductImageCarousel({
  images,
  alt,
  className = "",
  priority = false,
  tone = "light"
}: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const imageCount = images.length;

  if (imageCount === 0) {
    return null;
  }

  const isDark = tone === "dark";
  const frameClass = isDark ? "bg-[#2f2b2b]" : "bg-white";
  const arrowClass = isDark
    ? "bg-transparent text-accent-blue transition hover:text-white"
    : "bg-white/90 text-navy-900 shadow-soft transition hover:bg-accent-blue hover:text-white";
  const activeDotClass = isDark ? "bg-accent-blue" : "bg-navy-900";
  const inactiveDotClass = isDark ? "bg-white/35 hover:bg-white/70" : "bg-industrial-200 hover:bg-industrial-300";
  const canShowPrevious = activeIndex > 0;
  const canShowNext = activeIndex < imageCount - 1;

  const showPrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => Math.min(imageCount - 1, current + 1));
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (imageCount < 2) {
      return;
    }

    event.currentTarget.setPointerCapture(event.pointerId);
    isDraggingRef.current = true;
    startXRef.current = event.clientX;
    dragOffsetRef.current = 0;
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    const offset = event.clientX - startXRef.current;
    dragOffsetRef.current = offset;
    setDragOffset(offset);
  };

  const finishDrag = () => {
    if (!isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false;
    const threshold = 70;
    const finalOffset = dragOffsetRef.current;

    if (finalOffset <= -threshold) {
      showNext();
    } else if (finalOffset >= threshold) {
      showPrevious();
    }

    dragOffsetRef.current = 0;
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div
      className={`group relative overflow-hidden ${frameClass} ${imageCount > 1 ? "cursor-grab select-none active:cursor-grabbing" : ""} ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onLostPointerCapture={finishDrag}
      onDragStart={(event) => event.preventDefault()}
    >
      <div
        className={`flex h-full w-full ${isDragging ? "" : "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"}`}
        style={{
          transform: `translate3d(calc(-${activeIndex * 100}% + ${dragOffset}px), 0, 0)`
        }}
      >
        {images.map((image, index) => (
          <div key={`${image}-${index}`} className="relative h-full min-w-full">
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              fill
              priority={priority && index === 0}
              draggable={false}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {imageCount > 1 ? (
        <>
          <button
            type="button"
            aria-label="Show previous product image"
            onClick={showPrevious}
            onPointerDown={(event) => event.stopPropagation()}
            disabled={!canShowPrevious}
            className={`absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center ${arrowClass} ${
              canShowPrevious ? "cursor-pointer" : "cursor-default opacity-35"
            }`}
          >
            <ChevronLeft aria-hidden="true" size={24} />
          </button>
          <button
            type="button"
            aria-label="Show next product image"
            onClick={showNext}
            onPointerDown={(event) => event.stopPropagation()}
            disabled={!canShowNext}
            className={`absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center ${arrowClass} ${
              canShowNext ? "cursor-pointer" : "cursor-default opacity-35"
            }`}
          >
            <ChevronRight aria-hidden="true" size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                aria-label={`Show product image ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                onPointerDown={(event) => event.stopPropagation()}
                className={`size-3 cursor-pointer rounded-full border border-industrial-300 transition ${
                  index === activeIndex ? activeDotClass : inactiveDotClass
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
