'use client'

import { useState } from 'react'
import {
  Crown,
  Mail,
  Phone,
  MapPin,
  Send,
  X,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { FaXTwitter, FaThreads } from "react-icons/fa6";



export default function ContactPage() {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
console.log("Sending:", formData);
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
     <a
  href="mailto:craftandframeproduction@gmail.com"
  className="hover:text-[#d4af37]"
>
  craftandframeproduction@gmail.com
</a>
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
                      <a
  href="tel:+919787891949"
  className="hover:text-[#d4af37]"
>
  +91 9787891949
</a>
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
              
              

{/* FOLLOW US */}

<div className="border border-[#d4af37]/20 bg-black/30 p-6 mt-6">

  <h3
    className="text-[#d4af37] tracking-[0.15em] mb-5"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    FOLLOW US
  </h3>

  <div className="flex flex-wrap gap-5 text-[#d4af37]">

    <a
      href="https://www.instagram.com/princeandprincessofsouthindia?igsh=NWowNWQ3N3R5MWh5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram size={26} />
    </a>

    <a
      href="https://www.facebook.com/share/1Bk3SUYfE4/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Facebook size={26} />
    </a>

    <a
      href="https://x.com/princenprinz"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaXTwitter size={24} />
    </a>

    <a
      href="https://www.threads.com/@princeandprincessofsouthindia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaThreads size={24} />
    </a>

    <a
      href="https://www.youtube.com/@princeandprinceofsouthindia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Youtube size={26} />
    </a>

    <a
      href="mailto:princeandprincessofsouthindia@gmail.com"
    >
      <Mail size={26} />
    </a>

  </div>

  <p className="text-white/50 text-sm mt-5 break-all">
    princeandprincessofsouthindia@gmail.com
  </p>

</div>

<div className="flex justify-end mt-3 pr-2">

  <button
    onClick={() => setShowPrivacy(true)}
    className="
      text-[#d4af37]/40
      hover:text-[#d4af37]
      text-xs
      tracking-[0.18em]
      uppercase
      transition-all
      duration-300
      hover:translate-x-1
    "
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Privacy Policy →
  </button>

</div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20" />
      {showPrivacy && (
  <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">

    <div className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto bg-[#0b0b0b] border border-[#d4af37]/30 p-8 rounded-lg">

      <button
        onClick={() => setShowPrivacy(false)}
        className="absolute top-5 right-5 text-[#d4af37] hover:text-white"
      >
        <X size={28} />
      </button>

      <h2
        className="text-4xl text-[#d4af37] mb-8"
        style={{ fontFamily: "var(--font-cinzel), serif" }}
      >
        Privacy Policy
      </h2>

      {/* Paste your Privacy Policy here */}
      <div
  className="space-y-8 text-white/70 leading-8"
  style={{ fontFamily: "var(--font-cormorant), serif" }}
>

  {/* Title */}
  <div className="text-center border-b border-[#d4af37]/20 pb-8">
    <h2
      className="text-4xl text-[#d4af37] mb-2"
      style={{ fontFamily: "var(--font-cinzel), serif" }}
    >
      PPOSI 2026
    </h2>

    <p className="text-white text-xl">
      Prince & Princess of South India
    </p>

    <h3
      className="text-[#d4af37] text-2xl mt-6"
      style={{ fontFamily: "var(--font-cinzel), serif" }}
    >
      PRIVACY POLICY
    </h3>

    <p className="text-white/50 mt-2">
      Last updated: 7 July 2026
    </p>
  </div>

  {/* Introduction */}

  <div>

    <p>
      This Privacy Policy describes the policies and procedures of
      Craft &amp; Frame Production ("CFP", "We", "Us", or "Our") on
      the collection, use, and disclosure of Your information when
      You engage with PPOSI 2026 (Prince &amp; Princess of South India),
      including our website, registration portal, auditions, live
      events, broadcast and OTT content, and related services
      (together, the "Service"), and tells You about Your privacy
      rights and how the law protects You.
    </p>

    <p className="mt-5">
      We use Your Personal Data to provide and improve the Service.
      By using the Service — including by registering as a contestant,
      collaborator, sponsor, media partner, or visitor — You agree
      to the collection and use of information in accordance with
      this Privacy Policy.
    </p>

  </div>

  {/* Interpretation */}

  <div>

    <h3
      className="text-[#d4af37] text-2xl mb-4"
      style={{ fontFamily: "var(--font-cinzel), serif" }}
    >
      Interpretation and Definitions
    </h3>

    <h4 className="text-[#d4af37] text-xl mb-3">
      Interpretation
    </h4>

    <p>
      Words with an initial capital letter have meanings defined
      under the following conditions. These definitions apply
      whether the terms appear in the singular or the plural.
    </p>

  </div>

  {/* Definitions */}

  <div>

    <h4 className="text-[#d4af37] text-xl mb-3">
      Definitions
    </h4>

    <p className="mb-5">
      For the purposes of this Privacy Policy:
    </p>

    <ul className="list-disc pl-8 space-y-4">

      <li>
        <strong className="text-[#d4af37]">Account</strong> means a unique
        account created for You to access the Service or parts of the
        Service, including the contestant registration portal.
      </li>

      <li>
        <strong className="text-[#d4af37]">Company</strong> (referred to as
        "the Company", "We", "Us", or "Our") refers to Craft &amp;
        Frame Production, the producing entity of PPOSI 2026,
        operating from Chennai, Tamil Nadu, India, in partnership
        with the pageant's owner.
      </li>

      <li>
        <strong className="text-[#d4af37]">Contestant</strong> means an
        individual who registers, auditions, or is selected to
        participate in PPOSI 2026 as a Prince or Princess candidate.
      </li>

      <li>
        <strong className="text-[#d4af37]">Cookies</strong> are small files
        placed on Your computer, mobile device, or other device by a
        website, containing details of Your browsing history on that
        website, among other uses.
      </li>

      <li>
        <strong className="text-[#d4af37]">Country</strong> refers to:
        Tamil Nadu, India.
      </li>

      <li>
        <strong className="text-[#d4af37]">Device</strong> means any device
        that can access the Service, such as a computer, cell phone,
        or digital tablet.
      </li>

      <li>
        <strong className="text-[#d4af37]">Pageant Territory</strong>
        refers to the participating states of Tamil Nadu, Kerala,
        Karnataka, Andhra Pradesh, and Telangana.
      </li>

      <li>
        <strong className="text-[#d4af37]">Personal Data</strong> is any
        information that relates to an identified or identifiable
        individual.
      </li>

      <li>
        <strong className="text-[#d4af37]">Service</strong> refers to the
        PPOSI 2026 website, registration and audition platforms,
        live events, broadcast, and any associated OTT or digital
        content.
      </li>

      <li>
        <strong className="text-[#d4af37]">Service Provider</strong> means
        any natural or legal person who processes data on behalf of
        the Company, including third-party vendors engaged to
        facilitate registration, judging, broadcast, or payment
        processing.
      </li>

      <li>
        <strong className="text-[#d4af37]">Sponsor / Media Partner</strong>
        means any entity engaged with PPOSI 2026 under a sponsorship,
        co-production, or media partnership arrangement.
      </li>

      <li>
        <strong className="text-[#d4af37]">Third-Party Social Media Service</strong>
        refers to any website or social network through which a User
        may log in or create an account to use the Service.
      </li>

      <li>
        <strong className="text-[#d4af37]">Usage Data</strong> refers to
        data collected automatically, generated either by use of the
        Service or from the Service's infrastructure itself
        (for example, the duration of a page visit).
      </li>

      <li>
        <strong className="text-[#d4af37]">You</strong> means the
        individual accessing or using the Service — including
        Contestants, collaborators, sponsors, media partners, and
        website visitors — or the entity on whose behalf such
        individual is acting.
      </li>

    </ul>

  </div>

  {/* Collecting Data */}

  <div>

    <h3
      className="text-[#d4af37] text-2xl mb-4"
      style={{ fontFamily: "var(--font-cinzel), serif" }}
    >
      Collecting and Using Your Personal Data
    </h3>

    <h4 className="text-[#d4af37] text-xl mb-3">
      Personal Data
    </h4>

    <p className="mb-5">
      While You use the Service, We may ask You to provide certain
      personally identifiable information that can be used to
      contact or identify You. This may include, but is not limited to:
    </p>

    <ul className="list-disc pl-8 space-y-3">

      <li>Email address</li>

      <li>First name and last name</li>

      <li>Phone number</li>

      <li>Address, state, province, ZIP/postal code, city</li>

      <li>
        Date of birth and age proof
        (to confirm eligibility:
        Princess 18–26 years,
        Prince 18–35 years)
      </li>

      <li>Photographs, video submissions, and audition recordings</li>

      <li>
        Physical measurements or profile details submitted as part
        of the registration and judging process
      </li>

      <li>
        Identity and address proof documents submitted for
        verification
      </li>

      <li>
        Bank account or payment details, where required for
        registration fee payment or prize disbursement
      </li>

      <li>Usage Data</li>

    </ul>

  </div>

  {/* Usage Data */}

  <div>

    <h4 className="text-[#d4af37] text-xl mb-3">
      Usage Data
    </h4>

    <p>
      Usage Data is collected automatically when using the Service.
      It may include Your Device's Internet Protocol (IP) address,
      browser type and version, the pages of the Service that You
      visit, the time and date of Your visit, time spent on those
      pages, unique device identifiers, and other diagnostic data.
      When You access the Service through a mobile device, We may
      also collect the type of mobile device, its unique ID,
      IP address, operating system, and mobile browser type.
    </p>

  </div>
{/* Information Collected from Contestants and Participants */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Information Collected from Contestants and Participants
  </h3>

  <p>
    In connection with registration, auditions, and participation in
    PPOSI 2026, We may additionally collect biographical details,
    talent or portfolio submissions, social media handles, emergency
    contact information, and any information required under the
    Contestant Registration Form, Eligibility and Selection Policy,
    or related participant agreements.
  </p>

  <p className="mt-5">
    This Privacy Policy should be read alongside those agreements,
    which govern image, likeness, and publicity rights in greater
    detail.
  </p>

</div>

{/* Payment and Cancellation Policy */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Payment and Cancellation Policy
  </h3>

  <p>
    Registration fees for PPOSI 2026 are collected via UPI payment
    request shared directly through WhatsApp.
  </p>

  <p className="mt-5">
    As part of this process, We may receive the following
    information:
  </p>

  <ul className="list-disc pl-8 mt-4 space-y-3">
    <li>UPI ID / Mobile Number used for payment.</li>
    <li>Transaction Reference ID.</li>
    <li>Date and Time of the transaction.</li>
    <li>Transaction Amount.</li>
  </ul>

  <p className="mt-5">
    We do not collect or store Your card, bank account, or other
    sensitive financial details, as payment is processed directly
    through Your UPI application.
  </p>

  <p className="mt-5">
    Transaction reference IDs are retained by Us, linked to Your
    applicant/customer ID, for internal accounting, verification,
    and legal compliance purposes.
  </p>

</div>

{/* Fraud & Disputes */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Fraud &amp; Disputes
  </h3>

  <p>
    If a transaction is flagged as suspicious or disputed by Your
    bank or UPI provider, You have the right to raise the issue with
    Us directly, and We will assist in providing transaction
    confirmation details as needed.
  </p>

</div>

{/* Refund Policy */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Refund Policy
  </h3>

  <p>
    Registration fees, once paid, are non-refundable, except where
    required by law or expressly stated in the applicable participant
    agreement.
  </p>

  <p className="mt-5">
    If You are dissatisfied for any reason, please contact Us using
    the details in the "Contact Us" section below.
  </p>

</div>

{/* Tracking Technologies and Cookies */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Tracking Technologies and Cookies
  </h3>

  <p>
    We use Cookies and similar tracking technologies (beacons,
    tags, and scripts) to track activity on Our Service and to
    improve and analyse it.
  </p>

  <p className="mt-5">
    The technologies We may use include:
  </p>

  <ul className="list-disc pl-8 mt-4 space-y-4">

    <li>
      <strong className="text-[#d4af37]">
        Cookies or Browser Cookies
      </strong>
      <br />
      You can instruct Your browser to refuse all Cookies or to
      indicate when a Cookie is being sent. If You do not accept
      Cookies, some parts of the Service may not function properly.
    </li>

    <li>
      <strong className="text-[#d4af37]">
        Web Beacons
      </strong>
      <br />
      Certain sections of the Service and Our emails may contain
      small electronic files that permit Us to, for example, count
      users who have visited a page or opened an email, and to
      compile related statistics.
    </li>

  </ul>

  <p className="mt-5">
    Cookies may be <strong>"Persistent"</strong> (remaining on Your
    device until deleted or expired) or <strong>"Session"</strong>
    (deleted once You close Your browser).
  </p>

  <p className="mt-5">
    We use both types for purposes including essential site
    functionality, remembering Your cookie consent, and remembering
    Your preferences.
  </p>

</div>

{/* Use of Your Personal Data */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Use of Your Personal Data
  </h3>

  <p className="mb-5">
    The Company may use Personal Data for the following purposes:
  </p>

  <ul className="list-disc pl-8 space-y-3">

    <li>To provide and maintain the Service, including monitoring its usage.</li>

    <li>
      To manage Your Account and Your registration as a Contestant,
      collaborator, sponsor, or media partner.
    </li>

    <li>
      For the performance of a contract, including the participant,
      sponsor, or collaborator agreements applicable to PPOSI 2026.
    </li>

    <li>
      To administer auditions, judging, and selection, including
      sharing relevant Contestant information with judges and the
      selection panel.
    </li>

    <li>
      To produce and distribute broadcast, digital, and OTT content,
      including using photographs, video, and audio of Contestants
      and event participants across episodes, promotional material,
      and social media, in line with the publicity terms of the
      applicable participant agreement.
    </li>

    <li>
      To contact You by email, phone, SMS, or other electronic means
      regarding updates, schedules, or informative communications
      related to the pageant.
    </li>

    <li>
      To share information with sponsors and media partners in
      connection with award categories, sponsorship benefits, and
      category exclusivity arrangements, as applicable.
    </li>

    <li>To manage Your requests to Us.</li>

    <li>
      For business transfers, such as a merger, restructuring, or
      sale of assets involving the Company or PPOSI 2026.
    </li>

    <li>
      For other purposes, such as data analysis, identifying usage
      trends, and improving the Service and future editions of the
      pageant.
    </li>

  </ul>

  <p className="mt-8 mb-5">
    We may share Your personal information in the following
    situations:
  </p>

  <ul className="list-disc pl-8 space-y-3">

    <li>
      With Service Providers who help operate, analyse, or improve
      the Service.
    </li>

    <li>
      With Sponsors, Co-Producers, and Media Partners, in connection
      with award categories, promotional activity, and broadcast or
      OTT distribution.
    </li>

    <li>
      For business transfers, in connection with a merger, asset
      sale, financing, or acquisition.
    </li>

    <li>
      With Affiliates, who will be required to honour this Privacy
      Policy.
    </li>

    <li>
      With other participants and the public, where information is
      shared as part of broadcast, live events, gallery, or media
      coverage of the pageant.
    </li>

    <li>With Your consent, for any other purpose.</li>

  </ul>

</div>

{/* Retention of Your Personal Data */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Retention of Your Personal Data
  </h3>

  <p>
    The Company will retain Your Personal Data only for as long as
    necessary for the purposes set out in this Privacy Policy,
    including to comply with legal obligations, resolve disputes,
    and enforce Our agreements and policies.
  </p>

  <p className="mt-5">
    Usage Data is generally retained for a shorter period, except
    where needed to strengthen security, improve functionality, or
    comply with a longer legal retention requirement.
  </p>

  <p className="mt-5">
    Broadcast and promotional content featuring Contestants may be
    retained and used beyond the pageant cycle in line with the
    applicable participant agreement.
  </p>

</div>

{/* Transfer of Your Personal Data */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Transfer of Your Personal Data
  </h3>

  <p>
    Your information, including Personal Data, is processed at the
    Company's operating offices in Chennai, Tamil Nadu, and at the
    locations of any Service Providers or partners involved in
    producing PPOSI 2026 across the Pageant Territory.
  </p>

  <p className="mt-5">
    This may involve transfer to, and processing in, locations
    outside Your state or jurisdiction.
  </p>

  <p className="mt-5">
    By submitting Your information, You consent to such transfer.
    The Company will take reasonable steps to ensure Your data is
    treated securely and in accordance with this Privacy Policy.
  </p>

</div>

{/* Disclosure of Your Personal Data */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Disclosure of Your Personal Data
  </h3>

  <h4 className="text-[#d4af37] text-xl mb-3">
    Business Transactions
  </h4>

  <p>
    If the Company is involved in a merger, acquisition, or asset
    sale, Your Personal Data may be transferred. We will provide
    notice before Your Personal Data becomes subject to a different
    privacy policy.
  </p>

  <h4 className="text-[#d4af37] text-xl mt-8 mb-3">
    Law Enforcement
  </h4>

  <p>
    Under certain circumstances, the Company may be required to
    disclose Your Personal Data if required to do so by law or in
    response to valid requests by public authorities.
  </p>

  <h4 className="text-[#d4af37] text-xl mt-8 mb-3">
    Other Legal Requirements
  </h4>

  <p>
    The Company may disclose Your Personal Data in the good faith
    belief that such action is necessary to comply with a legal
    obligation, protect and defend the rights or property of the
    Company, prevent or investigate wrongdoing in connection with
    the Service, protect the personal safety of Users or the public,
    or protect against legal liability.
  </p>

</div>
{/* Security of Your Personal Data */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Security of Your Personal Data
  </h3>

  <p>
    The security of Your Personal Data is important to Us, but no
    method of transmission over the Internet, or method of electronic
    storage, is 100% secure.
  </p>

  <p className="mt-5">
    While We strive to use commercially acceptable means to protect
    Your Personal Data, We cannot guarantee its absolute security.
  </p>

</div>

{/* Links to Other Websites */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Links to Other Websites
  </h3>

  <p>
    Our Service may contain links to third-party websites, including
    sponsor and partner websites, that are not operated by Us.
  </p>

  <p className="mt-5">
    We strongly advise You to review the privacy policy of every site
    You visit. We have no control over and assume no responsibility
    for the content, privacy policies, or practices of any
    third-party websites or services.
  </p>

</div>

{/* Children's Privacy */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Children's Privacy
  </h3>

  <p>
    The Service is intended for individuals who meet the eligibility
    criteria set out in the PPOSI 2026 Eligibility and Selection
    Policy (Princess: 18–35 years; Prince: 18–35 years).
  </p>

  <p className="mt-5">
    We do not knowingly collect Personal Data from anyone under the
    age of 18.
  </p>

  <p className="mt-5">
    If You believe a minor has provided Us with Personal Data, please
    contact Us so that We can take appropriate action.
  </p>

</div>

{/* Changes to this Privacy Policy */}

<div>

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Changes to this Privacy Policy
  </h3>

  <p>
    We may update this Privacy Policy from time to time. We will
    notify You of any changes by posting the updated Privacy Policy
    on this page and updating the <strong>"Last Updated"</strong>
    date above.
  </p>

  <p className="mt-5">
    You are advised to review this Privacy Policy periodically for
    any changes. Changes are effective immediately when they are
    posted on this page.
  </p>

</div>

{/* Contact Us */}

<div>

  <p className="mb-5">
    If You have any questions about this Privacy Policy, You can
    contact Us:
  </p>

  

</div>

{/* Important Note */}

<div className="border-l-4 border-[#d4af37] bg-[#d4af37]/5 p-6 rounded-r-lg">

  <h3
    className="text-[#d4af37] text-2xl mb-4"
    style={{ fontFamily: "var(--font-cinzel), serif" }}
  >
    Important Note
  </h3>

  <p>
    Bracketed fields are placeholders. Please insert Craft &amp;
    Frame Production's registered address, official contact email,
    phone number, and website before publishing this Privacy Policy.
  </p>

  <p className="mt-5">
    This Privacy Policy is a foundational document and should be
    reviewed by legal counsel alongside the PPOSI 2026 Participant,
    Sponsor, and Collaborator Agreements before publication.
  </p>

</div>
</div>


    </div>

  </div>
)}

    </div>
  )
}
