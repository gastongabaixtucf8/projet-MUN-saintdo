import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/pau', label: 'Pau & Travel' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-2">MUN Saint Dominique</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Model United Nations conference hosted by Institut Saint Dominique, Pau, France.
              In partnership with Alleyn&rsquo;s School, London.
            </p>
            <p className="text-gold font-semibold text-sm mt-4">19 – 21 March 2027</p>
          </div>

          {/* Pages */}
          <div>
            <p className="font-semibold uppercase tracking-wide text-sm mb-4 text-white/60">Navigation</p>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/75 hover:text-gold transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold uppercase tracking-wide text-sm mb-4 text-white/60">Contact</p>
            <div className="space-y-2 text-sm text-white/75">
              <p>Institut Saint Dominique</p>
              <p>30 Avenue Fouchet</p>
              <p>64000 Pau, France</p>
              <a href="tel:+33559320123" className="block hover:text-gold transition-colors mt-3">
                +33 5 59 32 01 23
              </a>
              <a href="mailto:mun@saintdominique.fr" className="block hover:text-gold transition-colors">
                mun@saintdominique.fr
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} MUN Saint Dominique · Institut Saint Dominique, Pau</p>
          <a
            href="https://mymun.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Register on MyMUN →
          </a>
        </div>
      </div>
    </footer>
  )
}
