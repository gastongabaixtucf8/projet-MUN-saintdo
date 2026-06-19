'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

type Photo = { _id: string; url: string; caption?: string }

export default function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
    [photos.length],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, prev, next])

  const active = index === null ? null : photos[index]

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {photos.map((photo, i) => (
          <button
            key={photo._id}
            onClick={() => setIndex(i)}
            className="block w-full break-inside-avoid rounded-xl overflow-hidden shadow-sm cursor-zoom-in group"
            aria-label="Enlarge photo"
          >
            <Image
              src={photo.url}
              alt={photo.caption || 'MUN Saint Dominique'}
              width={600}
              height={400}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button onClick={close} aria-label="Close" className="absolute top-4 right-4 text-white/80 hover:text-white p-2">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 text-white/70 hover:text-white p-2"
            >
              <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <figure className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-[80vh]">
              <Image
                src={active.url}
                alt={active.caption || 'MUN Saint Dominique'}
                fill
                sizes="100vw"
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            {active.caption && (
              <figcaption className="text-white/80 text-sm mt-4 text-center">{active.caption}</figcaption>
            )}
          </figure>

          {photos.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 text-white/70 hover:text-white p-2"
            >
              <svg width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}
