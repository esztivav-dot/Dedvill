import './Szolgaltatasok.css'
import { Link } from 'react-router-dom'

function Item({ children }: { children: string }) {
  return <li><span className="check">✓</span>{children}</li>
}

export default function Szolgaltatasok() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title">Szolgáltatások</div>
        <div className="grid-auto-fit services-grid">
          <div className="card service-block">
            <h3>Lakossági villanyszerelés</h3>
            <ul>
              <Item>Új kiállások, lámpa- és kapcsoló-szerelés</Item>
              <Item>Villamos hálózat bővítése, áttervezése</Item>
              <Item>Konnektorok, megszakítók cseréje</Item>
            </ul>
          </div>
          <div className="card service-block">
            <h3>Hibaelhárítás</h3>
            <ul>
              <Item>Rövidzárlat, leoldó megszakító diagnosztika</Item>
              <Item>Hibás kötés, kontakt hiba felderítése</Item>
              <Item>Gyors kiszállás és javítás</Item>
            </ul>
          </div>
          <div className="card service-block">
            <h3>Mérőhely szabványosítás</h3>
            <ul>
              <Item>Mérőszekrény csere és szabványosítás</Item>
              <Item>Szolgáltatói egyeztetés és dokumentáció</Item>
              <Item>Áramkörök rendezése és jelölése</Item>
            </ul>
          </div>
          <div className="card service-block">
            <h3>VBF felülvizsgálat</h3>
            <p>
              Villamos Biztonsági Felülvizsgálat – részletek a <Link to="/vbf">VBF</Link> oldalon.
            </p>
            <ul>
              <Item>Eseti és időszakos felülvizsgálat</Item>
              <Item>Jegyzőkönyv és javaslatok</Item>
              <Item>Hibák javítása igény esetén</Item>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
