import React, { useEffect, useState } from 'react'
import './Gallery.css'
import { createClient } from '@supabase/supabase-js'

// --- Supabase inicializálás ---
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
)


const BUCKET = "Images"

const MAX_FALLBACK = 200
type ManifestData = string[]

export default function Gallery() {
  const [files, setFiles] = useState<string[]>([])
  const [useFallback, setUseFallback] = useState(true)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  // ESC / nyilak
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCurrentIndex(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  })

  // --- Supabase képek betöltése ---
  useEffect(() => {
    async function loadFromSupabase() {
      const { data, error } = await supabase
        .storage
        .from(BUCKET)
        .list("", { limit: 200 })

      if (error || !data) {
        console.error("Supabase list error:", error)
        const seq = Array.from({ length: MAX_FALLBACK }, (_, i) => `${i + 1}.jpg`)
        setFiles(seq)
        setUseFallback(true)
        return
      }

      const imageFiles = data
        .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file.name))
        .map(f => f.name)

      setFiles(imageFiles)
      setUseFallback(false)
    }

    loadFromSupabase()
  }, [])


  // --- URL generálás Supabase-ből ---
  const getUrl = (name: string) =>
    supabase.storage.from(BUCKET).getPublicUrl(name).data.publicUrl


  // --- Lapozás lightboxban ---
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
              src={getUrl(name)}
              alt={`Galéria kép ${name}`}
              loading="lazy"
              className="gallery-image"
              onClick={() => setCurrentIndex(index)}
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
          A manifest.json helyett mostantól Supabase Storage-t használunk. 🎉
        </p>
      )}

      {/* LIGHTBOX MODAL */}
      {currentIndex !== null && (
        <div className="lightbox" onClick={() => setCurrentIndex(null)}>

          {/* VISSZA */}
          <button
            className="lightbox-nav left"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
          >
            ❮
          </button>

          {/* KÉP */}
          <img
            src={getUrl(files[currentIndex])}
            className="lightbox-img"
            alt="Előnézet"
            onClick={(e) => e.stopPropagation()}
          />

          {/* ELŐRE */}
          <button
            className="lightbox-nav right"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
          >
            ❯
          </button>

        </div>
      )}
    </div>
  )
}
