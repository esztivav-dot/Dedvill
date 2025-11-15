import './Kapcsolat.css'
import { FormEvent } from 'react'

export default function Kapcsolat() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // No backend – developer can connect later
    console.log('Kapcsolat űrlap elküldve')
  }

  return (
    <div className="section">
      <div className="container">
        <div className="section-title">Kapcsolat</div>
        <div className="contact-grid">
          <div className="card contact-card">
            <h3>Elérhetőségek</h3>
            <div className="contact-list">
              <p>Telefon: <a href="tel:+36209540800">+36 20 954 0800</a></p>
              <p>E-mail: <a href="mailto:dedvillkft@gmail.com">dedvillkft@gmail.com</a></p>
              <p>Munkavégzés helye: Budapest és környéke</p>
            </div>
            <div className="map-box">
              Térképes előnézet (Google Maps iframe helye)
              {/* Ide illeszthető később a Maps iframe */}
            </div>
          </div>

          <div className="card contact-card">
            <h3>Írj nekünk</h3>
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <label htmlFor="nev">Név</label>
                <input id="nev" name="nev" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required />
              </div>
              <div className="form-row">
                <label htmlFor="uzenet">Üzenet</label>
                <textarea id="uzenet" name="uzenet" required />
              </div>
              <button className="btn-primary" type="submit">Küldés</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
