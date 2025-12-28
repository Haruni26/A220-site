"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function description() {
  return (
    <>
      <section className="py-24" id="about">
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
              Here&apos;s the deal
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
              Built for the{" "}
              <strong className="text-[#4b8ae1]">100-160 seat</strong> aircraft
              category, the A220 Family offers a{" "}
              <strong className="text-[#4b8ae1]">
                latest-generation design, advanced materials
              </strong>
              , and Airbus&apos; signature{" "}
              <strong className="text-[#4b8ae1]">
                passenger-first approach
              </strong>
              .
            </p>

            <p>
              Panoramic windows, the widest single-aisle cabin and seats in its
              class. The A220 combines big jet comfort with small jet
              efficiency. Offering{" "}
              <strong className="text-[#4b8ae1]">
                25% reduction in CO₂ emissions per seat
              </strong>{" "}
              and a{" "}
              <strong className="text-[#4b8ae1]">
                50% smaller noise footprint
              </strong>{" "}
              than previous generation aircraft, the A220 brings a{" "}
              <strong className="text-[#4b8ae1]">
                quieter and roomier way to fly
              </strong>
              .
            </p>

            <p>
              Short trips, long regional route, or international flight, the
              A220 delivers{" "}
              <strong className="text-[#4b8ae1]">
                unmatched operational flexibility
              </strong>
              , making it a favourite among airlines and a standout choice for
              passengers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ---- SECOND SECTION ---- */}
      <section className="py-24" id="history">
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
              Now for some background
            </p>

            <h2 className="mt-3 text-5xl md:text-6xl font-bold leading-tight text-white">
              From the
              <br />
              <span className="bg-linear-to-br from-white to-red-500 bg-clip-text text-transparent">
                Great White
              </span>
              <br />
              <span className="text-red-500">North</span>
            </h2>

            <div className="mt-6 h-2 w-12 bg-[#4b8ae1] rounded" />
          </div>
          {/* RIGHT SIDE */}
          <div className="space-y-6 text-lg leading-relaxed">
            <div className="max-w-6xl mx-auto px-6 py-16">
              <Image
                src="/images/c-series.png"
                width={500}
                height={600}
                alt="C-100 Taking Off"
                className="rounded-2xl shadow-lg object-contain"
              />
            </div>
          </div>

          <div className="space-y-6 w-7xl text-md">
            <p>
              The Airbus A220 began life as the Bombardier CSeries, a bold
              Canadian effort to design a brand-new jet optimized for the
              100–150 seat market, a size category dominated for decades by
              older, less-efficient aircraft. Development formally launched in
              2008, with Bombardier aiming to combine modern aerodynamics,
              advanced lightweight materials, and new-generation Pratt & Whitney
              geared-turbofan (GTF) engines to deliver major fuel-burn and
              noise-reduction benefits.
            </p>

            <p>
              Despite strong interest from airlines, the program faced financial
              pressure and technical challenges through testing and
              certification. Still, the aircraft delivered on its promise: the
              CS100 <strong className="text-red-500">(now A220-100)</strong>{" "}
              entered commercial service with SWISS International Air Lines in
              2016, followed by the CS300 (now A220-300) in 2017 with airBaltic.
              Airlines praised the CSeries for its quiet cabin, excellent range,
              and impressive operating economics — especially on routes too thin
              for larger jets.
            </p>

            <p>
              Recognizing the aircraft&apos;s potential, Airbus acquired a
              majority stake in the program in 2018, moving final branding and
              marketing under the Airbus umbrella. The CSeries was officially
              renamed the A220 in July 2018. With Airbus&apos; global support
              network, the program gained momentum, new customers, and
              additional production capacity — including a second assembly line
              in Mobile, Alabama for U.S. operators.
            </p>

            <p>
              Today, the A220-100 and A220-300 are known for combining the
              comfort of a larger jet with the efficiency of a smaller one.
              Features such as large windows, wider economy-class seats in a 2-3
              layout, low cabin noise, and long-range capability have made the
              A220 a favorite for both airlines and passengers. The aircraft
              continues to grow its global footprint, flying everything from
              short-haul regional routes to transcontinental missions.
            </p>

            <p>
              What began as an ambitious Canadian innovation has become one of
              the most modern and versatile single-aisle aircraft in the world,
              and a key part of the Airbus family.
            </p>
          </div>
        </motion.div>

        {/* Pictures */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT — stacked images */}
            <div className="space-y-10">
              <Image
                src="/images/a220-100-blueprint.png"
                width={800}
                height={600}
                alt="A220-100 Blueprint"
                className="rounded-2xl shadow-lg object-contain w-full border border-white"
              />
              <Image
                src="/images/a220-300-blueprint.png"
                width={800}
                height={600}
                alt="A220-300 Blueprint"
                className="rounded-2xl shadow-lg object-contain w-full border border-white"
              />
            </div>

            {/* RIGHT — specs */}
            <div className="space-y-12 self-start">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  A220-100 Specifications
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Typical seating: 100–120 passengers</li>
                  <li>Range: ~3,450 nautical miles</li>
                  <li>Engines: Pratt & Whitney PW1500G</li>
                  <li>25% lower fuel burn per seat</li>
                  <li>50% smaller noise footprint</li>
                </ul>
              </div>

              <div className="h-px bg-white" />

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  A220-300 Specifications
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Typical seating: 130–160 passengers</li>
                  <li>Range: ~3,600 nautical miles</li>
                  <li>Engines: Pratt & Whitney PW1500G</li>
                  <li>Best-in-class fuel efficiency</li>
                  <li>Widest single-aisle cabin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
