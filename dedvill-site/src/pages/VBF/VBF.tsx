import './VBF.css'
// If you add the real file at src/assets/vbf-sziget-logo.png,
// you can import it like below and remove the inline SVG fallback.
// import vbfLogo from '../../assets/vbf-sziget-logo.png'

// Inline SVG fallback to avoid build errors when the asset file is missing
const vbfLogo =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#39a6ff"/>
          <stop offset="1" stop-color="#0984d8"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="80" fill="url(#g)"/>
      <g fill="#fff">
        <path d="M92 24 52 86h24l-8 50 40-62H84l8-50z"/>
      </g>
    </svg>`
  )

export default function VBF() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title">Villamos Biztonsági Felülvizsgálat (VBF)</div>
        <div className="vbf-logo">
          <img src={vbfLogo} alt="VBF Sziget logó" width={120} height={120} />
        </div>
        <p>
          A villamos biztonsági felülvizsgálat célja, hogy a létesítmény villamos
          hálózata megfelel-e a hatályos előírásoknak, és biztonságosan üzemeltethető-e.
          A vizsgálat során műszeres mérések és szemrevételezés is történik.
        </p>

        <div className="vbf-grid">
          <div className="card vbf-block">
            <h3>Mikor kötelező a VBF?</h3>
            <ul>
              <li>Új ingatlanok átadásakor</li>
              <li>Bérbeadás előtt</li>
              <li>Időszakos felülvizsgálatként meghatározott időközönként</li>
              <li>Átalakítás vagy bővítés után</li>
            </ul>
          </div>

          <div className="card vbf-block">
            <h3>Gyakori hibák</h3>
            <ul>
              <li>Hiányzó vagy hibás érintésvédelem</li>
              <li>Nem megfelelő keresztmetszetű vezetékek</li>
              <li>Elöregedett vagy sérült szerelvények</li>
              <li>Szabálytalan kötési pontok</li>
            </ul>
          </div>

          <div className="card vbf-block">
            <h3>Árak (tájékoztató)</h3>
            <ul>
              <li>Lakás: 30 000 Ft-tól</li>
              <li>Családi ház: 45 000 Ft-tól</li>
              <li>Üzlethelyiség: 50 000 Ft-tól</li>
              <li>Egyedi árajánlat nagyobb létesítményekre</li>
            </ul>
          </div>
        </div>

        <div style={{ height: 16 }} />
        <div className="vbf-cta">
          <p>Időpontot szeretnél egyeztetni? Hívj bizalommal!</p>
          <a className="btn-primary" href="tel:+36209540800">Hívás: +36 20 954 0800</a>
        </div>
      </div>
    </div>
  )
}
