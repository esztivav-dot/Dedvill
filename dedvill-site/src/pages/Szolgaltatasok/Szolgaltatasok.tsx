import "./Szolgaltatasok.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "../../components/Modal"

import lakossagiImg from '../../assets/services/lakossagi.jpg'
import hibaImg from '../../assets/services/hibaelharitas.jpg'
import meroImg from '../../assets/services/merohely.jpg'
import vbfImg from '../../assets/services/vbf.jpg'
import regisztraltImg from '../../assets/services/regisztralt.jpg'
import autotoltoImg from '../../assets/services/autotolto.jpg'

function Item({ children }: { children: string }) {
  return (
    <li>
      <span className="check">✓</span>
      {children}
    </li>
  )
}

type ServiceKey =
  | "lakossagi"
  | "hibaelharitas"
  | "merohely"
  | "vbf"
  | "regisztralt"
  | "autotolto"

const serviceImages = {
  lakossagi: { src: lakossagiImg, alt: 'Lakossági villanyszerelés' },
  hibaelharitas: { src: hibaImg, alt: 'Villanyszerelési hibaelhárítás' },
  merohely: { src: meroImg, alt: 'Mérőhely szabványosítás' },
  vbf: { src: vbfImg, alt: 'VBF felülvizsgálat' },
  regisztralt: { src: regisztraltImg, alt: 'Regisztrált szerelői tevékenység' },
  autotolto: { src: autotoltoImg, alt: 'Elektromos autótöltő telepítés' },
} as const

function ServiceImage({ k }: { k: ServiceKey }) {
  const img = serviceImages[k]
  return (
    <div className="service-img">
      <img loading="lazy" src={img.src} alt={img.alt} />
    </div>
  )
}

export default function Szolgaltatasok() {
  const [modalContent, setModalContent] = useState<null | JSX.Element>(null)
  const [modalTitle, setModalTitle] = useState("")

  const openModal = (title: string, content: JSX.Element) => {
    setModalTitle(title)
    setModalContent(content)
  }

  const closeModal = () => setModalContent(null)

  return (
    <div className="section">
      <div className="container">
        <div className="section-title">Szolgáltatások</div>

        <div className="services-grid">
          {/* 1. Lakossági villanyszerelés */}
          <div className="card service-block">
            <ServiceImage k="lakossagi" />
            <h3>Lakossági villanyszerelés</h3>
            <ul>
              <Item>Új kiállások, lámpa- és kapcsoló-szerelés</Item>
              <Item>Villamos hálózat bővítése, áttervezése</Item>
              <Item>Konnektorok, megszakítók cseréje</Item>
            </ul>

            <button
              className="more-btn"
              onClick={() =>
                openModal(
                  "Lakossági villanyszerelés",
                  <>
                    A lakossági villanyszerelés során célunk, hogy otthonod biztonságos, korszerű és hosszú távon is megbízható legyen.
                    Minden munkát úgy végzünk, hogy az megfeleljen a mai eszközök terhelési igényeinek és a hatályos szabványoknak.
                    <br /><br />

                    <strong>Hogyan zajlik a folyamat?</strong><br />
                    • Helyszíni felméréssel kezdünk, ahol megnézzük a meglévő hálózat állapotát és igényeidet.<br />
                    • Közösen kiválasztjuk a megfelelő megoldásokat (lámpahelyek, kapcsolók, kiállások, áramkörök).<br />
                    • A munkát tisztán, igényesen végezzük, minimalizálva a bontást és kellemetlenséget.<br />
                    • A végén teszteljük a működést, és átadáskor minden funkciót bemutatunk.
                    <br /><br />

                    <strong>Példák, amiben segítünk:</strong><br />
                    • új konyha elektromos előkészítése<br />
                    • nappali áramkörök modernizálása<br />
                    • komplett lakás villamos felújítás<br />
                    • új lámpák, spotok, okoskapcsolók bekötése<br />
                  </>
                )
              }
            >
              Bővebben
            </button>
          </div>

          {/* 2. Hibaelhárítás */}
          <div className="card service-block">
            <ServiceImage k="hibaelharitas" />
            <h3>Hibaelhárítás</h3>
            <ul>
              <Item>Rövidzárlat vagy leoldó megszakító diagnosztika</Item>
              <Item>Hibás kötés, kontakt hiba felderítése</Item>
              <Item>Gyors kiszállás és javítás</Item>
            </ul>

            <button
              className="more-btn"
              onClick={() =>
                openModal(
                  "Hibaelhárítás",
                  <>
                    Meghibásodás esetén kiemelten fontos a gyors diagnózis és a biztonságos helyreállítás.
                    Minden esetben a hiba okát keressük – nem csak a tünetet szüntetjük meg.
                    <br /><br />

                    <strong>Hogyan dolgozunk?</strong><br />
                    • A helyszínen műszerrel bemérjük, hol keletkezett a hiba (kötés, készülék, áramkör, túlterhelés).<br />
                    • Ellenőrizzük a csatlakozókat, vezetékeket, megszakítókat, FI-relét.<br />
                    • Megmutatjuk, pontosan miért történt a hiba, és hogyan előzhető meg a jövőben.<br />
                    • Azonnal javítjuk, amennyiben lehetséges.<br />
                    <br />

                    <strong>Gyakori esetek:</strong><br />
                    • leveri a biztosítékot egy nagy fogyasztó<br />
                    • szikrázó konnektor / kontakthibák<br />
                    • elöregedett kötés miatt ingadozó áram<br />
                    • zárlat és égett szag egy aljzatnál<br />
                  </>
                )
              }
            >
              Bővebben
            </button>
          </div>

          {/* 3. Mérőhely szabványosítás */}
          <div className="card service-block">
            <ServiceImage k="merohely" />
            <h3>Mérőhely szabványosítás</h3>
            <ul>
              <Item>Mérőszekrény csere és szabványosítás</Item>
              <Item>Szolgáltatói egyeztetés és dokumentáció</Item>
              <Item>Áramkörök rendezése és jelölése</Item>
            </ul>

            <button
              className="more-btn"
              onClick={() =>
                openModal(
                  "Mérőhely szabványosítás",
                  <>
                    A mérőhely szabványosítása elengedhetetlen teljesítménybővítésnél, felújításnál vagy akkor, ha a szolgáltató előírja.
                    A cél egy biztonságos, rendezett és szabványos mérőhely kialakítása.
                    <br /><br />

                    <strong>A folyamat lépései:</strong><br />
                    • Felmérjük a meglévő mérőhely állapotát és csatlakozási lehetőségeit.<br />
                    • Megbeszéljük, milyen áramigényre van szükséged (pl. klíma, sütő, autótöltő miatt).<br />
                    • Elkészítjük a teljes dokumentációt és intézzük a szolgáltatói egyeztetést.<br />
                    • Korszerű mérőszekrényt építünk be, átlátható, jelölt áramkörökkel.<br />
                    • A végén a szolgáltató plombázza – ezzel hiteles lesz a mérőhely.
                    <br /><br />

                    <strong>Tipikus esetek:</strong><br />
                    • 1 fázis → 3 fázis teljesítménybővítés<br />
                    • Régi, elavult mérőhely leváltása<br />
                    • Kerti épület, melléképület új mérőhely kialakítása<br />
                  </>
                )
              }
            >
              Bővebben
            </button>
          </div>

          {/* 4. VBF felülvizsgálat */}
          <div className="card service-block">
            <ServiceImage k="vbf" />
            <h3>VBF felülvizsgálat</h3>
            <p>
              Részletek a <Link to="/vbf">VBF</Link> oldalon.
            </p>
            <ul>
              <Item>Eseti és időszakos felülvizsgálat</Item>
              <Item>Jegyzőkönyv és javaslatok</Item>
              <Item>Hibák javítása igény esetén</Item>
            </ul>

            <button
              className="more-btn"
              onClick={() =>
                openModal(
                  "VBF felülvizsgálat",
                  <>
                    A Villamos Biztonsági Felülvizsgálat célja, hogy megállapítsuk: az ingatlan villamos hálózata
                    biztonságosan, szabványosan működik-e, illetve rejt-e kockázatot.
                    <br /><br />

                    <strong>A vizsgálat menete:</strong><br />
                    • Szemrevételezéssel átnézzük a vezetékeket, kötéseket, elosztót.<br />
                    • Műszeres méréseket végzünk (szigetelés, földelés, érintésvédelem).<br />
                    • Ellenőrizzük a FI-relé működését és a védelmi eszközök állapotát.<br />
                    • A szabványtól való eltéréseket dokumentáljuk.<br />
                    <br />

                    <strong>Mit kapsz a végén?</strong><br />
                    • hivatalos jegyzőkönyvet<br />
                    • tételes hibajegyzéket<br />
                    • javítási javaslatokat<br />
                    <br />

                    <strong>Mikor szükséges?</strong><br />
                    • ingatlan eladás / vásárlás<br />
                    • felújítás előtt<br />
                    • bérbeadásnál<br />
                  </>
                )
              }
            >
              Bővebben
            </button>
          </div>

          {/* 5. Regisztrált szerelői tevékenység */}
          <div className="card service-block">
            <ServiceImage k="regisztralt" />
            <h3>Regisztrált szerelői tevékenység</h3>
            <ul>
              <Item>Új mérőhely létesítése</Item>
              <Item>Teljesítménybővítés ügyintézés</Item>
              <Item>Mérőhely áthelyezés, átalakítás</Item>
              <Item>Szolgáltatói ügyintézés</Item>
            </ul>

            <button
              className="more-btn"
              onClick={() =>
                openModal(
                  "Regisztrált szerelői tevékenység",
                  <>
                    A regisztrált szerelői tevékenység során olyan munkákat végzünk, amelyeket a szolgáltató csak
                    hivatalosan regisztrált szakembertől fogad el. Ilyen például a mérőhely kialakítása,
                    teljesítménybővítés vagy áthelyezés.
                    <br /><br />

                    <strong>Hogyan zajlik?</strong><br />
                    • Helyszíni felmérés és konzultáció az igényedről.<br />
                    • Igénybejelentés és szolgáltatói ügyintézés átvállalása.<br />
                    • Kivitelezés szabványos mérőszekrénnyel és jelölt áramkörökkel.<br />
                    • A szolgáltató értesítése és plombázás megszervezése.<br />
                    <br />

                    <strong>Tipikus esetek:</strong><br />
                    • teljesítménybővítés elektromos autótöltő miatt<br />
                    • mérőhely átépítés felújításkor<br />
                  </>
                )
              }
            >
              Bővebben
            </button>
          </div>

          {/* 6. Elektromos autótöltő telepítés */}
          <div className="card service-block">
            <ServiceImage k="autotolto" />
            <h3>Elektromos autótöltő telepítés</h3>
            <ul>
              <Item>Töltőtípus kiválasztása</Item>
              <Item>Hálózat felmérése</Item>
              <Item>Otthoni és üzleti telepítés</Item>
              <Item>Beüzemelés és betanítás</Item>
            </ul>

            <button
              className="more-btn"
              onClick={() =>
                openModal(
                  "Elektromos autótöltő telepítés",
                  <>
                    A biztonságos és gyors otthoni elektromos autó töltéshez elengedhetetlen a szakszerű telepítés.
                    Felmérjük a hálózat állapotát, kiválasztjuk a megfelelő töltőt és garanciával telepítjük.
                    <br /><br />

                    <strong>A telepítés folyamata:</strong><br />
                    • Hálózati terhelhetőség felmérése (bírja-e a töltőt).<br />
                    • Megfelelő töltő kiválasztása (fázis, teljesítmény, típus).<br />
                    • Kiállás kialakítása és biztonsági eszközök beépítése.<br />
                    • Töltő rögzítése, bekötése és beüzemelése.<br />
                    • Rövid oktatás a használatról.
                    <br /><br />

                    <strong>Példa:</strong><br />
                    • 22 kW-os fali töltő felszerelése családi házban<br />
                  </>
                )
              }
            >
              Bővebben
            </button>
          </div>
        </div>
      </div>

      {modalContent && (
        <Modal title={modalTitle} onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  )
}
