import type { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = { title: 'Gallery' }

type Photo = { _id: string; url: string; caption?: string }

async function getPhotos(): Promise<Photo[]> {
  return client.fetch(
    `*[_type == "galleryPhoto"] | order(_createdAt desc) {
      _id,
      caption,
      "url": image.asset->url
    }`,
    {},
    { cache: 'no-store' },
  )
}

export default async function GalleryPage() {
  const photos = await getPhotos()

  return (
    <main>

      <section className="page-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-white/65 text-lg">Photos from MUN Saint Dominique conferences.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">

          {photos.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" fill="none" stroke="#9ca3af" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">Photos coming soon</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Photos from MUN Saint Dominique conferences will be published here by the conference team.
                Check back after March 2027.
              </p>
            </div>
          ) : (
            <GalleryGrid photos={photos} />
          )}

        </div>
      </section>

    </main>
  )
}
