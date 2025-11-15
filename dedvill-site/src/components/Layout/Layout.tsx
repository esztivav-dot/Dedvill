import { NavLink } from 'react-router-dom'
import './Layout.css'
import React from 'react'
import dedvillLogo from "../../assets/dedvill_transparent.png";

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear()
  return (
    <div className="site layout-wrapper">
      <header className="site-header">
        <div className="container site-header-inner">
          <div className="site-brand">
            <div className="site-logo">
              <img src={dedvillLogo} alt="DedVill logó" className="logo-img" />
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

      <main className="site-main layout-main">
        {children}
      </main>

      <footer className="site-footer footer">
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
