import './VBF.css' 
import vbflogo from '../../assets/vbf_logo.png'
// If you add the real file at src/assets/vbf-sziget-logo.png,
// you can import it like below and remove the inline SVG fallback.
// import vbfLogo from '../../assets/vbf-sziget-logo.png'

// Inline SVG fallback to avoid build errors when the asset file is missing

export default function VBF() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title">Villamos Biztonsági Felülvizsgálat (VBF)</div>
        <div className="vbf-logo">
          <img src={vbflogo} alt="VBF Sziget logó" width={260} height={260} />
        </div>

        <p>
          A <strong>Villamos Biztonsági Felülvizsgálat (VBF)</strong> az egyik legfontosabb
          biztonságtechnikai ellenőrzés egy ingatlan életében. A felülvizsgálat célja annak
          részletes megállapítása, hogy a villamos hálózat állapota megfelel-e a jelenlegi
          szabványoknak, és nem jelent-e rejtett kockázatot a használókra nézve.
          A VBF különösen lényeges, mert számos olyan hiba is fennállhat a vezetékekben,
          kötési pontokban vagy a védelmi rendszerben, amely szabad szemmel nem látható,
          mégis tűz- vagy áramütésveszélyt okozhat.
          <br /><br />
          A felülvizsgálat a teljes villamos rendszer átfogó értékelését adja, beleértve a 
          védelmi berendezések működésének ellenőrzését, a hálózat terhelhetőségét,
          a rendszer dokumentáltságát, valamint a szabványoktól való eltérések feltárását.
          A VBF hivatalos jegyzőkönyvvel zárul, amely jogilag is igazolja az ingatlan
          villamos hálózatának állapotát – ez különösen fontos ingatlan eladásnál vagy
          bérbeadásnál, ahol a felelősség egyértelmű dokumentálása elengedhetetlen.
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
