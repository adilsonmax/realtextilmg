import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const MapSection = () => {
  const address = 'Rua Espírito Santo, 611 - Centro, Divinópolis - MG, 35500-030'
  const mapsQuery = encodeURIComponent(address)
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`
  const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

  return (
    <section id="localizacao" className="section-padding bg-light">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <h2 className="fw-semibold mb-1">Onde estamos</h2>
            <p className="text-muted mb-0">Rua Espírito Santo, 611 - Centro - Divinópolis - MG</p>
            <p className="text-muted mb-0">CEP: 35.500-030</p>
          </div>
          <Button
            href={directionsLink}
            target="_blank"
            rel="noreferrer"
            className="btn-brand-primary"
          >
            Como chegar
          </Button>
        </div>
        <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
          <iframe
            title="Mapa Real Têxtil MG"
            src={embedSrc}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  )
}

export default MapSection

