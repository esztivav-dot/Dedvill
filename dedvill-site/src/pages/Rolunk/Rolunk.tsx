import './Rolunk.css'

export default function Rolunk() {
  return (
    <div className="section">
      <div className="container about decor">
        <div className="section-title">Rólunk</div>
        <p>
          A DedVill KFT tapasztalt villanyszerelő cég, amely lakossági és kisebb
          ipari munkákat vállal Budapesten és környékén. Célunk, hogy biztonságos
          és hosszú távon megbízható megoldásokat adjunk ügyfeleinknek.
        </p>
        <p>
          Munkánkat precizitás, tiszta munkakörnyezet és pontos határidők jellemzik.
          Hiszünk abban, hogy a jól megtervezett és szakszerűen kivitelezett
          villamos hálózat kényelmet és biztonságot nyújt.
        </p>
        <p>
          Szolgáltatásaink között megtalálhatók az egyszerű szerelésektől a
          komplexebb bővítéseken át a villamos biztonsági felülvizsgálatig (VBF).
        </p>

        <div className="pillars grid-auto-fit">
          {['Megbízhatóság', 'Tapasztalat', 'Precizitás'].map((t) => (
            <div className="card pillar" key={t}>
              <div className="pillar-title">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
