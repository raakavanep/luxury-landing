import { Crown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Golden ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl" />
      
      {/* Left Trophy */}
      <div className="absolute left-0 lg:left-[5%] xl:left-[10%] bottom-0 h-[60%] lg:h-[80%] w-[200px] lg:w-[300px] flex items-end justify-center">
        <div className="relative w-full h-full">
          {/* Trophy silhouette */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 lg:w-48">
            <svg viewBox="0 0 200 400" className="w-full h-auto">
              <defs>
                <linearGradient id="trophyGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5d67a" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#b8960c" />
                </linearGradient>
              </defs>
              {/* Crown top */}
              <path d="M60 50 L100 20 L140 50 L130 80 L70 80 Z" fill="url(#trophyGradientLeft)" opacity="0.9"/>
              {/* Head */}
              <ellipse cx="100" cy="110" rx="40" ry="35" fill="url(#trophyGradientLeft)" opacity="0.85"/>
              {/* Body */}
              <path d="M60 140 Q50 200 55 260 Q60 320 100 380 Q140 320 145 260 Q150 200 140 140 Z" fill="url(#trophyGradientLeft)" opacity="0.8"/>
              {/* Base */}
              <rect x="70" y="370" width="60" height="20" rx="5" fill="url(#trophyGradientLeft)" opacity="0.9"/>
            </svg>
          </div>
          {/* Reflection */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 lg:w-48 h-1/3 bg-gradient-to-t from-[#d4af37]/10 to-transparent blur-sm" />
        </div>
      </div>

      {/* Right Trophy */}
      <div className="absolute right-0 lg:right-[5%] xl:right-[10%] bottom-0 h-[60%] lg:h-[80%] w-[200px] lg:w-[300px] flex items-end justify-center">
        <div className="relative w-full h-full">
          {/* Trophy silhouette */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 lg:w-48">
            <svg viewBox="0 0 200 400" className="w-full h-auto">
              <defs>
                <linearGradient id="trophyGradientRight" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f5d67a" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#b8960c" />
                </linearGradient>
              </defs>
              {/* Crown top */}
              <path d="M60 50 L100 20 L140 50 L130 80 L70 80 Z" fill="url(#trophyGradientRight)" opacity="0.9"/>
              {/* Head */}
              <ellipse cx="100" cy="110" rx="40" ry="35" fill="url(#trophyGradientRight)" opacity="0.85"/>
              {/* Body */}
              <path d="M60 140 Q50 200 55 260 Q60 320 100 380 Q140 320 145 260 Q150 200 140 140 Z" fill="url(#trophyGradientRight)" opacity="0.8"/>
              {/* Base */}
              <rect x="70" y="370" width="60" height="20" rx="5" fill="url(#trophyGradientRight)" opacity="0.9"/>
            </svg>
          </div>
          {/* Reflection */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 lg:w-48 h-1/3 bg-gradient-to-t from-[#d4af37]/10 to-transparent blur-sm" />
        </div>
      </div>

      {/* Floor reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#d4af37]/5 via-[#d4af37]/2 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      {/* Center Content */}
      <div className="relative z-10 text-center px-4">
        {/* Crown Icon */}
        <div className="flex justify-center mb-6">
          <Crown className="w-12 h-12 lg:w-16 lg:h-16 text-[#d4af37] gold-glow" strokeWidth={1} />
        </div>

        {/* Main Title */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-[0.15em] text-[#d4af37] gold-glow-strong mb-2"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          PRINCE & PRINCESS
        </h1>

        {/* Subtitle */}
        <h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] text-white/90 mb-4"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          OF SOUTH INDIA
        </h2>

        {/* Year */}
        <p 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-[#d4af37]/80 mb-8"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          2026
        </p>

        {/* Inaugural Edition Badge */}
        <div className="inline-block px-6 py-2 border border-[#d4af37] mb-6 box-gold-glow">
          <span 
            className="text-sm tracking-[0.25em] text-[#d4af37]"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            INAUGURAL EDITION
          </span>
        </div>

        {/* Production Text */}
        <p 
          className="text-xs tracking-[0.3em] text-white/50 mb-8"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          CRAFT & FRAME PRODUCTION
        </p>

        {/* Tagline */}
        <p 
          className="text-lg sm:text-xl md:text-2xl tracking-[0.2em] text-white/70"
          style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 300 }}
        >
          ONE CROWN. ENDLESS LEGACY.
        </p>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-4 w-16 h-16 border-l border-t border-[#d4af37]/20" />
      <div className="absolute top-20 right-4 w-16 h-16 border-r border-t border-[#d4af37]/20" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l border-b border-[#d4af37]/20" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r border-b border-[#d4af37]/20" />
    </section>
  )
}
