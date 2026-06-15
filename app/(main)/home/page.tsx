"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* DESKTOP BACKGROUND */}
      <Image
        src="/images/home-bg.png"
        alt="Background"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* MOBILE BACKGROUND */}
      <Image
        src="/images/mobile-bg2.png"
        alt="Mobile Background"
        fill
        priority
        className="block md:hidden object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0" />



      {/* ================= MAIN CONTENT ================= */}
<div className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center px-6 pt-20 md:pt-28 pb-10">        <div className="flex items-center gap-6 mt-10 md:mt-0">

          <div className="hidden md:block w-24 h-[1px] bg-[#d4af37]" />

          <Image
            src="/images/crown1.png"
            alt="Crown"
            width={150}
            height={150}
            className="w-[80px] md:w-[150px] h-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
          />

          <div className="hidden md:block w-24 h-[1px] bg-[#d4af37]" />

        </div>

        {/* TOP TEXT */}
        <p
          className="mt-3 text-[#d4af37] tracking-[0.28em] text-sm md:text-[24px]"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 12px rgba(212,175,55,0.45)",
          }}
        >
          THE LEGACY BEGINS
        </p>

        {/* MAIN TITLE */}
        <h1
          className="mt-3 text-[#d4af37] text-[42px] md:text-[82px] leading-[0.9]"
          style={{
            fontFamily: "serif",
            fontWeight: "700",
            textShadow: `
              0 0 5px rgba(255,215,0,0.9),
              0 0 14px rgba(212,175,55,0.7),
              0 0 28px rgba(212,175,55,0.45)
            `,
          }}
        >
          PRINCE & <br className="md:hidden" />
          PRINCESS
        </h1>

        {/* SOUTH INDIA */}
        <div className="flex items-center gap-4 mt-5">

          <div className="w-12 md:w-28 h-[1px] bg-[#d4af37]" />

          <p
            className="text-[#d4af37] tracking-[0.25em] text-[12px] md:text-[34px]"
            style={{
              fontFamily: "serif",
              textShadow: "0 0 12px rgba(212,175,55,0.35)",
            }}
          >
            OF SOUTH INDIA
          </p>

          <div className="w-12 md:w-28 h-[1px] bg-[#d4af37]" />

        </div>

        {/* YEAR */}
        <h2
          className="mt-4 text-[#d4af37] text-[65px] md:text-[125px] leading-none"
          style={{
            fontFamily: "serif",
            textShadow: `
              0 0 8px rgba(255,215,0,0.7),
              0 0 20px rgba(212,175,55,0.5)
            `,
          }}
        >
          2026
        </h2>

        {/* INAUGURAL EDITION */}
        <div className="relative mt-5">

          <div
            className="border border-[#d4af37] px-10 md:px-20 py-4 text-[#d4af37] tracking-[0.18em] text-[11px] md:text-[22px]"
            style={{
              fontFamily: "serif",
              textShadow: "0 0 10px rgba(212,175,55,0.35)",
            }}
          >
            INAUGURAL EDITION
          </div>

        </div>

        {/* CENTER PRODUCTION */}
        <p
          className="mt-7 text-[#d4af37] text-[16px] md:text-[34px] tracking-[0.10em]"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 14px rgba(212,175,55,0.35)",
          }}
        >
          CRAFT & FRAME PRODUCTION
        </p>

        {/* BOTTOM TEXT */}
        <p
          className="mt-8 text-white text-[11px] md:text-[28px] tracking-[0.22em]"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 8px rgba(255,255,255,0.3)",
          }}
        >
          ONE CROWN. ENDLESS LEGACY.
        </p>

        {/* BOTTOM DESIGN */}
        <div className="flex items-center gap-3 mt-4">

          <div className="w-20 md:w-32 h-[1px] bg-[#d4af37]" />

          <div className="text-[#d4af37] text-xl">
            ✦
          </div>

          <div className="w-20 md:w-32 h-[1px] bg-[#d4af37]" />

        </div>

      </div>

      {/* LEFT SHIELD TEXT */}
      <div
        className="hidden md:flex absolute bottom-[148px] left-[92px] z-30 flex-col items-center justify-center w-[150px]"
      >

        <p
          className="text-[#d4af37] text-[16px] leading-[1.1] tracking-[0.08em] text-center"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 12px rgba(212,175,55,0.45)",
          }}
        >
          CRAFT & FRAME
        </p>

        <p
          className="text-[#d4af37] text-[16px] leading-[1.1] tracking-[0.08em] text-center"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 12px rgba(212,175,55,0.45)",
          }}
        >
          PRODUCTION
        </p>

      </div>

      {/* RIGHT SHIELD TEXT */}
      <div
        className="hidden md:flex absolute bottom-[148px] right-[92px] z-30 flex-col items-center justify-center w-[150px]"
      >

        <p
          className="text-[#d4af37] text-[16px] leading-[1.1] tracking-[0.08em] text-center"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 12px rgba(212,175,55,0.45)",
          }}
        >
          CRAFT & FRAME
        </p>

        <p
          className="text-[#d4af37] text-[16px] leading-[1.1] tracking-[0.08em] text-center"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 12px rgba(212,175,55,0.45)",
          }}
        >
          PRODUCTION
        </p>

      </div>

    </main>
  );
}