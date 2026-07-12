"use client";

import Image from "next/image";
import Link from "next/link";
export default function DesktopHome() {
  return (
    <main className="relative hidden md:block min-h-screen w-full overflow-hidden bg-black">

      {/* Background */}
      <Image
        src="/images/background.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Left Trophy */}
      <div className="absolute left-[1%] bottom-0 z-10">
        <Image
          src="/images/left-trophy.png"
          alt="Left Trophy"
          width={400}
          height={900}
          className="w-[300px] xl:w-[400px] 2xl:w-[500px] h-auto"
        />
      </div>

      {/* Right Trophy */}
      <div className="absolute right-[1%] bottom-0 z-10">
        <Image
          src="/images/right-trophy.png"
          alt="Right Trophy"
          width={400}
          height={900}
          className="w-[300px] xl:w-[400px] 2xl:w-[500px] h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center text-center px-6 pt-28 pb-10">

        {/* Crown */}
        <div className="flex items-center gap-6">

          <div className="w-24 h-[1px] bg-[#d4af37]" />

          <Image
            src="/images/crown1.png"
            alt="Crown"
            width={150}
            height={150}
            className="w-[150px] h-auto drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
          />

          <div className="w-24 h-[1px] bg-[#d4af37]" />

        </div>

        {/* Top Text */}
        <p
          className="mt-3 text-[#d4af37] tracking-[0.28em] text-[24px]"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 12px rgba(212,175,55,0.45)",
          }}
        >
          THE LEGACY BEGINS
        </p>

        {/* Main Title */}
        <h1
          className="mt-3 text-[#d4af37] text-[82px] leading-[0.9]"
          style={{
            fontFamily: "serif",
            fontWeight: "700",
            textShadow: `
              0 0 5px rgba(255,215,0,0.9),
              0 0 14px rgba(212,175,55,0.7)
            `,
          }}
        >
          PRINCE & PRINCESS
        </h1>

        {/* South India */}
        <div className="flex items-center gap-4 mt-5">

          <div className="w-28 h-[1px] bg-[#d4af37]" />

          <p
            className="text-[#d4af37] tracking-[0.25em] text-[34px]"
            style={{
              fontFamily: "serif",
              textShadow: "0 0 12px rgba(212,175,55,0.35)",
            }}
          >
            OF SOUTH INDIA
            <span
              style={{
                letterSpacing: "normal",
                fontSize: "32px",
                verticalAlign: "super",
                marginLeft: "2px",
              }}
            >
              ®
            </span>
          </p>

          <div className="w-28 h-[1px] bg-[#d4af37]" />

        </div>

        {/* Year */}
        <h2
          className="mt-4 text-[#d4af37] text-[125px] leading-none"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 8px rgba(255,215,0,0.7)",
          }}
        >
          2026
        </h2>
{/* Register Now Button */}
<div className="mt-6">
  <Link href="/application">
    <button
      className="border border-[#d4af37] px-20 py-4 text-[#d4af37] text-[22px] tracking-[0.18em]
      hover:bg-[#d4af37] hover:text-black transition-all duration-300"
      style={{
        fontFamily: "serif",
        textShadow: "0 0 10px rgba(212,175,55,0.35)",
      }}
    >
      REGISTER NOW
    </button>
  </Link>
</div>

        {/* Production */}
        <p
          className="mt-7 text-[#d4af37] text-[34px] tracking-[0.10em]"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 14px rgba(212,175,55,0.35)",
          }}
        >
          CRAFT & FRAME PRODUCTION
        </p>

        {/* Bottom Text */}
        <p
          className="mt-8 text-white text-[28px] tracking-[0.22em]"
          style={{
            fontFamily: "serif",
            textShadow: "0 0 8px rgba(255,255,255,0.3)",
          }}
        >
          ONE CROWN. ENDLESS LEGACY.
        </p>

        {/* Bottom Decoration */}
        <div className="flex items-center gap-3 mt-4">

          <div className="w-32 h-[1px] bg-[#d4af37]" />

          <div className="text-[#d4af37] text-xl">
            ✦
          </div>

          <div className="w-32 h-[1px] bg-[#d4af37]" />

        </div>

      </div>

    </main>
  );
}