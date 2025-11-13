import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'

const whatsappNumber = '5537999813287'
const whatsappMessage = encodeURIComponent('Olá! Gostaria de conhecer os tecidos tecnológicos da Real Têxtil MG.')

interface ContactSectionProps {
  onRequestQuote?: () => void
}

const ContactSection = ({ onRequestQuote }: ContactSectionProps) => {
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
                onClick={onRequestQuote}
              >
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline-primary"
                className="d-flex align-items-center gap-2"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> Conversar no WhatsApp
              </Button>
              <div className="d-flex align-items-center gap-3 social-links">
                <a
                  className="social-icon"
                  href="https://www.facebook.com/realtextilmg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  className="social-icon"
                  href="https://www.instagram.com/realtextilmg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="contact-info mt-4">
              <p className="mb-1">Telefone: <a href="tel:+553732137711">(37) 3213-7711</a></p>
              <p className="mb-1">WhatsApp: <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}> (37) 99981-3287</a></p>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-card p-4 rounded-4 shadow-sm">
              <h5 className="fw-semibold">Atendimento consultivo</h5>
              <p className="mb-4">
                Conte com especialistas para orientar na escolha das melhores soluções têxteis para sua demanda.
              </p>
              <ul className="list-unstyled">
                <li>• Atendimento de segunda a sexta, das 8h às 18h</li>
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

