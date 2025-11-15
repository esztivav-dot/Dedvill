import './Home.css'
import dedvillLogo from "../../assets/dedvill_transparent.png";


// Simple SVG icon as string
const boltIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" />
  </svg>
)

export default function Home() {
  const pricing: { name: string; price: string }[] = [
    { name: 'Kismegszakító csere', price: '5 000 Ft-tól' },
    { name: 'Konnektor / kapcsoló csere', price: '4 500 Ft-tól' },
    { name: 'Hibaelhárítás kiszállással', price: '15 000 Ft-tól' },
    { name: 'Mérőhely szabványosítás', price: 'Árajánlat alapján' },
    { name: 'VBF felülvizsgálat', price: 'Árajánlat alapján' }
  ]

  return (
    <div>
      <section className="section hero">
        <div className="container hero-inner">
          <div className="hero-card">
            <h1 className="hero-title">Villanyszerelés A–Z-ig</h1>
            <p className="hero-sub">
              DedVill KFT: lakossági villanyszerelés, gyors hibaelhárítás és
              villamos biztonsági felülvizsgálat (VBF). Megbízható szakértelem,
              precíz kivitelezés és pontos határidők Szigetszentmiklóson és környékén.
            </p>
            <a className="btn-primary" href="tel:+36209540800">Hívás: +36 20 954 0800</a>
          </div>
          <div className="hero-right">
           <div className="hero-logo">
  <img src={dedvillLogo} alt="DedVill logó" className="hero-logo-img" />
</div>

          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <div className="section-title">Szolgáltatásaink</div>
          <div className="grid-auto-fit">
            {[
              { title: 'Lakossági villanyszerelés', desc: 'Új kiállások, lámpa- és kapcsoló-szerelés, bővítések.' },
              { title: 'Hibaelhárítás', desc: 'Gyors beavatkozás rövid határidővel, biztonságos megoldások.' },
              { title: 'VBF felülvizsgálat', desc: 'Villamos hálózatok időszakos és eseti ellenőrzése.' },
              { title: 'Mérőhely szabványosítás', desc: 'Szükséges átalakítások és dokumentációk intézése.' }
            ].map((s) => (
              <div className="card service-card" key={s.title}>
                <div style={{ color: 'var(--color-primary-dark)' }}>{boltIcon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing">
        <div className="container">
          <div className="section-title">Árlista – tájékoztató jellegű</div>
          <div className="pricing-list">
            {pricing.map((p) => (
              <div className="pricing-row" key={p.name}>
                <div className="pricing-name">{p.name}</div>
                <div className="pricing-price">{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  )
}
