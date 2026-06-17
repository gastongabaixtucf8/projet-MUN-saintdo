'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/mun2027', label: 'MUN 2027' },
  { href: '/pau', label: 'Pau & Travel' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const glass = 'bg-navy-dark/30 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-lg shadow-black/20'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="px-6 lg:px-10 py-4 flex items-center justify-between gap-4">

        {/* Logo + name pill — fades out on scroll */}
        <Link
          href="/"
          className={`flex items-center gap-3 rounded-full pl-2 pr-5 py-2 transition-all duration-300 ${glass} ${
            scrolled ? 'opacity-0 -translate-x-1 pointer-events-none' : 'opacity-100'
          }`}
        >
          <Image
            src="/images/logo MUN.webp"
            alt="MUN Saint Dominique"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-white font-bold text-sm">MUN Saint Dominique</p>
            <p className="text-gold text-[11px]">Institut Saint Dominique · Pau</p>
          </div>
        </Link>

        {/* Navigation pill — keeps its vertical position; only the side pills move */}
        <nav className={`hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 ${glass}`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/85 hover:text-white hover:bg-white/10 transition-colors font-medium text-sm px-4 py-1.5 rounded-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Socials + Apply pill — fades out on scroll */}
        <div
          className={`hidden lg:flex items-center gap-4 rounded-full px-5 py-2.5 transition-all duration-300 ${glass} ${
            scrolled ? 'opacity-0 translate-x-1 pointer-events-none' : 'opacity-100'
          }`}
        >
          <a href="https://www.instagram.com/mun_saintdo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-gold transition-colors">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/mun.saintdominique" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-gold transition-colors">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://x.com/mun_saintdo" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-white/60 hover:text-gold transition-colors">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <span className="w-px h-4 bg-white/15" />
          <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-semibold hover:underline whitespace-nowrap">
            Apply on MyMUN →
          </a>
        </div>

        {/* Mobile hamburger pill */}
        <button
          className={`lg:hidden text-white p-3 rounded-full ${glass}`}
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
        <div className="lg:hidden mx-6 mb-4 rounded-2xl bg-navy-dark/80 backdrop-blur-xl border border-white/10 px-6 py-5 flex flex-col gap-4 shadow-xl">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-white hover:text-gold font-medium" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a href="https://mymun.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-center mt-2">
            Register on MyMUN
          </a>
          <div className="flex gap-5 pt-3 border-t border-white/10">
            <a href="https://www.instagram.com/mun_saintdo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-gold">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/mun.saintdominique" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-gold">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/mun_saintdo" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/70 hover:text-gold">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
