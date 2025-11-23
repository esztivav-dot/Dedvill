import React, { useEffect, useState } from 'react'
import './Gallery.css'

// Fallback maximum próbálkozás számozott fájlokra (1.jpg ... 200.jpg)
const MAX_FALLBACK = 200

type ManifestData = string[]

export default function Gallery() {
  const [files, setFiles] = useState<string[]>([])
  const [useFallback, setUseFallback] = useState(true)

  useEffect(() => {
    // Próbáljuk beolvasni a public/gallery/manifest.json fájlt (opcionális).
    fetch('gallery/manifest.json', { cache: 'no-store' })
      .then(r => {
        if (!r.ok) throw new Error('No manifest')
        return r.json() as Promise<ManifestData>
      })
      .then(list => {
        // Szűrés biztonságosan: csak kép kiterjesztések
        const filtered = list.filter(name => /\.(jpe?g|png|webp|gif)$/i.test(name))
        setFiles(filtered)
        setUseFallback(false)
      })
      .catch(() => {
        // Ha nincs manifest, fallback: számozott lista
        const seq = Array.from({ length: MAX_FALLBACK }, (_, i) => `${i + 1}.jpg`)
        setFiles(seq)
        setUseFallback(true)
      })
  }, [])

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Galéria</h1>
      <div className="gallery-grid" aria-label="Képgaléria">
        {files.map(name => (
          <div key={name} className="gallery-item">
            <img
              src={`gallery/${name}`}
              alt={`Galéria kép ${name}`}
              loading="lazy"
              className="gallery-image"
              onError={(e) => {
                // Ha fallback módban vagyunk és a fájl nem létezik: rejtsük el.
                if (useFallback) {
                  const item = e.currentTarget.closest('.gallery-item') as HTMLElement | null
                  if (item) item.style.display = 'none'
                } else {
                  // Manifest módban inkább halványítsuk el / jelezzük hibát (itt csak elrejtés).
                  const item = e.currentTarget.closest('.gallery-item') as HTMLElement | null
                  if (item) item.style.display = 'none'
                }
              }}
            />
          </div>
        ))}
      </div>
      {useFallback && (
        <p className="gallery-hint">Használhatsz <code>public/gallery/manifest.json</code> fájlt egyedi fájlnevekkel.</p>
      )}
    </div>
  )
}
