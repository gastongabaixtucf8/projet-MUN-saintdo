import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — MUN Saint Dominique',
}

const PhoneIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
  </svg>
)

const MapIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const XIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function ContactPage() {
  return (
    <main>

      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <p className="text-white/70 text-lg">
            Get in touch with the MUN Saint Dominique team.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <p className="text-gray-600 text-lg leading-relaxed mb-14 max-w-2xl">
            For any questions about the conference, registration, accommodation, or travel,
            please do not hesitate to reach out to us. Our team will get back to you as soon as possible.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="flex flex-col items-start gap-4 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-navy-mid">
                <PhoneIcon />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl mb-2">Phone</p>
                <a href="tel:+33559320123" className="text-gray-500 hover:text-navy-mid transition-colors text-lg">
                  +33 5 59 32 01 23
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-navy-mid">
                <MapIcon />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl mb-2">Address</p>
                <p className="text-gray-500 leading-relaxed">
                  30 Avenue Fouchet<br />
                  64000 Pau<br />
                  France
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-navy-mid">
                <MailIcon />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xl mb-2">Email</p>
                <a
                  href="mailto:mun@saintdominique.fr"
                  className="text-gray-500 hover:text-navy-mid transition-colors break-all"
                >
                  mun@saintdominique.fr
                </a>
              </div>
            </div>

          </div>

          {/* Social media */}
          <div className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Follow us</p>
            <div className="flex gap-5 items-center">
              <a
                href="https://www.instagram.com/mun_saintdo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-navy-mid transition-colors font-medium"
              >
                <InstagramIcon /> Instagram
              </a>
              <a
                href="https://www.facebook.com/mun.saintdominique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-navy-mid transition-colors font-medium"
              >
                <FacebookIcon /> Facebook
              </a>
              <a
                href="https://x.com/mun_saintdo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-navy-mid transition-colors font-medium"
              >
                <XIcon /> X / Twitter
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Map ── */}
      <section className="py-6 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Institut Saint Dominique, Pau"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.3950%2C43.2990%2C-0.3550%2C43.3290&layer=mapnik&marker=43.3140%2C-0.3748"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

    </main>
  )
}
