import { Crown, Sparkles } from 'lucide-react'

export default function TheCrownPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Spotlight effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 
            className="text-4xl md:text-6xl tracking-[0.15em] text-[#d4af37] gold-glow mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            THE CROWN
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          <p 
            className="text-lg md:text-xl text-white/70 leading-relaxed tracking-wide"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            A symbol of excellence, crafted with precision and adorned with legacy
          </p>
        </div>
      </section>

      {/* Crown Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border border-[#d4af37]/20 animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-[#d4af37]/30" />
            <div className="absolute inset-8 rounded-full border border-[#d4af37]/40" />
            
            {/* Center crown */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Crown className="w-48 h-48 md:w-64 md:h-64 text-[#d4af37] gold-glow-strong" strokeWidth={0.5} />
                <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-[#d4af37]/60" />
                <Sparkles className="absolute -bottom-4 -left-4 w-6 h-6 text-[#d4af37]/40" />
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-[#d4af37]/50" />
            <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-[#d4af37]/50" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-[#d4af37]/50" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-[#d4af37]/50" />
          </div>
        </div>
      </section>

      {/* Crown Details */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl tracking-[0.1em] text-[#d4af37] mb-6"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              CRAFTSMANSHIP
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'DESIGN',
                description: 'Meticulously designed to embody the rich heritage and royal traditions of South India, each element tells a story of excellence.'
              },
              {
                title: 'MATERIALS',
                description: 'Crafted from the finest materials, featuring intricate gold plating and premium gemstones that reflect light with ethereal beauty.'
              },
              {
                title: 'SYMBOLISM',
                description: 'Every curve and jewel represents a facet of South Indian culture - from the temple architecture to the lotus motifs.'
              },
              {
                title: 'LEGACY',
                description: 'More than an accessory, it is a symbol of honor bestowed upon those who exemplify grace, talent, and achievement.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 border border-[#d4af37]/20 bg-black/30 hover:border-[#d4af37]/40 transition-colors duration-300"
              >
                <h3 
                  className="text-xl tracking-[0.15em] text-[#d4af37] mb-4"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-white/50 leading-relaxed"
                  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.125rem' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p 
            className="text-2xl md:text-3xl text-white/70 italic leading-relaxed"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            &ldquo;The crown is not merely worn; it is earned through dedication, grace, and the pursuit of excellence.&rdquo;
          </p>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-8" />
        </div>
      </section>

      <div className="h-20" />
    </div>
  )
}
