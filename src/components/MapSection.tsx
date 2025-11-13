import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { COMPANY_INFO, GOOGLE_MAPS } from '../config/constants'

const MapSection = () => {

  return (
    <section id="localizacao" className="section-padding bg-light">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <h2 className="fw-semibold mb-1">Onde estamos</h2>
            <p className="text-muted mb-0">{COMPANY_INFO.address.street} - {COMPANY_INFO.address.neighborhood} - {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}</p>
            <p className="text-muted mb-0">CEP: {COMPANY_INFO.address.zipCode}</p>
          </div>
          <Button
            href={GOOGLE_MAPS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand-primary"
            aria-label="Abrir rotas no Google Maps"
          >
            Como chegar
          </Button>
        </div>
        <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
          <iframe
            title="Mapa Real Têxtil MG"
            src={GOOGLE_MAPS.embedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa da localização da Real Têxtil MG"
          />
        </div>
      </Container>
    </section>
  )
}

export default MapSection

