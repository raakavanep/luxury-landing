import { Calendar, Clock, MapPin, Crown } from 'lucide-react'

const scheduleItems = [
  {
    date: 'JANUARY 2026',
    title: 'REGISTRATIONS OPEN',
    description: 'Online applications begin for all categories',
    time: '12:00 AM IST'
  },
  {
    date: 'FEBRUARY 2026',
    title: 'AUDITION ROUNDS',
    description: 'Audition Round',
    time: 'Multiple Dates'
  },
  {
    date: 'MARCH 2026',
    title: 'GROOMING SESSIONS',
    description: 'Selected participants undergo professional training',
    time: 'Week-long Program'
  },
  {
    date: 'APRIL 2026',
    title: 'SEMI-FINALS',
    description: '',
    time: 'Venue TBA'
  },
  {
    date: 'MAY 2026',
    title: 'GRAND FINALE',
    description: 'The crowning ceremony of Prince & Princess of South India',
    time: 'Prime Time Event'
  }
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Calendar className="w-12 h-12 text-[#d4af37] mx-auto mb-6 gold-glow" strokeWidth={1} />
          <h1 
            className="text-4xl md:text-6xl tracking-[0.15em] text-[#d4af37] gold-glow mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            SCHEDULE
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          <p 
            className="text-lg md:text-xl text-white/70 leading-relaxed tracking-wide"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Mark your calendars for the journey to the crown
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d4af37] via-[#d4af37]/50 to-[#d4af37]/20 transform md:-translate-x-1/2" />

            {scheduleItems.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div 
                    className={`p-6 border border-[#d4af37]/20 bg-black/50 hover:border-[#d4af37]/40 transition-colors duration-300 ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    } max-w-md`}
                  >
                    <span 
                      className="text-xs tracking-[0.2em] text-[#d4af37]/80 block mb-2"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {item.date}
                    </span>
                    <h3 
                      className="text-xl tracking-[0.1em] text-[#d4af37] mb-3"
                      style={{ fontFamily: 'var(--font-cinzel), serif' }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-white/50 mb-4 leading-relaxed"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-white/40">
                      <Clock className="w-4 h-4" />
                      <span 
                        className="text-sm"
                        style={{ fontFamily: 'var(--font-cormorant), serif' }}
                      >
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-black border-2 border-[#d4af37] rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                  <div className="absolute inset-1 bg-[#d4af37] rounded-full" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}

            {/* Final crown icon */}
            <div className="absolute left-0 md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-8">
              <Crown className="w-8 h-8 text-[#d4af37] gold-glow" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl tracking-[0.1em] text-[#d4af37] mb-6"
            style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            GRAND FINALE VENUE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          
          <div className="inline-flex items-center gap-3 px-8 py-4 border border-[#d4af37]/30 bg-black/30">
            <MapPin className="w-5 h-5 text-[#d4af37]" />
            <span 
              className="text-white/70 tracking-wider"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              TO BE ANNOUNCED - SOUTH INDIA
            </span>
          </div>

          <p 
            className="mt-8 text-white/50"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            The grand finale will be held at a prestigious venue befitting the occasion.
            <br />
            Details will be announced closer to the event.
          </p>
        </div>
      </section>

      <div className="h-20" />
    </div>
  )
}
