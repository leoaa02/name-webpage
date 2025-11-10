import { useEffect, useRef } from 'react'
import './Featured.css'

function Featured() {
  const featuredRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = featuredRef.current?.querySelectorAll('.feature-item')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="featured" id="featured" ref={featuredRef}>
      <div className="container">
        <div className="featured-content">
          <div className="featured-image">
            <div className="image-wrapper">
              <img
                src="/assets/blackpose-img.png"
                alt="Featured Collection"
              />
              <div className="image-border"></div>
            </div>
          </div>

          <div className="featured-text">
            <span className="featured-label">Exclusivo</span>
            <h2 className="featured-title">Artesanía de Lujo</h2>
            <p className="featured-description">
              Cada pieza de NAME es creada con maestría excepcional, combinando técnicas
              tradicionales con diseño contemporáneo. Nuestros artesanos dedican horas
              meticulosas para garantizar que cada detalle refleje la excelencia
              que define nuestra marca.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">✦</div>
                <div className="feature-info">
                  <h4>Materiales Premium</h4>
                  <p>Seleccionados de fuentes exclusivas</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">✦</div>
                <div className="feature-info">
                  <h4>Diseño Atemporal</h4>
                  <p>Elegancia que trasciende tendencias</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">✦</div>
                <div className="feature-info">
                  <h4>Edición Limitada</h4>
                  <p>Exclusividad garantizada</p>
                </div>
              </div>
            </div>

            <button className="featured-button">
              Descubre Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
