import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

type Promotion = {
  title: string
  description: string
  highlight: string
}

const promotions: Promotion[] = [
  {
    title: 'Combo Hotelaria',
    description: 'Complemente sua linha de enxovais com descontos progressivos para quantidades acima de 200 peças.',
    highlight: 'até 20% OFF',
  },
  {
    title: 'Programa de Fidelidade',
    description: 'Clientes recorrentes ganham condições especiais e consultoria em desenvolvimento de produtos.',
    highlight: 'Cashback exclusivo',
  },
  {
    title: 'Entrega Expressa Sudeste',
    description: 'Logística otimizada para a região Sudeste com lead time reduzido e acompanhamento em tempo real.',
    highlight: 'Frete reduzido',
  },
]

const PromotionsSection = () => {
  return (
    <section id="promocoes" className="section-padding bg-light">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="fw-semibold mb-3">Condições Especiais</h2>
          <p className="text-muted">Campanhas pensadas para impulsionar o seu negócio com a qualidade Real Têxtil MG.</p>
        </div>
        <Row className="g-4">
          {promotions.map((promo) => (
            <Col md={6} lg={4} key={promo.title}>
              <Card className="h-100 promotion-card">
                <Card.Body className="d-flex flex-column">
                  <Badge bg="warning" text="dark" className="mb-3 align-self-start">
                    {promo.highlight}
                  </Badge>
                  <Card.Title>{promo.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">{promo.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default PromotionsSection

