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

      {/* ================= NAVBAR ================= */}
      <header className="absolute top-0 left-0 z-50 w-full border-b border-[#d4af37]/20 bg-black/40 backdrop-blur-sm">

        <div className="flex items-center justify-between px-5 md:px-14 py-4">

          {/* LOGO */}
          <Link
            href="/"
            className="text-[#d4af37] text-xl md:text-2xl tracking-[0.25em]"
            style={{ fontFamily: "serif" }}
          >
            PPOSI
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-12">

            <Link
              href="/home"
              className="text-[#d4af37] tracking-[0.18em]"
              style={{ fontFamily: "serif" }}
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-[#d4af37] transition tracking-[0.15em]"
              style={{ fontFamily: "serif" }}
            >
              ABOUT
            </Link>

            <Link
              href="/crown"
              className="text-white hover:text-[#d4af37] transition tracking-[0.15em]"
              style={{ fontFamily: "serif" }}
            >
              THE CROWN
            </Link>

            <Link
              href="/categories"
              className="text-white hover:text-[#d4af37] transition tracking-[0.15em]"
              style={{ fontFamily: "serif" }}
            >
              CATEGORIES
            </Link>

            <Link
              href="/jury"
              className="text-white hover:text-[#d4af37] transition tracking-[0.15em]"
              style={{ fontFamily: "serif" }}
            >
              JURY
            </Link>

            <Link
              href="/schedule"
              className="text-white hover:text-[#d4af37] transition tracking-[0.15em]"
              style={{ fontFamily: "serif" }}
            >
              SCHEDULE
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-[#d4af37] transition tracking-[0.15em]"
              style={{ fontFamily: "serif" }}
            >
              CONTACT
            </Link>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-[#d4af37]" />
              <span className="w-6 h-[2px] bg-[#d4af37]" />
              <span className="w-6 h-[2px] bg-[#d4af37]" />
            </button>

            {/* REGISTER BUTTON */}
            <Link
              href="/register"
              className="hidden md:flex border border-[#d4af37] px-6 py-3 text-[#d4af37] tracking-[0.18em] hover:bg-[#d4af37] hover:text-black transition"
              style={{ fontFamily: "serif" }}
            >
              REGISTER NOW
            </Link>

          </div>

        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-black/95 border-t border-[#d4af37]/20 px-6 py-5 space-y-5 text-center">

            <Link href="/home" className="text-[#d4af37]">
              HOME
            </Link>

            <Link href="/about" className="text-white">
              ABOUT
            </Link>

            <Link href="/crown" className="text-white">
              THE CROWN
            </Link>

            <Link href="/categories" className="text-white">
              CATEGORIES
            </Link>

            <Link href="/jury" className="text-white">
              JURY
            </Link>

            <Link href="/schedule" className="text-white">
              SCHEDULE
            </Link>

            <Link href="/contact" className="text-white">
              CONTACT
            </Link>

            <Link
              href="/register"
              className="border border-[#d4af37] py-3 text-[#d4af37]"
            >
              REGISTER NOW
            </Link>

          </div>
        )}

      </header>

      {/* ================= MAIN CONTENT ================= */}
<div className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center px-6 pt-32 md:pt-28 pb-10">
        {/* CROWN */}
        <div className="flex items-center gap-6 mt-10 md:mt-0">

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
          className="mt-3 text-[#d4af37] text-[50px] md:text-[82px] leading-[0.9]"
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
            className="text-[#d4af37] tracking-[0.25em] text-sm md:text-[34px]"
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
          className="mt-4 text-[#d4af37] text-[80px] md:text-[125px] leading-none"
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
            className="border border-[#d4af37] px-10 md:px-20 py-4 text-[#d4af37] tracking-[0.18em] text-sm md:text-[22px]"
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
          className="mt-7 text-[#d4af37] text-lg md:text-[34px] tracking-[0.10em]"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 14px rgba(212,175,55,0.35)",
          }}
        >
          CRAFT & FRAME PRODUCTION
        </p>

        {/* BOTTOM TEXT */}
        <p
          className="mt-8 text-white text-sm md:text-[28px] tracking-[0.22em]"
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