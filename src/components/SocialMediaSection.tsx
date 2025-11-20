import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { COMPANY_INFO, WHATSAPP_URL } from '../config/constants'

const SocialMediaSection = () => {
  return (
    <section id="midias-sociais" className="social-media-section section-padding">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="fw-semibold mb-3">Conecte-se Conosco</h2>
          <p className="text-muted">Siga nossas redes sociais e fique por dentro das novidades</p>
        </div>

        <Row className="g-4">
          {/* Contatos */}
          <Col md={6} lg={4}>
            <div className="social-card">
              <h3 className="social-card-title mb-4">
                <i className="fas fa-phone-alt me-2"></i>
                Contatos
              </h3>
              
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="contact-item"
                aria-label="Ligar para telefone fixo"
              >
                <div className="contact-icon phone-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">Telefone</span>
                  <span className="contact-value">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                aria-label="Enviar mensagem no WhatsApp"
              >
                <div className="contact-icon whatsapp-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-info">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">{COMPANY_INFO.whatsapp.formatted}</span>
                </div>
              </a>
            </div>
          </Col>

          {/* Mídias Sociais */}
          <Col md={6} lg={4}>
            <div className="social-card">
              <h3 className="social-card-title mb-4">
                <i className="fas fa-share-alt me-2"></i>
                Mídias Sociais
              </h3>

              <a 
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                aria-label="Seguir no Instagram"
              >
                <div className="social-icon instagram-icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="social-info">
                  <span className="social-label">Instagram</span>
                  <span className="social-value">@realtextilmg</span>
                </div>
              </a>

              <a 
                href={COMPANY_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                aria-label="Seguir no TikTok"
              >
                <div className="social-icon tiktok-icon">
                  <i className="fab fa-tiktok"></i>
                </div>
                <div className="social-info">
                  <span className="social-label">TikTok</span>
                  <span className="social-value">@realtextilmg</span>
                </div>
              </a>

              <a 
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                aria-label="Seguir no Facebook"
              >
                <div className="social-icon facebook-icon">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="social-info">
                  <span className="social-label">Facebook</span>
                  <span className="social-value">realtextilmg</span>
                </div>
              </a>
            </div>
          </Col>

          {/* Avalie no Google */}
          <Col md={12} lg={4}>
            <div className="social-card">
              <h3 className="social-card-title mb-4">
                <i className="fas fa-star me-2"></i>
                Nos Avalie
              </h3>

              <a 
                href={COMPANY_INFO.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="google-review-item"
                aria-label="Avaliar no Google"
              >
                <div className="google-icon">
                  <i className="fab fa-google"></i>
                </div>
                <div className="google-info">
                  <span className="google-title">Real Têxtil</span>
                  <span className="google-subtitle">Deixe sua avaliação no Google</span>
                </div>
              </a>

              <div className="review-info mt-4 text-center">
                <p className="text-muted mb-0">
                  <small>Sua opinião é muito importante para nós!</small>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SocialMediaSection

