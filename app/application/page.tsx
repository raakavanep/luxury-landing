'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ApplicationPage() {

  const router = useRouter()

  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    gender: '',
    nationality: '',
    city: '',
    state: '',
    mobile: '',
    email: '',
    idType: '',
    idNumber: '',
    height: '',
    weight: '',
    instagramHandle: '',
    instagramFollowers: '',
    videoLink: '',
    personalStatement: '',
    paymentReference: '',
    termsAccepted: false,
    dataConsent: false,
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      console.log("Sending:", formData)

const response = await fetch(
  'https://script.google.com/macros/s/AKfycbw2DBAOWZr1Ih9_x81ENb_nQeJbm5GyeAflOwB1G9ZISwRk3TmMcxLmgH5FMS2HoCHXCw/exec',
  
  {

    method: 'POST',
    body: JSON.stringify(formData),
  }
)

console.log("Response:", response)

const text = await response.text()

console.log("Raw Response:", text)

const result = JSON.parse(text)

      if (result.success) {

  setSubmitted(true)

  setFormData({
    firstName: '',
    lastName: '',
    dob: '',
    age: '',
    gender: '',
    nationality: '',
    city: '',
    state: '',
    mobile: '',
    email: '',
    idType: '',
    idNumber: '',
    height: '',
    weight: '',
    instagramHandle: '',
    instagramFollowers: '',
    videoLink: '',
    personalStatement: '',
    paymentReference: '',
    termsAccepted: false,
    dataConsent: false,
  })

} else {
  alert('Submission Failed')
}
    } catch (error) {
      console.error(error)
      alert('Something went wrong')
    }
  }

  const fadeUp = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
}

const totalFields = 19

const completedFields = Object.values(formData).filter(
  (value) =>
    value !== '' &&
    value !== false
).length

const progress = Math.min(
  Math.round((completedFields / totalFields) * 100),
  100
)

if (submitted) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="border border-[#d4af37]/30 p-12 text-center max-w-2xl w-full">

        <h1 className="text-[#d4af37] text-5xl mb-6">
          APPLICATION SUBMITTED
        </h1>

        <p className="text-white/70 text-lg mb-10">
          Thank you for registering for Prince & Princess of South India 2026.
          Our team will review your application and contact you soon.
        </p>

        <a
          href="/home"
          className="inline-block border border-[#d4af37] px-10 py-4 text-[#d4af37] tracking-[0.2em] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
        >
          HOME
        </a>

      </div>
    </div>
  )
}

  return (

    <>


    <div className="gold-bg z-10">
  <span style={{ left: '5%', animationDelay: '0s' }} />
  <span style={{ left: '12%', animationDelay: '1s' }} />
  <span style={{ left: '20%', animationDelay: '2s' }} />
  <span style={{ left: '30%', animationDelay: '3s' }} />
  <span style={{ left: '40%', animationDelay: '4s' }} />
  <span style={{ left: '50%', animationDelay: '5s' }} />
  <span style={{ left: '60%', animationDelay: '2s' }} />
  <span style={{ left: '70%', animationDelay: '1s' }} />
  <span style={{ left: '80%', animationDelay: '3s' }} />
  <span style={{ left: '90%', animationDelay: '4s' }} />
  <span style={{ left: '95%', animationDelay: '5s' }} />
</div>
    
    <div className="bg-black min-h-screen text-white pt-32 pb-20 px-4">
<div className="relative z-20 form-card max-w-5xl mx-auto border border-[#d4af37]/30 p-8 md:p-12">
<div className="mb-6">
  <button
    type="button"
    onClick={() => router.back()}
    className="flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors"
  >
    <ArrowLeft size={20} />
    <span className="tracking-[0.15em]">BACK</span>
  </button>
</div>
        <h1 className="gold-title text-5xl">
  PPOSI 2026 APPLICATION
</h1>

<div className="mb-10">

  <div className="flex justify-between text-sm text-[#d4af37] mb-2">
    <span>Application Progress</span>
    <span>{progress}%</span>
  </div>

  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

    <div
      className="h-full bg-[#d4af37] progress-glow transition-all duration-700"
      style={{
        width: `${progress}%`
      }}
    />

  </div>

</div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* PERSONAL DETAILS */}

          
            <motion.div {...fadeUp}>
                <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: '100%' }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-[1px] bg-[#d4af37] mb-6"
/>
  <h2 className="text-[#d4af37] text-2xl mb-6">
    Personal Details
  </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

              <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

              <input
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input luxury-input"
                required
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

              <input
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

              <input
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

            </div>
          </motion.div>

          {/* CONTACT */}

          <motion.div {...fadeUp}>
            <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: '100%' }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-[1px] bg-[#d4af37] mb-6"
/>
  <h2 className="text-[#d4af37] text-2xl mb-6">
    Contact Details
  </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

            </div>
          </motion.div>

          {/* IDENTITY */}

          <motion.div {...fadeUp}>
            <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: '100%' }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-[1px] bg-[#d4af37] mb-6"
/>
  <h2 className="text-[#d4af37] text-2xl mb-6">
    Identity & Eligibility
  </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <select
  name="idType"
  value={formData.idType}
  onChange={handleChange}
  className="input luxury-input"
  required
>
  <option value="" disabled hidden>
    Select ID
  </option>
  <option value="Aadhaar">Aadhaar</option>
  <option value="Passport">Passport</option>
  <option value="Voter ID">Voter ID</option>
</select>

              <input
                name="idNumber"
                placeholder="ID Number"
                value={formData.idNumber}
                onChange={handleChange}
                className="input luxury-input"
                required
              />

            </div>
          </motion.div>
          {/* PHYSICAL */}

          <motion.div {...fadeUp}>
            <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: '100%' }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-[1px] bg-[#d4af37] mb-6"
/>
  <h2 className="text-[#d4af37] text-2xl mb-6">
    Physical Profile
  </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="height"
                placeholder="Height (cm)"
                value={formData.height}
                onChange={handleChange}
                className="input luxury-input"
              />

              <input
                name="weight"
                placeholder="Weight (kg)"
                value={formData.weight}
                onChange={handleChange}
                className="input luxury-input"
              />

            </div>
          </motion.div>

          {/* SOCIAL */}

          <motion.div {...fadeUp}>
            <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: '100%' }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-[1px] bg-[#d4af37] mb-6"
/>
  <h2 className="text-[#d4af37] text-2xl mb-6">
    Social Presence
  </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="instagramHandle"
                placeholder="Instagram Handle"
                value={formData.instagramHandle}
                onChange={handleChange}
                className="input luxury-input"
              />

              <input
                name="instagramFollowers"
                placeholder="Instagram Followers"
                value={formData.instagramFollowers}
                onChange={handleChange}
                className="input luxury-input"
              />

              <input
                name="videoLink"
                placeholder="Video Introduction Link (60-90 Sec)"
                value={formData.videoLink}
                onChange={handleChange}
                className="input md:col-span-2"
              />

            </div>
          </motion.div>

          {/* STATEMENT */}

          
            <motion.div {...fadeUp}>
                <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: '100%' }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-[1px] bg-[#d4af37] mb-6"
/>
  <h2 className="text-[#d4af37] text-2xl mb-6">
    Personal Statement
  </h2>

            <textarea
              name="personalStatement"
              rows={8}
              value={formData.personalStatement}
              onChange={handleChange}
              placeholder="Why do you want to be Prince / Princess of South India? (250-400 words)"
              className="input resize-none"
              required
            />
          </motion.div>

          {/* PAYMENT */}

         <motion.div {...fadeUp}>
            <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: '100%' }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="h-[1px] bg-[#d4af37] mb-6"
/>
  <h2 className="text-[#d4af37] text-2xl mb-6">
    Payment Details
  </h2>
<p className="text-white/70 mb-4">
  <span className="block">Registration Fee: ₹750</span>
  <span className="block mt-2">
    Please confirm your registration fee payment by contacting us on{" "}
    <a
      href="https://wa.me/919787891949"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#d4af37] underline hover:text-yellow-300"
    >
      WhatsApp (+91 9787891949)
    </a>.
  </span>
</p>
            
          </motion.div>

          {/* DECLARATION */}

          {/* DECLARATION */}

<motion.div {...fadeUp}>

  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: '100%' }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="h-[1px] bg-[#d4af37] mb-6"
  />

  <h2 className="text-[#d4af37] text-2xl mb-6">
    Declaration
  </h2>

  <div className="space-y-4">

    <label className="flex gap-3">
      <input
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleCheckbox}
        required
      />
      <span>I agree to Terms & Conditions</span>
    </label>

    <label className="flex gap-3">
      <input
        type="checkbox"
        name="dataConsent"
        checked={formData.dataConsent}
        onChange={handleCheckbox}
        required
      />
      <span>I consent to data collection and processing</span>
    </label>

  </div>

</motion.div>

<button
  type="submit"
  className="w-full border border-[#d4af37] py-4 text-[#d4af37]
  tracking-[0.25em] hover:bg-[#d4af37]
  hover:text-black transition-all duration-500
  hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
>
  SUBMIT APPLICATION
</button>

        </form>
      </div>
    </div>

     </>
  )
}