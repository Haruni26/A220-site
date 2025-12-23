"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
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
          <h1 className="text-6xl font-bold tracking-wide text-left">
            The A220
          </h1>
          <p className="mt-4 text-xl opacity-90 text-left">
            The future of short- to medium-haul flight
          </p>
        </motion.div>
      </div>
    </section>
  );
}
