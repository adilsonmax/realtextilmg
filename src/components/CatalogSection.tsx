import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FaUmbrellaBeach, FaRunning, FaTh } from 'react-icons/fa'
import type { ReactElement } from 'react'

const TshirtIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 20 L15 25 L15 45 L45 45 L45 25 L40 20 L40 15 L35 15 L35 10 L25 10 L25 15 L20 15 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M20 20 L30 15 L40 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

type CatalogItem = {
  title: string
  description: string
  indications: string
  category: string
  icon: ReactElement
}

const catalogItems: CatalogItem[] = [
  {
    title: 'TECIDOS LEVES',
    description: 'Nesta categoria estão as bases tecnológicas de gramatura leve, compostas por filamentos extremamente finos produzidos a partir de fibras aprimoradas. Esses tecidos oferecem diversas funcionalidades, como proteção contra raios solares, conforto térmico, alta respirabilidade, secagem rápida e outros benefícios que agregam desempenho e bem-estar ao uso.',
    indications: 'Podem ser usados em camisetas para o dia a dia e esportivas, saídas de praia, forros, lingerie, vestidos com caimento fluido e muitas outras aplicações.',
    category: 'Tecidos Leves',
    icon: <TshirtIcon />,
  },
  {
    title: 'TECIDOS MÉDIOS',
    description: 'As bases tecnológicas de média gramatura são compostas por filamentos mais densos, com ou sem elasticidade, oferecendo excelente cobertura e estrutura. Algumas dessas bases contam com tecnologias avançadas, como proteção UV, resistência à água clorada e salgada, conforto térmico e secagem rápida, proporcionando equilíbrio entre performance e estilo.',
    indications: 'Perfeitos para moda praia, moda fitness, peças esportivas, lingeries e vestidos ajustados, além de outras criações que exigem elasticidade e versatilidade.',
    category: 'Tecidos Médios',
    icon: <FaUmbrellaBeach />,
  },
  {
    title: 'TECIDOS PESADOS',
    description: 'Os tecidos de alta gramatura são compostos por filamentos densos e encorpados, com ou sem elasticidade, garantindo excelente sustentação e firmeza. Algumas bases contam com tecnologias especiais, como proteção contra raios UV, compressão, secagem rápida e conforto térmico, oferecendo alto desempenho e durabilidade.',
    indications: 'Amplamente utilizados na moda fitness em leggings, tops, bermudas e macacões; na moda praia, são ideais para biquínis e maiôs de sustentação. Também indicados para bodies, vestidos ajustados, modelos flare e outras peças que requerem estrutura e suporte.',
    category: 'Tecidos Pesados',
    icon: <FaRunning />,
  },
  {
    title: 'TULES, TELAS E RENDAS',
    description: 'Desenvolvidas em diferentes tipos de tear e compostas por fibras especiais, essas bases se destacam pelo visual sofisticado, toque agradável e alta resistência. Algumas versões são indesmalháveis, garantindo durabilidade e elegância, e podem conter elasticidade em sua composição. Com toque leve, secagem rápida e excelente respirabilidade, proporcionam conforto e estilo em diversas aplicações.',
    indications: 'Muito utilizadas na moda fitness para recortes e sobreposições, na moda praia em detalhes de biquínis, maiôs e saídas de praia, e na moda casual e social em recortes, peças de sobreposição e projetos que valorizam transparência e textura.',
    category: 'Telas, tules e arrastão',
    icon: <FaTh />,
  },
]

const CatalogSection = () => {
  return (
    <section id="catalogo" className="section-padding">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="fw-semibold mb-3">Linhas de Tecidos</h2>
          <p className="text-muted">Explore nossas categorias de tecidos tecnológicos desenvolvidos para diferentes necessidades.</p>
        </div>
        <Row className="g-3 g-lg-2">
          {catalogItems.map((item) => (
            <Col md={6} lg={3} key={item.title}>
              <Card 
                className="catalog-card-layout h-100"
                onClick={() => {
                  const categoryParam = encodeURIComponent(item.category)
                  window.location.hash = `#galeria?categoria=${categoryParam}`
                }}
                style={{ cursor: 'pointer' }}
              >
                <Card.Body className="p-0">
                  <div className="catalog-layout-container">
                    <div className="catalog-layout-left">
                      <h3 className="catalog-layout-title text-center">{item.title}</h3>
                      <div className="catalog-icon-wrapper-layout">
                        {item.icon}
                      </div>
                    </div>
                    <div className="catalog-layout-divider"></div>
                    <div className="catalog-layout-right">
                      <p className="catalog-layout-description">{item.description}</p>
                      <p className="catalog-layout-indications">
                        <strong>Indicações:</strong> {item.indications}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default CatalogSection

