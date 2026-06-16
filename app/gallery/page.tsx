import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — MUN Saint Dominique',
}

const placeholders = Array.from({ length: 12 }, (_, i) => i + 1)

export default function GalleryPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-navy text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-white/75 text-lg">
            Photos from past MUN Saint Dominique conferences.
          </p>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-8 px-6 bg-gold/10 border-b border-gold/20 text-center">
        <p className="text-navy font-medium">
          Photos from the 2027 conference will appear here after the event. Stay tuned!
        </p>
      </section>

      {/* Placeholder Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {placeholders.map((i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-xl overflow-hidden bg-gray-200 animate-pulse"
                style={{ height: `${160 + (i % 3) * 60}px` }}
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-12 text-sm italic">
            Placeholder images — photos coming soon from Mme Lemoine.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-3">Have photos to share?</h2>
          <p className="text-gray-600 mb-6">
            If you attended a past MUN Saint Dominique conference and would like to contribute photos, please get in touch.
          </p>
          <a href="mailto:mun@saintdominique.fr" className="btn-primary">
            Send us your photos
          </a>
        </div>
      </section>
    </main>
  )
}
