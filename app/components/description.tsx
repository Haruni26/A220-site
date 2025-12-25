"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function description() {
  return (
    <>
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-wider text-sm">
              Here&apos;s a Deeper Dive
            </p>

            <h2 className="mt-3 text-5xl md:text-6xl font-bold leading-tight text-[#4b8ae1]">
              Engineered for
              <br />
              performance
              <br />
              and comfort.
            </h2>

            <div className="mt-6 h-2 w-12 bg-[#4b8ae1] rounded" />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Built for the <strong>100-160 seat</strong> aircraft category, the
              A220 Family offers a{" "}
              <strong>latest-generation design, advanced materials</strong>, and
              Airbus&apos; signature <strong>passenger-first approach</strong>.
            </p>

            <p>
              With panoramic windows, the widest single-aisle cabin and seats in
              its class, it combines big jet comfort with small jet efficiency.
              Offering <strong>25% reduction in CO₂ emissions per seat</strong>{" "}
              and a <strong>50% smaller noise footprint</strong> than previous
              generation aircraft, the A220 brings a{" "}
              <strong>quieter and roomier way to fly</strong>.
            </p>

            <p>
              Whether taking a short hop, long regional route, or international
              flight, the A220 delivers{" "}
              <strong>unmatched operational flexibility</strong>, making it a
              favourite among airlines and a standout choice for passengers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pictures */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/images/a220-blueprint.png"
            width={800}
            height={600}
            alt="A220 Blueprint Illustration"
            className="rounded-2xl shadow-lg object-contain"
          />

          <Image
            src="/images/a220-engine.jpg"
            width={800}
            height={600}
            alt="A220 Engine"
            className="rounded-2xl shadow-lg object-contain"
          />
        </div>
      </div>

      {/* ---- SECOND SECTION ---- */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* RIGHT SIDE */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Built for the <strong>100-160 seat</strong> aircraft category, the
              A220 Family offers a{" "}
              <strong>latest-generation design, advanced materials</strong>, and
              Airbus&apos; signature <strong>passenger-first approach</strong>.
            </p>

            <p>
              With panoramic windows, the widest single-aisle cabin and seats in
              its class, it combines big jet comfort with small jet efficiency.
              Offering <strong>25% reduction in CO₂ emissions per seat</strong>{" "}
              and a <strong>50% smaller noise footprint</strong> than previous
              generation aircraft, the A220 brings a{" "}
              <strong>quieter and roomier way to fly</strong>.
            </p>

            <p>
              Whether taking a short hop, long regional route, or international
              flight, the A220 delivers{" "}
              <strong>unmatched operational flexibility</strong>, making it a
              favourite among airlines and a standout choice for passengers.
            </p>
          </div>

          {/* LEFT SIDE */}
          <div>
            <p className="uppercase tracking-wider text-sm">
              Here&apos;s a Deeper Dive
            </p>

            <h2 className="mt-3 text-5xl md:text-6xl font-bold leading-tight text-[#4b8ae1]">
              Engineered for
              <br />
              performance
              <br />
              and comfort.
            </h2>

            <div className="mt-6 h-2 w-12 bg-[#4b8ae1] rounded" />
          </div>
        </motion.div>
      </section>
    </>
  );
}
