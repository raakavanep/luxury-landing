"use client";

import Image from "next/image";

import Link from "next/link";

export default function MobileHome() {
  return (
    <main className="relative md:hidden h-screen overflow-hidden bg-black">

      {/* Background */}
      <Image
        src="/images/mobile-bg2.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Crown */}
        <Image
          src="/images/crown1.png"
          alt="Crown"
          width={80}
          height={80}
          className="mb-4"
        />

        {/* Legacy */}
        <p
          className="text-[#d4af37] text-xs tracking-[0.3em]"
          style={{ fontFamily: "serif" }}
        >
          THE LEGACY BEGINS
        </p>

        {/* Title */}
        <h1
          className="mt-4 text-[48px] leading-[0.9] text-[#d4af37]"
          style={{
            fontFamily: "serif",
            fontWeight: "700",
          }}
        >
          PRINCE
          <br />
          &
          <br />
          PRINCESS
        </h1>

        {/* South India */}
        <p
          className="mt-5 text-[#d4af37] text-sm tracking-[0.2em]"
          style={{ fontFamily: "serif" }}
        >
          OF SOUTH INDIA®
        </p>

        {/* Year */}
        <h2
          className="mt-4 text-[72px] text-[#d4af37]"
          style={{ fontFamily: "serif" }}
        >
          2026
        </h2>

        {/* Register Button */}
<div className="mt-5">
  <Link
    href="/application"
    className="inline-block border border-[#d4af37] px-8 py-2 text-[#d4af37] text-xs tracking-[0.2em] transition-all duration-300 hover:bg-[#d4af37] hover:text-black"
  >
    REGISTER NOW
  </Link>
</div>

        {/* Production */}
        <p
  className="mt-6 text-[#d4af37] text-sm tracking-wide"
  style={{ fontFamily: "serif" }}
>
  CRAFT & FRAME PRODUCTION
</p>

        {/* Bottom */}
        <p
          className="mt-8 text-white text-xs tracking-[0.2em]"
          style={{ fontFamily: "serif" }}
        >
          ONE CROWN. ENDLESS LEGACY.
        </p>

        <div className="flex items-center gap-3 mt-4">
          <div className="w-16 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37]">✦</span>
          <div className="w-16 h-px bg-[#d4af37]" />
        </div>

      </div>
    </main>
  );
}