"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";

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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const imageCount = images.length;

  if (imageCount === 0) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % imageCount);
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
      className={`group relative overflow-hidden bg-white ${imageCount > 1 ? "cursor-grab select-none active:cursor-grabbing" : ""} ${className}`}
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
          <div key={image} className="relative h-full min-w-full">
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
            className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center bg-white/90 text-navy-900 shadow-soft transition hover:bg-accent-blue hover:text-white"
          >
            <ChevronLeft aria-hidden="true" size={24} />
          </button>
          <button
            type="button"
            aria-label="Show next product image"
            onClick={showNext}
            onPointerDown={(event) => event.stopPropagation()}
            className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center bg-white/90 text-navy-900 shadow-soft transition hover:bg-accent-blue hover:text-white"
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
                onPointerDown={(event) => event.stopPropagation()}
                className={`size-2.5 cursor-pointer border border-white transition ${
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
