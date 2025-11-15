import './VBF.css'

// Placeholder for VBF Sziget logo (replace with real import when available)
// import vbfLogo from '../../assets/vbf-sziget-logo.png'

export default function VBF() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title">Villamos Biztonsági Felülvizsgálat (VBF)</div>
        <div className="vbf-logo" aria-hidden="true"></div>
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
