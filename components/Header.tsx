'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/mun2027', label: 'MUN 2027' },
  { href: '/pau', label: 'Pau & Travel' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const glass = 'bg-white/65 backdrop-blur-md backdrop-saturate-150 border-2 border-gray-400/80 shadow-lg shadow-black/10'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">

      {/* Top bar: socials + Apply button */}
      <div className="bg-white relative z-20">
        <div className="px-6 lg:px-10 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/mun_saintdo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-navy-dark text-white flex items-center justify-center hover:bg-navy-mid transition-colors">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/mun.saintdominique" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-navy-dark text-white flex items-center justify-center hover:bg-navy-mid transition-colors">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/mun_saintdo" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="w-9 h-9 rounded-full bg-navy-dark text-white flex items-center justify-center hover:bg-navy-mid transition-colors">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-yellow-500 text-white font-semibold text-sm rounded-full px-5 py-2 transition-colors shadow whitespace-nowrap">
            Apply on MyMUN
          </a>
        </div>
      </div>

      {/* Floating pills over the hero */}
      <div className="absolute top-full left-0 right-0 z-10 px-6 lg:px-10 pt-3">
        <div className="flex items-center justify-between gap-4">

          {/* Logo pill — globe overflows the pill to stand out */}
          <Link href="/" className={`flex items-center rounded-full px-4 py-1.5 ${glass}`}>
            <Image
              src="/images/logo MUN.webp"
              alt="MUN Saint Dominique"
              width={420}
              height={130}
              priority
              className="h-10 w-auto -my-2"
            />
          </Link>

          {/* Navigation pill */}
          <nav className={`hidden lg:flex items-center gap-1 rounded-full px-3 py-2 ${glass}`}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 hover:text-gray-900 hover:bg-white/40 transition-colors font-semibold text-xs uppercase tracking-wide px-4 py-2 rounded-full"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger pill */}
          <button
            className={`lg:hidden text-gray-800 p-3 rounded-full ${glass}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-3 rounded-2xl bg-white/80 backdrop-blur-xl border-2 border-gray-400/80 px-6 py-5 flex flex-col gap-4 shadow-xl">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-800 hover:text-navy font-semibold uppercase tracking-wide text-sm" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-yellow-500 text-white font-semibold text-sm rounded-full px-5 py-2.5 text-center transition-colors mt-1">
              Apply on MyMUN
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
