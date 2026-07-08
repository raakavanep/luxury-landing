'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/home', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/the-crown', label: 'THE CROWN' },
  { href: '/categories', label: 'CATEGORIES' },
  { href: '/gallery', label: 'GALLERY' },
  { href: '/jury', label: 'JURY' },
  { href: '/our-team', label: 'OUR TEAM' },
  { href: '/contact', label: 'CONTACT' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href || (href === '/home' && pathname === '/')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#d4af37]/20">
      <nav className="w-full px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-center relative">

           {/* PPOSI Logo */}
  <Link
    href="/"
    className="hidden xl:block absolute left-0 text-[#d4af37] text-3xl tracking-[0.25em]"
    style={{ fontFamily: "serif" }}
  >
    PPOSI
  </Link>
          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative text-xs xl:text-sm tracking-[0.2em] font-normal transition-colors duration-300 pb-1 ${
                    isActive(item.href)
                      ? 'text-[#d4af37]'
                      : 'text-white/80 hover:text-[#d4af37]'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d4af37]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Register Button - Desktop */}
          <Link
  href=""
  className="hidden xl:block absolute right-0 px-4 py-2 border border-[#d4af37] text-[#d4af37] text-xs xl:text-sm tracking-[0.15em] font-normal hover:bg-[#d4af37] hover:text-black transition-all duration-300"
>
  REGISTER NOW
</Link>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-[#d4af37] p-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-[#d4af37]/20 pt-4">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block text-sm tracking-[0.2em] font-normal transition-colors duration-300 ${
                      isActive(item.href)
                        ? 'text-[#d4af37]'
                        : 'text-white/80 hover:text-[#d4af37]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
  href="/application"
  className="inline-block px-5 py-2 border border-[#d4af37] text-[#d4af37] text-sm tracking-[0.15em] font-normal hover:bg-[#d4af37] hover:text-black transition-all duration-300"
  onClick={() => setMobileMenuOpen(false)}
>
  REGISTER NOW
</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
