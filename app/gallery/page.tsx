import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery — MUN Saint Dominique',
}

const placeholders = Array.from({ length: 15 }, (_, i) => i + 1)

export default function GalleryPage() {
  return (
    <main>

      {/* ── Page Header ── */}
      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-white/70 text-lg">
            Photos from MUN Saint Dominique conferences.
          </p>
        </div>
      </section>

      {/* ── Notice ── */}
      <section className="py-6 px-6 bg-gold/10 border-b border-gold/30 text-center">
        <p className="text-navy font-medium">
          Photos from MUN Saint Dominique 2027 will appear here after the conference (19–21 March 2027). Photos will be provided by Mme Lemoine.
        </p>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-2">MUN Saint Dominique 2027</h2>
          <p className="text-gray-400 text-sm mb-8">Photos coming after March 2027</p>

          {/* Masonry-style placeholder grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3 space-y-3">
            {placeholders.map((i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-100"
                style={{ height: `${160 + (i % 4) * 55}px` }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 gap-2">
                  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                  </svg>
                  <span className="text-xs text-gray-300">Photo {i}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-12 text-sm italic">
            Placeholder grid — real photos coming soon from Mme Lemoine after the conference.
          </p>
        </div>
      </section>

      {/* ── Contribute ── */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-3">Attending MUN 2027?</h2>
          <p className="text-gray-600 mb-6">
            Are you a delegate, teacher, or school representative coming to Pau? We&rsquo;d love to feature photos
            from your experience in our gallery after the event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mun@saintdominique.fr" className="btn-primary">
              Share your photos
            </a>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
