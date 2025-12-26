"use client";
import Image from "next/image";

export default function PlaneGallery() {
  const images = [
    "/images/a220-100-blueprint.png",
    "/images/a220-100-blueprint.png",
    "/images/a220-100-blueprint.png",
    "/images/a220-100-blueprint.png",
    "/images/a220-100-blueprint.png",
    "/images/a220-100-blueprint.png",
  ];

  return (
    <section className="mt-20">
      <h2 className="text-5xl px-10 font-bold text-white mb-6">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden"
          >
            <Image src={src} alt="Airbus A220" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
