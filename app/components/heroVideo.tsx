"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroVideo() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          // Title is visible → hide sticky header
          setShowSticky(false);
        } else {
          // Title is not visible → show sticky header
          setShowSticky(true);
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sticky header (appears after scrolling past title) */}
      <div
        className={`fixed top-0 left-0 z-50 w-full bg-(--primary) text-white px-6 py-3 font-bold text-2xl transition-all duration-300
          ${
            showSticky
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        The A220
      </div>

      <section className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/airbusVideo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              ref={titleRef}
              className="text-7xl font-bold tracking-wide text-left"
            >
              The A220
            </h1>

            <p className="mt-4 text-xl opacity-90 text-left">
              The future of short to medium-haul flight
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
