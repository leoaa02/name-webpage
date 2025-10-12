import { useState } from 'react'
import './Collections.css'

function Collections() {
  const [activeCollection, setActiveCollection] = useState(0)

  const collections = [
    {
      title: "Noir Élégance",
      description: "Sofisticación refinada para momentos especiales",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Royal Heritage",
      description: "Tradición y modernidad en perfecta armonía",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Midnight Luxury",
      description: "Exclusividad para ocasiones extraordinarias",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800"
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
