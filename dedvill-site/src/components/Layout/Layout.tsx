import { NavLink } from 'react-router-dom'
import './Layout.css'
import React from 'react'

// Placeholder data URL logo (replace with real import when available)
// import logoUrl from '../../assets/dedvill-logo-blue.png'
const logoUrl =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#39a6ff"/>
          <stop offset="1" stop-color="#0984d8"/>
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="64" fill="url(#g)"/>
      <path d="M73 18 38 72h23l-6 38 33-54H65l8-38z" fill="#fff"/>
    </svg>`
  )

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear()
  return (
    <div className="site">
      <header className="site-header">
        <div className="container site-header-inner">
          <div className="site-brand">
            <div className="site-logo">
              <img src={logoUrl} alt="DedVill logó" width={28} height={28} />
            </div>
            <div className="site-brand-text">
              <div className="site-brand-title">DedVill KFT</div>
              <div className="site-brand-sub">Villanyszerelés &amp; VBF felülvizsgálat</div>
            </div>
          </div>
          <nav className="site-nav" aria-label="Fő navigáció">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Főoldal</NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/rolunk">Rólunk</NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/szolgaltatasok">Szolgáltatások</NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/vbf">VBF</NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/kapcsolat">Kapcsolat</NavLink>
          </nav>
        </div>
      </header>

      <main className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <div>© {year} DedVill KFT – Minden jog fenntartva.</div>
          <div>
            <a href="tel:+36209540800">+36 20 954 0800</a>
            {" "}•{" "}
            <a href="mailto:dedvillkft@gmail.com">dedvillkft@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
