import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Desktop Background */}
      <Image
        src="/images/desktop-bg.png"
        alt="Desktop Background"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* Mobile Background */}
      <Image
        src="/images/mobile-bg.png"
        alt="Mobile Background"
        fill
        priority
        className="block md:hidden object-cover"
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 min-h-screen">

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:flex min-h-screen flex-col items-center justify-center px-6 text-center">

          {/* RIGHT SIDE LOGO */}
          <div className="absolute right-[9%] top-[11%] flex flex-col items-center z-20">

            <Image
              src="/images/right-logo.png"
              alt="Right Logo"
              width={150}
              height={200}
              className="object-contain"
            />

            <div
              className="-mt-3 text-center"
              style={{
                fontFamily: "serif",
                lineHeight: "1.15",
                letterSpacing: "0.05em",
                color: "#d4af37",
                fontWeight: "700",
              }}
            >
              <p className="text-[18px] whitespace-nowrap">
                PRINCE & PRINCESS
              </p>

              <p className="text-[18px] whitespace-nowrap">
                OF SOUTH INDIA
              </p>
            </div>

          </div>

          {/* LOGO ROW */}
          <div className="flex items-center justify-center gap-5">

            {/* PP */}
            <span
              className="text-white text-[120px] leading-none"
              style={{ fontFamily: "serif" }}
            >
              PP
            </span>

            {/* O */}
            <div className="relative flex items-center justify-center">

              {/* Crown */}
              <Image
                src="/images/crown.png"
                alt="Crown"
                width={70}
                height={70}
                className="absolute -top-16 z-20 object-contain scale-[2.2]"
              />

              {/* Circle */}
              <div className="relative flex h-[125px] w-[125px] items-center justify-center rounded-full border-[10px] border-white overflow-hidden">

                {/* FACE */}
                <div className="relative w-[92px] h-[108px] flex items-center justify-center">

                  <Image
                    src="/images/face.png"
                    alt="Queen"
                    fill
                    className="object-contain scale-[2.9]"
                  />

                </div>

              </div>

            </div>

            {/* SI */}
            <span
              className="text-white text-[120px] leading-none"
              style={{ fontFamily: "serif" }}
            >
              SI
            </span>

            {/* Divider */}
            <div className="mx-4 h-[125px] w-[3px] bg-[#d4af37]" />

            {/* CFP */}
            <span
              className="text-[#d4af37] text-[120px] leading-none"
              style={{ fontFamily: "serif" }}
            >
              CFP
            </span>

          </div>

          {/* COMING TEXT */}
          <h2
            className="mt-8 text-[#d4af37] text-[64px] tracking-[0.28em] leading-none"
            style={{ fontFamily: "serif" }}
          >
            COMING IN 2026
          </h2>

          {/* BUTTON */}
          <Link
            href="/home"
            className="mt-10 border border-[#d4af37] px-10 py-4 text-[#d4af37] text-base tracking-[0.35em] uppercase bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#d4af37] hover:text-black hover:scale-105"
            style={{ fontFamily: "serif" }}
          >
            Click Here
          </Link>

        </div>

        {/* ================= MOBILE VIEW ================= */}
<div className="md:hidden absolute top-[14%] left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-20 w-full">

  {/* LOGO ROW */}
  <div className="flex items-center justify-center scale-[0.9]">

    {/* PP */}
    <span
      className="text-white text-[44px] leading-none"
      style={{ fontFamily: "serif" }}
    >
      PP
    </span>

    {/* O */}
    <div className="relative flex items-center justify-center mx-[2px]">

      {/* Crown */}
      <Image
        src="/images/crown.png"
        alt="Crown"
        width={24}
        height={24}
        className="absolute -top-3 z-20 object-contain"
      />

      {/* Circle */}
      <div className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full border-[4px] border-white overflow-hidden">

        {/* FACE */}
        <div className="relative w-[28px] h-[34px] flex items-center justify-center">

          <Image
            src="/images/face.png"
            alt="Queen"
            fill
            className="object-contain scale-[1.9]"
          />

        </div>

      </div>

    </div>

    {/* SI */}
    <span
      className="text-white text-[44px] leading-none"
      style={{ fontFamily: "serif" }}
    >
      SI
    </span>

    {/* Divider */}
    <div className="mx-2 h-[38px] w-[2px] bg-[#d4af37]" />

    {/* CFP */}
    <span
      className="text-[#d4af37] text-[44px] leading-none"
      style={{ fontFamily: "serif" }}
    >
      CFP
    </span>

  </div>

  {/* COMING TEXT */}
  <h2
    className="mt-5 text-[#d4af37] text-[18px] tracking-[0.18em]"
    style={{ fontFamily: "serif" }}
  >
    COMING IN 2026
  </h2>

  {/* BUTTON */}
  <Link
    href="/home"
    className="mt-6 border border-[#d4af37] px-9 py-3 text-[#d4af37] text-[11px] tracking-[0.25em] uppercase bg-black/30"
    style={{ fontFamily: "serif" }}
  >
    Click Here
  </Link>

</div>

      </div>
    </main>
  );
}