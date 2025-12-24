"use client";

import HeroVideo from "./components/heroVideo";
import { InfiniteSlider } from "./components/motion-primitives/infinite-slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <InfiniteSlider className="p-5">
        <Image
          src="/images/ab-logo.png"
          alt="Air Baltic Logo"
          width={50}
          height={150}
          priority
        />
        <Image
          src="/images/ac-logo.png"
          alt="Air Canada Logo"
          width={100}
          height={150}
          priority
        />
        <Image
          src="/images/af-logo.png"
          alt="Air France Logo"
          width={100}
          height={150}
          priority
        />
        <Image
          src="/images/breeze-logo.png"
          alt="Breeze Air Logo"
          width={100}
          height={150}
          priority
        />
        <Image
          src="/images/delta-logo.png"
          alt="Delta Airways Logo"
          width={100}
          height={150}
          priority
        />
        <Image
          src="/images/jb-logo.png"
          alt="Jetblue Logo"
          width={100}
          height={150}
          priority
        />
      </InfiniteSlider>
      <div>
        <h1 className="p-6 text-2xl">Here&apos;s a deeper dive</h1>
      </div>
    </>
  );
}
