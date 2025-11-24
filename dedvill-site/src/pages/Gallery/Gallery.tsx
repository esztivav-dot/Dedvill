import React, { useEffect, useState } from 'react'
import './Gallery.css'

const MAX_FALLBACK = 200
type ManifestData = string[]

export default function Gallery() {
  const [files, setFiles] = useState<string[]>([])
  const [useFallback, setUseFallback] = useState(true)

  const [currentIndex, setCurrentIndex] = useState<number | null>(null)  // <-- ÚJ

  const base = (import.meta as any).env?.BASE_URL ?? '/'

  // ESC bezárás
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCurrentIndex(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  })

  useEffect(() => {
    fetch(`${base}gallery/manifest.json`, { cache: 'no-store' })
      .then(r => {
        if (!r.ok) throw new Error('No manifest')
        return r.json() as Promise<ManifestData>
      })
      .then(list => {
        const filtered = list.filter(name => /\.(jpe?g|png|webp|gif)$/i.test(name))
        setFiles(filtered)
        setUseFallback(false)
      })
      .catch(() => {
        const seq = Array.from({ length: MAX_FALLBACK }, (_, i) => `${i + 1}.jpg`)
        setFiles(seq)
        setUseFallback(true)
      })
  }, [])

  const next = () => {
    if (currentIndex === null) return
    setCurrentIndex((currentIndex + 1) % files.length)
  }

  const prev = () => {
    if (currentIndex === null) return
    setCurrentIndex((currentIndex - 1 + files.length) % files.length)
  }

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Galéria</h1>

      <div className="gallery-grid" aria-label="Képgaléria">
        {files.map((name, index) => (
          <div key={name} className="gallery-item">
            <img
              src={`${base}gallery/${name}`}
              alt={`Galéria kép ${name}`}
              loading="lazy"
              className="gallery-image"
              onClick={() => setCurrentIndex(index)}     // <-- NAGYÍTÁS
              onError={(e) => {
                const item = e.currentTarget.closest('.gallery-item') as HTMLElement | null
                if (item) item.style.display = 'none'
              }}
            />
          </div>
        ))}
      </div>

      {useFallback && (
        <p className="gallery-hint">
          Használhatsz <code>public/gallery/manifest.json</code> fájlt egyedi fájlnevekkel.
        </p>
      )}

      {/* LIGHTBOX MODAL LAPOZÁSSAL */}
      {currentIndex !== null && (
        <div className="lightbox" onClick={() => setCurrentIndex(null)}>
          
          {/* VISSZA */}
          <button
            className="lightbox-nav left"
            onClick={(e) => { 
              e.stopPropagation(); 
              prev(); 
            }}
          >
            ❮
          </button>

          {/* KÉP */}
          <img
            src={`${base}gallery/${files[currentIndex]}`}
            className="lightbox-img"
            alt="Előnézet"
            onClick={(e) => e.stopPropagation()}
          />

          {/* ELŐRE */}
          <button
            className="lightbox-nav right"
            onClick={(e) => { 
              e.stopPropagation(); 
              next(); 
            }}
          >
            ❯
          </button>

        </div>
      )}
    </div>
  )
}
