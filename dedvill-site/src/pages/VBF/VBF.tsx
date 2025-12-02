import './VBF.css'
import vbflogo from '../../assets/vbf_logo.png'

export default function VBF() {

  const scrollToDetails = () => {
    const details = document.getElementById("reszletes");
    if (details) {
      details.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <br /><br />
          Szeretnél bővebb információt?  
          👉 <span className="details-link" onClick={scrollToDetails}>Részletes tájékoztató itt</span>
          <br /><br />
          A VBF különösen lényeges, mert számos olyan hiba is fennállhat a vezetékekben,
          kötési pontokban vagy a védelmi rendszerben, amely szabad szemmel nem látható,
          mégis tűz- vagy áramütésveszélyt okozhat.
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

        {/* --- Eltartás a kártyák és a részletes rész között --- */}
        <div className="vbf-space" />

        {/* --- RÉSZLETES TÁJÉKOZTATÓ BLOKK --- */}
        <div className="card vbf-block" id="reszletes">
          <h3>Villamos Biztonsági Felülvizsgálat – Részletes tájékoztató</h3>

          <p>
            A villamos biztonsági felülvizsgálat egy olyan kötelező ellenőrzési folyamat,
            amely biztosítja az elektromos hálózatok és berendezések biztonságos működését.
            Segít feltárni minden olyan hibát és hiányosságot, amely baleset- vagy tűzveszélyt
            jelenthet.
          </p>

          <h4>A felülvizsgálat célja:</h4>
          <ul>
            <li>A személyi és vagyonbiztonság megőrzése.</li>
            <li>Az érintésvédelmi és tűzvédelmi követelmények felügyelete.</li>
            <li>Az áramütéses és villamos eredetű balesetek megelőzése.</li>
            <li>A jogszabályi és szabványi megfelelőség biztosítása.</li>
          </ul>

          <h4>Mikor szükséges a felülvizsgálat?</h4>

          <p><strong>a) Időszakos ellenőrzés (40/2017 (XII.4.) NGM rendelet)</strong></p>

          <ul>
            <li>
              Lakóépületekben általában 
              <span className="big-number">6</span> évente.
            </li>
            <li>
              Munkahelyeken (ipari és kereskedelmi létesítmények) 
              <span className="big-number">3</span> évente, illetve fokozott igénybevételnél gyakrabban.
            </li>
          </ul>

          <p><strong>b) Használatbavétel előtt:</strong> új vagy teljes körűen felújított villamos hálózat esetén.</p>

          <p><strong>c) Rendkívüli esemény után:</strong> villámcsapás, tűzeset vagy más károsodást követően.</p>

          <p><strong>d) Ingatlan adásvételekor:</strong> a felek számára fontos az aktuális állapot ismerete.</p>

          <h4>A felülvizsgálat folyamata</h4>

          <p><strong>a) Szemrevételezés</strong></p>
          <ul>
            <li>Látható sérülések, hibák feltárása.</li>
            <li>Vezetékek, kötési pontok állapotának ellenőrzése.</li>
            <li>A védőföldelés meglétének és állapotának vizsgálata.</li>
          </ul>

          <p><strong>b) Műszeres mérések</strong></p>
          <ul>
            <li>Szigetelési ellenállás mérés.</li>
            <li>Védővezetők folytonosságának vizsgálata.</li>
            <li>Érintésvédelmi mérések (pl. FI-relé tesztelése).</li>
            <li>Földelési ellenállás mérése.</li>
          </ul>

          <p><strong>c) Terhelésvizsgálat, megszakítók ellenőrzése</strong></p>
          <ul>
            <li>Biztosítékok és megszakítók működésének tesztelése.</li>
            <li>A hálózat terhelhetőségének vizsgálata.</li>
            <li>Rövidzárlati és túlmelegedési veszélyek feltárása.</li>
          </ul>

          <h4>A vizsgálat eredménye</h4>

          <p>
            A felülvizsgálatot követően hivatalos jegyzőkönyv készül, amely tartalmazza a
            méréseket, a feltárt hibákat, javaslatokat és a rendszer minősítését. Ha a
            hálózat nem felel meg, a javítások elvégzése kötelező.
          </p>

          <h4>Következtetés</h4>
          <p>
            A villamos biztonsági felülvizsgálat kulcsfontosságú a balesetek megelőzésében és
            a szabványos, biztonságos működés fenntartásában. A rendszeres ellenőrzés
            elengedhetetlen a biztonságos ingatlanhasználathoz.
          </p>
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
