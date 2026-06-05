import { Crown, Sparkles, Palette, Mic, Heart, Award } from 'lucide-react'

const mainTitles = [
  {
    icon: Crown,
    title: 'PRINCE OF SOUTH INDIA',
    subtitle: 'The Supreme Title',
    description: 'The ultimate honor bestowed upon the young man who embodies excellence, charisma, sophistication, and leadership. The pinnacle of masculine grace.',
  },
  {
    icon: Sparkles,
    title: 'PRINCESS OF SOUTH INDIA',
    subtitle: 'The Supreme Title',
    description: 'The highest accolade celebrating grace, elegance, poise, and the spirit of achievement in young women. The epitome of feminine excellence.',
  },
]

const subTitles = [
  {
    icon: Palette,
    title: 'BEST TRADITIONAL WEAR',
    description: 'Celebrating the rich heritage and exquisite styling of South Indian traditional attire.',
  },
  {
    icon: Mic,
    title: 'BEST TALENT',
    description: 'Showcasing extraordinary abilities in performing arts, music, dance, and creative expression.',
  },
  {
    icon: Heart,
    title: "PEOPLE'S CHOICE",
    description: 'The prestigious title determined by public voting and audience appreciation.',
  },
  {
    icon: Award,
    title: 'BEST SWIMWEAR',
    description: 'Recognizing confidence, fitness, and elegance in swimwear presentation.',
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-transparent" />
        
        {/* Decorative top line */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/50" />
          <Crown className="w-6 h-6 text-[#d4af37]/50" strokeWidth={1} />
          <div className="w-32 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/50" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p 
            className="text-sm tracking-[0.4em] text-[#d4af37]/70 mb-4 uppercase"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Official Titles
          </p>
          <h1 
            className="text-5xl md:text-7xl tracking-[0.2em] text-[#d4af37] gold-glow-strong mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            CATEGORIES
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-2 h-2 rotate-45 border border-[#d4af37]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p 
            className="text-xl md:text-2xl text-white/60 leading-relaxed tracking-wide max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontStyle: 'italic' }}
          >
            The prestigious honors of Prince & Princess of South India 2026
          </p>
        </div>
      </section>

      {/* Main Title Winners Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-[#d4af37]" />
              <h2 
                className="text-2xl md:text-3xl tracking-[0.25em] text-[#d4af37]"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                MAIN TITLE WINNERS
              </h2>
              <div className="w-24 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/50 to-[#d4af37]" />
            </div>
            <p 
              className="text-white/50 tracking-[0.2em] text-sm uppercase"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              The Supreme Honors
            </p>
          </div>

          {/* Main Title Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {mainTitles.map((title, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Card */}
                <div className="relative p-10 md:p-12 border border-[#d4af37]/30 bg-gradient-to-b from-[#0a0a0a] to-black backdrop-blur-sm group-hover:border-[#d4af37]/60 transition-all duration-500 overflow-hidden">
                  
                  {/* Crown watermark background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                    <Crown className="w-64 h-64 text-[#d4af37]" strokeWidth={0.5} />
                  </div>

                  {/* Decorative corner accents - Larger */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#d4af37]/50 group-hover:border-[#d4af37] group-hover:w-12 group-hover:h-12 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#d4af37]/50 group-hover:border-[#d4af37] group-hover:w-12 group-hover:h-12 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#d4af37]/50 group-hover:border-[#d4af37] group-hover:w-12 group-hover:h-12 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#d4af37]/50 group-hover:border-[#d4af37] group-hover:w-12 group-hover:h-12 transition-all duration-500" />

                  {/* Inner glow line at top */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon with glow */}
                    <div className="relative inline-block mb-6">
                      <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl group-hover:bg-[#d4af37]/30 transition-colors duration-500" />
                      <title.icon className="relative w-16 h-16 text-[#d4af37] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                    </div>

                    {/* Subtitle */}
                    <p 
                      className="text-xs tracking-[0.4em] text-[#d4af37]/60 mb-4 uppercase"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {title.subtitle}
                    </p>

                    {/* Title */}
                    <h3 
                      className="text-2xl md:text-3xl tracking-[0.15em] text-[#d4af37] gold-glow mb-6"
                      style={{ fontFamily: 'var(--font-cinzel), serif' }}
                    >
                      {title.title}
                    </h3>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/50" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]/50" />
                      <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/50" />
                    </div>

                    {/* Description */}
                    <p 
                      className="text-white/50 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {title.description}
                    </p>
                  </div>

                  {/* Bottom reflection */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-6">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/20 to-[#d4af37]/40" />
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rotate-45 bg-[#d4af37]/40" />
            <Crown className="w-8 h-8 text-[#d4af37]/40" strokeWidth={1} />
            <div className="w-1 h-1 rotate-45 bg-[#d4af37]/40" />
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/20 to-[#d4af37]/40" />
        </div>
      </div>

      {/* Sub Title Winners Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-[#d4af37]/50" />
              <h2 
                className="text-xl md:text-2xl tracking-[0.25em] text-[#d4af37]/80"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                SUB TITLE WINNERS
              </h2>
              <div className="w-20 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/30 to-[#d4af37]/50" />
            </div>
            <p 
              className="text-white/40 tracking-[0.15em] text-sm uppercase"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Special Category Honors
            </p>
          </div>

          {/* Sub Title Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subTitles.map((title, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Subtle outer glow */}
                <div className="absolute -inset-0.5 bg-[#d4af37]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative p-6 md:p-8 border border-[#d4af37]/20 bg-gradient-to-b from-[#080808] to-black group-hover:border-[#d4af37]/40 transition-all duration-500 h-full">
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-l border-t border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-colors duration-300" />
                  <div className="absolute top-0 right-0 w-5 h-5 border-r border-t border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-l border-b border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-r border-b border-[#d4af37]/30 group-hover:border-[#d4af37]/60 transition-colors duration-300" />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <title.icon className="w-10 h-10 text-[#d4af37]/80 mx-auto mb-4 group-hover:text-[#d4af37] group-hover:scale-110 transition-all duration-300" strokeWidth={1} />
                    
                    <h3 
                      className="text-sm tracking-[0.15em] text-[#d4af37]/90 mb-4 group-hover:text-[#d4af37] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-cinzel), serif' }}
                    >
                      {title.title}
                    </h3>

                    <div className="w-8 h-[1px] bg-[#d4af37]/30 mx-auto mb-4" />
                    
                    <p 
                      className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {title.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Flourish */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/30" />
            <Sparkles className="w-5 h-5 text-[#d4af37]/40" strokeWidth={1} />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/30" />
          </div>
          <p 
            className="text-white/30 text-sm tracking-[0.2em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            One Crown. Endless Legacy.
          </p>
        </div>
      </section>

      <div className="h-10" />
    </div>
  )
}
