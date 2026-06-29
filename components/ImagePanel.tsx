import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ImagePanel({ src, alt, className = "", priority = false }: ImagePanelProps) {
  return (
    <div className={`group relative overflow-hidden bg-industrial-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/28 via-transparent to-white/8" />
    </div>
  );
}
