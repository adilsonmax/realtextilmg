import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'
import { COMPANY_INFO, WHATSAPP_URL } from '../config/constants'

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5537999813287?text=Olá, vim do site da Real Textil MG e gostaria de solicitar um orçamento.', '_blank')
  }
  return (
    <section id="contato" className="section-padding">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <h2 className="fw-semibold mb-3">Fale Conosco</h2>
            <p className="mb-4">
              Entre em contato para receber amostras, alinhar prazos e desenvolver coleções exclusivas com suporte
              consultivo.
            </p>
            <div className="d-flex flex-column flex-md-row gap-3">
              <Button
                size="lg"
                className="btn-brand-primary"
                onClick={handleWhatsApp}
              >
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline-primary"
                className="d-flex align-items-center gap-2"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp"
              >
                <FaWhatsapp /> Conversar no WhatsApp
              </Button>
              <div className="d-flex align-items-center gap-3 social-links">
                <a
                  className="social-icon"
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="social-icon"
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="contact-info mt-4">
              <p className="mb-1">Telefone: <a href={`tel:+55${COMPANY_INFO.phone.replace(/\D/g, '')}`}>{COMPANY_INFO.phone}</a></p>
              <p className="mb-1">WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{COMPANY_INFO.whatsapp.formatted}</a></p>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-card p-4 rounded-4 shadow-sm">
              <h5 className="fw-semibold">Atendimento consultivo</h5>
              <p className="mb-4">
                Conte com especialistas para orientar na escolha das melhores soluções têxteis para sua demanda.
              </p>
              <ul className="list-unstyled">
                <li>• {COMPANY_INFO.businessHours.weekdays}</li>
                <li>• Amostras personalizadas e suporte técnico</li>
                <li>• Entregas para todo o Brasil</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactSection

