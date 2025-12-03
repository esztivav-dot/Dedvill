import './Rolunk.css'

export default function Rolunk() {
  return (
    <div className="section">
      <div className="container about decor">
        <div className="section-title">Rólunk</div>

        <p>
          A DedVill KFT egy elkötelezett, ügyfélközpontú villanyszerelő vállalkozás,
          amely Budapesten és a környező településeken nyújt megbízható, modern és
          biztonságos villamossági szolgáltatásokat. Célunk, hogy valódi értéket adjunk:
          olyan megoldásokat, amelyek hosszú távon stabilak, szabványosak és gondtalan
          használatot biztosítanak.
        </p>

        <p>
          Munkánk alapja a precizitás, a szakmai igényesség és a tiszta, rendezett
          kivitelezés. Hiszünk abban, hogy egy jól megtervezett, korszerű villamos
          hálózat nemcsak kényelmes, hanem biztonságos is — legyen szó otthoni
          átalakításról, hibajavításról, mérőhely szabványosításról vagy elektromos
          autótöltő telepítéséről.
        </p>

        <p>
          Ügyfeleink gyakran keresnek meg minket felújítások előtt, ingatlan
          vásárlásakor vagy a meglévő rendszer korszerűsítése miatt. Ilyenkor nemcsak
          a kivitelezést végezzük el, hanem szakmai tanácsot is adunk, hogy a lehető
          legjobb döntés szülessen — akár teljesítménybővítésről, akár bővítések
          tervezéséről van szó.
        </p>

        <p>
          A DedVill KFT nem nagyvállalati szemlélettel dolgozik: közvetlen,
          gyors kommunikációra és pontos, átlátható munkavégzésre törekszünk.
          Minden projektet ugyanazzal a gondossággal kezelünk, legyen az egyetlen
          konnektor javítása vagy egy teljes hálózat korszerűsítése.
        </p>

        <div className="section-subtitle" style={{ marginTop: 40 }}>
          Milyen értékeket képviselünk?
        </div>

        <div className="pillars grid-auto-fit">
          {['Megbízhatóság', 'Tapasztalat', 'Precizitás', 'Tiszta munkavégzés', 'Ügyfélközpontúság'].map((t) => (
            <div className="card pillar" key={t}>
              <div className="pillar-title">{t}</div>
            </div>
          ))}
        </div>

        <div className="section-subtitle" style={{ marginTop: 50 }}>
          Mely településeken dolgozunk?
        </div>

        <p>Csepel sziget , Főleg Szigetszentmiklós és környéke. </br>
           
          Alább megtalálhatók azok a környékek, ahol rendszeresen dolgozunk:
        </p>

        <div className="service-areas grid-auto-fit">
          <div className="card area-card">
            <h4>Közvetlen környék (nyugat)</h4>
            <ul>
              <li>Budaörs</li>
              <li>Törökbálint</li>
              <li>Diósd</li>
              <li>Érd</li>
              <li>Tárnok</li>
              <li>Sóskút</li>
              <li>Tököl</li>
              <li>Halásztelek</li>
              <li>Szigetszentmiklós</li>
              <li>Szigethalom</li>
            </ul>
          </div>

          <div className="card area-card">
            <h4>Déli szektor</h4>
            <ul>
              <li>Dunaharaszti</li>
              <li>Taksony</li>
              <li>Dunavarsány</li>
              <li>Délegyháza</li>
              <li>Majosháza</li>
              <li>Gyál</li>
              <li>Alsónémedi</li>
              <li>Ócsa</li>
              <li>Dabas</li>
            </ul>
          </div>

          <div className="card area-card">
            <h4>Keleti agglomeráció</h4>
            <ul>
              <li>Vecsés</li>
              <li>Üllő</li>
              <li>Ecser</li>
              <li>Maglód</li>
              <li>Pécel</li>
              <li>Kistarcsa</li>
              <li>Nagytarcsa</li>
            </ul>
          </div>
        </div>

      
      </div>
    </div>
  )
}
