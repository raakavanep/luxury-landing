'use client'

import { useState } from 'react'
import { Crown, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    await fetch(
  "https://script.google.com/macros/s/AKfycbxm7fJEVqQrAxSPwJio-9GXw1Cc8YhTMBVsM0RFq_XfedWfMFT_lAQsb_PGMqiuoRHe-Q/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(formData),
  }
)
    alert("Registration submitted successfully!")

    setFormData({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
})
  } catch (error) {
    console.error(error)
    alert("Failed to submit form")
  }
}

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
            CONTACT
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
          <p 
            className="text-lg md:text-xl text-white/70 leading-relaxed tracking-wide"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Begin your journey to the crown
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="p-8 md:p-12 border border-[#d4af37]/20 bg-black/50">
                <h2 
                  className="text-2xl tracking-[0.1em] text-[#d4af37] mb-8"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  LEAVE A MESSAGE
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      className="block text-sm tracking-[0.15em] text-white/60 mb-2"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-[#d4af37]/30 text-white placeholder-white/30 focus:border-[#d4af37] focus:outline-none transition-colors"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm tracking-[0.15em] text-white/60 mb-2"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-[#d4af37]/30 text-white placeholder-white/30 focus:border-[#d4af37] focus:outline-none transition-colors"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label 
                      className="block text-sm tracking-[0.15em] text-white/60 mb-2"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-[#d4af37]/30 text-white placeholder-white/30 focus:border-[#d4af37] focus:outline-none transition-colors"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
  <label
    className="block text-sm tracking-[0.15em] text-white/60 mb-2"
    style={{ fontFamily: 'var(--font-cormorant), serif' }}
  >
    SUBJECT
  </label>

  <input
    type="text"
    value={formData.subject}
    onChange={(e) =>
      setFormData({ ...formData, subject: e.target.value })
    }
    className="w-full px-4 py-3 bg-black/50 border border-[#d4af37]/30 text-white placeholder-white/30 focus:border-[#d4af37] focus:outline-none transition-colors"
    style={{ fontFamily: 'var(--font-cormorant), serif' }}
    placeholder="Enter subject"
    required
  />
</div>

                  <div>
                    <label 
                      className="block text-sm tracking-[0.15em] text-white/60 mb-2"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      MESSAGE
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-[#d4af37]/30 text-white placeholder-white/30 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 border border-[#d4af37] text-[#d4af37] tracking-[0.15em] hover:bg-[#d4af37]/10 transition-all duration-300 luxury-button"
                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                  >
                    SEND MESSAGE
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#d4af37]/10 -z-10" />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 
                  className="text-2xl tracking-[0.1em] text-[#d4af37] mb-8"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  CONTACT US
                </h2>
                <p 
                  className="text-white/60 leading-relaxed mb-8"
                  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '1.125rem' }}
                >
                  Have questions about the Prince & Princess of South India? 
                  Our team is here to assist you on your journey to the crown.
                </p>
              </div>
<div className="space-y-6">
              <div className="flex items-start gap-4 p-6 border border-[#d4af37]/20 bg-black/30">
  <Mail className="w-6 h-6 text-[#d4af37] mt-1" strokeWidth={1} />
  <div>
    <h3
      className="text-sm tracking-[0.15em] text-[#d4af37] mb-2"
      style={{ fontFamily: 'var(--font-cinzel), serif' }}
    >
      EMAIL
    </h3>

    <p
      className="text-white/60"
      style={{ fontFamily: 'var(--font-cormorant), serif' }}
    >
      craftandframeproduction@gmail.com
    </p>
  </div>
</div>

                <div className="flex items-start gap-4 p-6 border border-[#d4af37]/20 bg-black/30">
                  <Phone className="w-6 h-6 text-[#d4af37] mt-1" strokeWidth={1} />
                  <div>
                    <h3 
                      className="text-sm tracking-[0.15em] text-[#d4af37] mb-2"
                      style={{ fontFamily: 'var(--font-cinzel), serif' }}
                    >
                      PHONE
                    </h3>
                    <p 
                      className="text-white/60"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      +91 91761 74442
                    </p>                              
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 border border-[#d4af37]/20 bg-black/30">
                  <MapPin className="w-6 h-6 text-[#d4af37] mt-1" strokeWidth={1} />
                  <div>
                    <h3 
                      className="text-sm tracking-[0.15em] text-[#d4af37] mb-2"
                      style={{ fontFamily: 'var(--font-cinzel), serif' }}
                    >
                      LOCATION
                    </h3>
                    <p 
                      className="text-white/60"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      Chennai
                    </p>
                  </div>
                </div>
              </div>

              {/* Social hint */}
              <div className="pt-8 border-t border-[#d4af37]/20">
                <p 
                  className="text-sm text-white/40 tracking-wider"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  Follow us on social media for updates and announcements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  )
}
