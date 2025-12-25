"use client";

import HeroVideo from "./components/heroVideo";
import { InfiniteSlider } from "./components/motion-primitives/infinite-slider";
import Image from "next/image";
import Description from "./components/description";

export default function Home() {
  return (
    <>
      <HeroVideo />

      <section className="bg-black py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl text-white mb-6">Proud Operators</h2>

          <div className="rounded-2xl bg-white shadow-xl p-4">
            <InfiniteSlider gap={80} speed={55} className="py-4">
              {[
                { src: "/images/ab-logo.png", alt: "Air Baltic" },
                { src: "/images/ac-logo.png", alt: "Air Canada" },
                { src: "/images/af-logo.png", alt: "Air France" },
                { src: "/images/breeze-logo.png", alt: "Breeze Airways" },
                { src: "/images/delta-logo.png", alt: "Delta Air Lines" },
                { src: "/images/jb-logo.png", alt: "JetBlue" },
                { src: "/images/swiss-logo.png", alt: "Swiss Air" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="relative h-16 w-40 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>

        <Description />
      </section>
    </>
  );
}
