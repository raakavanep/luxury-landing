'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
      return
    }

    router.push('/admin/upload')
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md border border-[#d4af37]/30 p-8"
      >
        <h1 className="text-4xl text-[#d4af37] mb-8 text-center">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-black border border-[#d4af37]/30 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-black border border-[#d4af37]/30 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-[#d4af37] text-black p-3"
        >
          Login
        </button>
      </form>
    </div>
  )
}