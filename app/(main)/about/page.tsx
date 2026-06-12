import { Crown, Star, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Crown className="w-12 h-12 text-[#d4af37] mx-auto mb-6 gold-glow" strokeWidth={1} />
          <h1 
            className="text-4xl md:text-6xl tracking-[0.15em] text-[#d4af37] gold-glow mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            ABOUT
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          <p 
            className="text-lg md:text-xl text-white/70 leading-relaxed tracking-wide"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            The Prince & Princess of South India is a prestigious celebration of excellence, 
            talent, and grace that transcends boundaries and unites the finest from across 
            the southern region of India.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl md:text-4xl tracking-[0.1em] text-[#d4af37] mb-6"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                OUR VISION
              </h2>
              <div className="w-16 h-[1px] bg-[#d4af37] mb-8" />
              <p
  className="text-white/60 leading-relaxed mb-6"
  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.125rem' }}
>
  To establish Prince & Princess of South India as the most respected
  and influential beauty platform in the region — recognized for
  celebrating cultural identity, personal excellence, and purposeful
  beauty.
</p>

<p
  className="text-white/60 leading-relaxed"
  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.125rem' }}
>
  We envision a growing community of role models who carry the
  <span className="text-[#d4af37] font-semibold">
    {" "}Power, Pride, and Elegance of South India
  </span>
  {" "}to national and international stages, edition after edition.
</p>
            </div>
            <div className="relative flex items-center justify-center">
  <div className="relative w-full max-w-[500px] aspect-square border border-[#d4af37]/30 overflow-hidden">

    {/* Gold Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/15 via-[#d4af37]/5 to-transparent" />

    {/* Corner Borders */}
    <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-[#d4af37]/60" />
    <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-[#d4af37]/60" />
    <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-[#d4af37]/60" />
    <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-[#d4af37]/60" />

    {/* Circles */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-[280px] h-[280px] rounded-full border border-[#d4af37]/15" />
      <div className="absolute w-[220px] h-[220px] rounded-full border border-[#d4af37]/25" />
      <div className="absolute w-[160px] h-[160px] rounded-full border border-[#d4af37]/35 bg-[#d4af37]/5" />
    </div>

    {/* Crown */}
    <div className="absolute inset-0 flex items-center justify-center">
      <Crown
        className="w-24 h-24 text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]"
        strokeWidth={1}
      />
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

     <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left Design */}
      <div className="relative flex items-center justify-center order-2 md:order-1">
        <div className="relative w-full max-w-[500px] aspect-square border border-[#d4af37]/30 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/15 via-[#d4af37]/5 to-transparent" />

          <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-[#d4af37]/60" />
          <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-[#d4af37]/60" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-[#d4af37]/60" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-[#d4af37]/60" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[280px] h-[280px] rounded-full border border-[#d4af37]/15" />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-[#d4af37]/25" />
            <div className="absolute w-[160px] h-[160px] rounded-full border border-[#d4af37]/35 bg-[#d4af37]/5" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Award
              className="w-24 h-24 text-[#d4af37] drop-shadow-[0_0_25px_rgba(212,175,55,0.8)]"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>

      {/* Mission Text */}
      <div className="order-1 md:order-2">
        <h2
          className="text-3xl md:text-4xl tracking-[0.1em] text-[#d4af37] mb-6"
          style={{ fontFamily: 'var(--font-cinzel), serif' }}
        >
          OUR MISSION
        </h2>

        <div className="w-16 h-[1px] bg-[#d4af37] mb-8" />

        <p
          className="text-white/70 leading-relaxed mb-6"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '1.125rem',
          }}
        >
          To launch a prestigious, first-of-its-kind platform that honours
          South India's five-state cultural richness — empowering young men
          and women to express their confidence, talent, and individuality.
        </p>

        <p
          className="text-white/70 leading-relaxed"
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: '1.125rem',
          }}
        >
          Through professional grooming, expert mentorship, and meaningful
          exposure, the Inaugural Edition aims to shape the next generation
          of models, artists, and public personalities who lead with
          <span className="text-[#d4af37] font-semibold">
            {' '}purpose and pride.
          </span>
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Legacy Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl md:text-4xl tracking-[0.1em] text-[#d4af37] mb-6"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              THE LEGACY
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: 'PRESTIGE',
                description: 'A title that carries the weight of honor and the promise of a legacy that transcends time.'
              },
              {
                icon: Star,
                title: 'EXCELLENCE',
                description: 'Celebrating the pinnacle of talent, grace, and achievement in South India.'
              },
              {
                icon: Award,
                title: 'HERITAGE',
                description: 'Rooted in the rich cultural tapestry of South India, honoring tradition while embracing the future.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-8 border border-[#d4af37]/20 bg-black/50 hover:border-[#d4af37]/40 transition-colors duration-300"
              >
                <item.icon className="w-10 h-10 text-[#d4af37] mx-auto mb-6" strokeWidth={1} />
                <h3 
                  className="text-xl tracking-[0.15em] text-[#d4af37] mb-4"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-white/50 leading-relaxed"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p 
            className="text-2xl md:text-3xl text-white/70 italic leading-relaxed"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            &ldquo;One Crown. Endless Legacy.&rdquo;
          </p>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-8" />
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20" />
    </div>
  )
}
