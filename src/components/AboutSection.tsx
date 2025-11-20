import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GOOGLE_MAPS } from '../config/constants'

const AboutSection = () => {
  const handleLocationClick = () => {
    window.open(GOOGLE_MAPS.directionsUrl, '_blank')
  }

  return (
    <section id="sobre" className="about-section section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <div className="section-header text-center mb-4">
              <h2 className="section-title">Sobre a Empresa</h2>
              <div className="title-underline mx-auto"></div>
            </div>
            
            <div className="about-content">
              <p className="lead text-center mb-4">
                A <strong>Real Têxtil</strong> foi fundada em 2017 na cidade de Divinópolis e atua na distribuição a pronta entrega de tecidos tecnológicos desenvolvidos para confecção de vestuário na linha fitness, esportivo, praia e moda.
              </p>
              
              <p className="text-justify mb-4">
                Ao longo desses anos vem mantendo o compromisso na busca e pesquisa por tecidos inovadores a fim de trazer ao pequeno e médio confeccionista, acesso às bases utilizadas pelas grandes marcas do mercado mundial.
              </p>
              
              <p className="text-justify mb-4">
                A empresa desenvolve seu trabalho através de <strong>dinamismo</strong>, <strong>criatividade</strong> e <strong>atendimento personalizado</strong>, embasado em informações técnicas atualizadas.
              </p>
              
              <p className="text-justify">
                A empresa possui <strong>showroom em sua loja física</strong> que possibilita interação de clientes com as bases fornecidas.
              </p>
            </div>

            <div className="about-highlights mt-4">
              <Row className="g-3">
                <Col md={4}>
                  <div className="highlight-card text-center p-3">
                    <div className="highlight-icon mb-2">
                      <i className="fas fa-calendar-alt fa-2x text-primary"></i>
                    </div>
                    <h5 className="highlight-title">Fundada em</h5>
                    <p className="highlight-text mb-0">2017</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div 
                    className="highlight-card text-center p-3 clickable-card" 
                    onClick={handleLocationClick}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && handleLocationClick()}
                    aria-label="Abrir rotas para Divinópolis - MG no Google Maps"
                  >
                    <div className="highlight-icon mb-2">
                      <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                    </div>
                    <h5 className="highlight-title">Localização</h5>
                    <p className="highlight-text mb-0">Divinópolis - MG</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="highlight-card text-center p-3">
                    <div className="highlight-icon mb-2">
                      <i className="fas fa-store fa-2x text-primary"></i>
                    </div>
                    <h5 className="highlight-title">Showroom</h5>
                    <p className="highlight-text mb-0">Loja Física</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="about-values mt-4">
              <h3 className="text-center mb-3">Nossos Valores</h3>
              <Row className="g-3">
                <Col md={4}>
                  <div className="value-item text-center">
                    <div className="value-icon mb-3">
                      <i className="fas fa-lightbulb fa-2x text-info"></i>
                    </div>
                    <h5>Inovação</h5>
                    <p className="text-muted">Busca constante por tecidos tecnológicos e inovadores</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="value-item text-center">
                    <div className="value-icon mb-3">
                      <i className="fas fa-handshake fa-2x text-info"></i>
                    </div>
                    <h5>Compromisso</h5>
                    <p className="text-muted">Atendimento personalizado e informações técnicas atualizadas</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="value-item text-center">
                    <div className="value-icon mb-3">
                      <i className="fas fa-star fa-2x text-info"></i>
                    </div>
                    <h5>Qualidade</h5>
                    <p className="text-muted">Bases utilizadas pelas grandes marcas do mercado mundial</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutSection


