import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-pattern"></div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">NAME</span>
              <span className="footer-logo-subtitle">your own style</span>
            </div>
            <p className="footer-tagline">
              Elegancia atemporal para quienes aprecian la verdadera calidad
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Compañía</h4>
              <ul className="footer-list">
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#collections">Colecciones</a></li>
                <li><a href="#featured">Destacados</a></li>
                <li><a href="#careers">Carreras</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Soporte</h4>
              <ul className="footer-list">
                <li><a href="#contact">Contacto</a></li>
                <li><a href="#shipping">Envíos</a></li>
                <li><a href="#returns">Devoluciones</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Síguenos</h4>
              <ul className="footer-list">
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#pinterest">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 NAME. Todos los derechos reservados.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacidad</a>
              <span className="separator">•</span>
              <a href="#terms">Términos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
