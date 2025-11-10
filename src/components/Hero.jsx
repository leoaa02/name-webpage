import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero-pattern"></div>

      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="nav-links">
              <a href="#collections" className="nav-link">Colecciones</a>
              <a href="#featured" className="nav-link">Destacados</a>
            </div>

            <div className="logo">
              <span className="logo-text">NAME</span>
              <span className="logo-subtitle">your own style</span>
            </div>

            <div className="nav-links">
              <a href="#about" className="nav-link">Nosotros</a>
              <a href="#contact" className="nav-link">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Donde la elegancia</span>
              <span className="title-line">Lleva tu nombre</span>
            </h1>
            <p className="hero-subtitle">Colección Exclusiva 2025</p>
            <button className="cta-button">
              Explorar Colección
              <span className="button-shine"></span>
            </button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero
