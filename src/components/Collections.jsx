import { useState } from 'react'
import './Collections.css'

function Collections() {
  const [activeCollection, setActiveCollection] = useState(0)

  const collections = [
    {
      title: "Royal Heritage",
      description: "Tradición y modernidad en perfecta armonía",
      image: "/assets/modelname-img.png"
    },
    {
      title: "The Gilded Hour",
      description: "Sofisticación refinada para momentos especiales",
      image: "/assets/thegildedhour-image.png"
    },
    {
      title: "Capsule",
      description: "Exclusividad para ocasiones extraordinarias",
      image: "/assets/modelwhite-img.png"
    }
  ]

  return (
    <section className="collections" id="collections">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestras Colecciones</h2>
          <p className="section-subtitle">Exclusividad en cada detalle</p>
        </div>

        <div className="collections-grid">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`collection-card ${activeCollection === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveCollection(index)}
            >
              <div className="collection-image-wrapper">
                <img src={collection.image} alt={collection.title} className="collection-image" />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-content">
                <h3 className="collection-title">{collection.title}</h3>
                <p className="collection-description">{collection.description}</p>
                <button className="collection-button">
                  Ver Colección
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
