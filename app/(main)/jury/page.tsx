import { Crown, Award, Star } from 'lucide-react'

const juryMembers = [
  {
    name: 'To Be Announced',
    title: 'Chief Guest',
    description: 'Distinguished personality from the entertainment industry'
  },
  {
    name: 'To Be Announced',
    title: 'Fashion Expert',
    description: 'Renowned designer and style consultant'
  },
  {
    name: 'To Be Announced',
    title: 'Celebrity Judge',
    description: 'Award-winning actor and public figure'
  },
  {
    name: 'To Be Announced',
    title: 'Industry Veteran',
    description: 'Legendary figure in South Indian cinema'
  },
  {
    name: 'To Be Announced',
    title: 'Pageant Director',
    description: 'International pageant expert and coach'
  },
  {
    name: 'To Be Announced',
    title: 'Cultural Ambassador',
    description: 'Promoter of South Indian arts and heritage'
  }
]

export default function JuryPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-6 gold-glow" strokeWidth={1} />
          <h1 
            className="text-4xl md:text-6xl tracking-[0.15em] text-[#d4af37] gold-glow mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            THE JURY
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          <p 
            className="text-lg md:text-xl text-white/70 leading-relaxed tracking-wide"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Esteemed personalities who will identify and crown the next Prince & Princess of South India
          </p>
        </div>
      </section>

      {/* Jury Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {juryMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-8 border border-[#d4af37]/20 bg-black/50 hover:border-[#d4af37]/50 transition-all duration-500">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-[#d4af37]/40 flex items-center justify-center bg-gradient-to-br from-[#d4af37]/10 to-transparent group-hover:border-[#d4af37] transition-colors duration-300">
                    <Crown className="w-10 h-10 text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors duration-300" strokeWidth={1} />
                  </div>

                  <h3 
                    className="text-xl tracking-[0.1em] text-[#d4af37] mb-2 text-center"
                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-sm tracking-[0.15em] text-white/60 mb-4 text-center uppercase"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {member.title}
                  </p>
                  <p 
                    className="text-white/40 text-center leading-relaxed"
                    style={{ fontFamily: 'var(--font-cormorant), serif' }}
                  >
                    {member.description}
                  </p>

                  {/* Decorative star */}
                  <Star className="absolute top-4 right-4 w-4 h-4 text-[#d4af37]/30 group-hover:text-[#d4af37]/60 transition-colors duration-300" />
                </div>

                {/* Shadow/offset effect */}
                <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#d4af37]/10 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-2xl md:text-3xl tracking-[0.1em] text-[#d4af37] mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            COMING SOON
          </h2>
          <p 
            className="text-white/60 leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.125rem' }}
          >
            The complete jury panel will be unveiled in the coming weeks. 
            Stay tuned for announcements featuring some of the most celebrated 
            names in entertainment, fashion, and culture.
          </p>
          <div className="inline-block px-8 py-3 border border-[#d4af37]/40 text-[#d4af37] text-sm tracking-[0.2em]"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            ANNOUNCEMENTS PENDING
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  )
}
