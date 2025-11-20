import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { products } from '../data/products'
import type { Product, ProductCategory } from '../data/products'
import ProductImage from './ProductImage'
import type { ReactElement } from 'react'

// Ícone de Camiseta para Tecidos Leves
const TshirtIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    {/* Corpo da camiseta */}
    <path
      d="M20 22 L20 54 L44 54 L44 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Gola */}
    <ellipse
      cx="32"
      cy="14"
      rx="4"
      ry="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {/* Manga direita raglan */}
    <path
      d="M20 22 L16 18 L12 20 L12 28 L16 26 L20 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Costura manga direita */}
    <path
      d="M20 22 L24 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Manga esquerda raglan */}
    <path
      d="M44 22 L48 18 L52 20 L52 28 L48 26 L44 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Costura manga esquerda */}
    <path
      d="M44 22 L40 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Detalhes laterais */}
    <path
      d="M20 32 L18 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 38 L18 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M44 32 L46 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M44 38 L46 38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Barra inferior */}
    <path
      d="M20 54 L44 54"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

// Ícone de Biquíni para Tecidos Médios
const BikiniIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path
      d="M20 20C20 18 22 16 24 16H40C42 16 44 18 44 20V24C44 26 42 28 40 28H24C22 28 20 26 20 24V20Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M24 16L20 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 16L44 12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 36C18 34 20 32 22 32H28C30 32 32 34 32 36V42C32 44 30 46 28 46H22C20 46 18 44 18 42V36Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M32 36C32 34 34 32 36 32H42C44 32 46 34 46 36V42C46 44 44 46 42 46H36C34 46 32 44 32 42V36Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M22 46L18 52"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 46L32 52"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 46L32 52"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42 46L46 52"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// Ícone de Legging para Tecidos Pesados
const LeggingIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path
      d="M22 10H42V18L38 46L36 58H28L26 46L22 18V10Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M22 10H42"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="32"
      y1="18"
      x2="32"
      y2="46"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="38"
      y1="38"
      x2="41"
      y2="38"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="38"
      y1="41"
      x2="41"
      y2="41"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="38"
      y1="44"
      x2="41"
      y2="44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

// Ícone de Tela/Rede para Telas, Tules e Arrastão
const MeshIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <pattern id="mesh-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1.5" fill="currentColor" />
      <line x1="4" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="1" />
      <line x1="4" y1="4" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
    </pattern>
    <rect x="12" y="12" width="40" height="40" fill="url(#mesh-pattern)" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setCurrentImageIndex(0)
  }

  const handleNextImage = () => {
    if (selectedProduct && selectedProduct.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedProduct && selectedProduct.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length)
    }
  }

  const getCategoryColor = (category: ProductCategory): string => {
    const colors: Record<ProductCategory, string> = {
      'Tecidos Leves': 'info',
      'Tecidos Médios': 'primary',
      'Tecidos Pesados': 'secondary',
      'Telas, tules e arrastão': 'success',
    }
    return colors[category] || 'secondary'
  }

  const getCategoryDescription = (category: ProductCategory): string => {
    const descriptions: Record<ProductCategory, string> = {
      'Tecidos Leves': 'Nesta categoria, você encontrará bases tecnológicas de leve gramatura, compostas por filamentos extremamente finos produzidos a partir de fibras aprimoradas. Esses materiais são capazes de oferecer diversas funcionalidades, como proteção contra raios solares, conforto térmico, melhor respirabilidade, secagem rápida, além de outros benefícios que podem ser incorporados ao tecido. Indicações: Ideais para camisetas casuais e esportivas, saídas de praia, forros, lingerie, vestidos com caimento fluido e muitas outras aplicações.',
      'Tecidos Médios': 'Nesta categoria, você encontrará bases tecnológicas de média gramatura, compostas por filamentos mais densos, com ou sem elasticidade, e capazes de oferecer boa cobertura. Algumas dessas bases contam com tecnologias que proporcionam proteção contra raios UV, resistência à água clorada e salgada, conforto térmico, secagem rápida, além de vários outros benefícios que podem ser incorporados ao tecido. Indicações: Ideais para moda praia, moda fitness, peças esportivas, lingeries, vestidos ajustados e diversas outras aplicações.',
      'Tecidos Pesados': 'Os tecidos de alta gramatura são compostos por filamentos densos e encorpados, com ou sem elasticidade, garantindo excelente sustentação e firmeza. Algumas bases contam com tecnologias especiais, como proteção contra raios UV, compressão, secagem rápida e conforto térmico, oferecendo alto desempenho e durabilidade. Indicações: Amplamente utilizados na moda fitness em leggings, tops, bermudas e macacões; na moda praia, são ideais para biquínis e maiôs de sustentação. Também indicados para bodies, vestidos ajustados, modelos flare e outras peças que requerem estrutura e suporte.',
      'Telas, tules e arrastão': 'Nesta categoria, você encontrará bases tecnológicas desenvolvidas em diversos tipos de tear, compostas por fibras especiais que oferecem características únicas. Priorizam o visual e o toque, sem abrir mão da resistência e qualidade. Algumas dessas bases são indesmalháveis, tornando-as resistentes e sofisticadas, podendo ter elasticidade ou não. Por serem leves e confortáveis, apresentam secagem rápida e excelente respirabilidade. Indicações: Podem ser utilizadas na moda fitness, tanto em recortes quanto em peças de sobreposição. Na moda praia, são ideais para recortes de biquínis, maiôs e saídas de praia. Na moda casual, podem ser usadas em recortes, sobreposições e diversas outras aplicações.',
    }
    return descriptions[category] || ''
  }

  const getCategoryShortDescription = (category: ProductCategory): string => {
    const shortDescriptions: Record<ProductCategory, string> = {
      'Tecidos Leves': 'Bases tecnológicas de leve gramatura com filamentos extremamente finos. Oferecem proteção solar, conforto térmico, respirabilidade e secagem rápida.',
      'Tecidos Médios': 'Bases de média gramatura com filamentos densos e boa cobertura. Proteção UV, resistência à água clorada e salgada, secagem rápida.',
      'Tecidos Pesados': 'Alta gramatura com filamentos densos garantindo sustentação e firmeza. Tecnologias de proteção UV, compressão e alto desempenho.',
      'Telas, tules e arrastão': 'Bases desenvolvidas em diversos tipos de tear com fibras especiais. Visual sofisticado, toque agradável, alta resistência e respirabilidade.',
    }
    return shortDescriptions[category] || ''
  }

  const toggleCategoryExpansion = (category: ProductCategory) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }

  const getCategoryIcon = (category: ProductCategory): ReactElement => {
    const icons: Record<ProductCategory, ReactElement> = {
      'Tecidos Leves': <TshirtIcon />,
      'Tecidos Médios': <BikiniIcon />,
      'Tecidos Pesados': <LeggingIcon />,
      'Telas, tules e arrastão': <MeshIcon />,
    }
    return icons[category] || <MeshIcon />
  }

  if (products.length === 0) {
    return (
      <section id="galeria" className="section-padding">
        <Container>
          <div className="text-center py-5">
            <h2 className="mb-4">Galeria de Produtos</h2>
            <p className="text-muted lead">Catálogo em construção. Produtos serão adicionados em breve.</p>
            <p className="text-muted small mt-3">Entre em contato conosco para conhecer nossos produtos.</p>
          </div>
        </Container>
      </section>
    )
  }

  // Agrupar produtos por categoria
  const categories: ProductCategory[] = ['Tecidos Leves', 'Tecidos Médios', 'Tecidos Pesados', 'Telas, tules e arrastão']
  const productsByCategory = categories.map(category => ({
    category,
    products: products.filter(p => p.category === category)
  }))

  return (
    <>
      <section id="galeria" className="section-padding bg-light">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="fw-semibold mb-3">Catálogo de Produtos</h2>
            <p className="text-muted">Tecidos tecnológicos organizados por categoria</p>
          </div>

          {productsByCategory.map(({ category, products: categoryProducts }) => (
            <div key={category} className="category-section mb-5">
              <div className="category-header mb-3">
                <h3 className="category-title">
                  <span className="category-icon-badge me-3">
                    {getCategoryIcon(category)}
                  </span>
                  {category}
                </h3>
                <div className="category-description-wrapper">
                  {/* Descrição completa para desktop */}
                  <p className="category-description category-description-full d-none d-md-block">
                    {getCategoryDescription(category)}
                  </p>
                  
                  {/* Descrição expansível para mobile */}
                  <div className="d-block d-md-none">
                    <p className="category-description">
                      {expandedCategories.has(category) 
                        ? getCategoryDescription(category)
                        : getCategoryShortDescription(category)}
                    </p>
                    <button
                      className="btn-read-more"
                      onClick={() => toggleCategoryExpansion(category)}
                      aria-label={expandedCategories.has(category) ? 'Ler menos' : 'Ler mais'}
                    >
                      {expandedCategories.has(category) ? 'Ler menos ▲' : 'Ler mais ▼'}
                    </button>
                  </div>
                </div>
              </div>
              
              <Row className="g-4 mt-3">
                {categoryProducts.map((product) => (
                  <Col md={6} lg={4} xl={3} key={product.id}>
                    <Card 
                      className="product-card h-100"
                      onClick={() => handleProductClick(product)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="product-image-wrapper">
                        <ProductImage
                          src={product.images[0] || '/images/placeholder-product.jpg'}
                          alt={product.title}
                          className="product-card-image"
                        />
                        <div className="product-overlay">
                          <Button variant="light" size="sm">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title className="h6 mb-1">{product.title}</Card.Title>
                        <Card.Text className="small product-code-text mb-2"><strong>Código:</strong> {product.code}</Card.Text>
                        <Card.Text className="small text-muted">{product.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      <Modal
        show={selectedProduct !== null}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="product-modal"
      >
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProduct.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="product-modal-content">
                {/* Galeria de Imagens */}
                {selectedProduct.images.length > 0 && (
                  <div className="product-image-gallery mb-4">
                    <div className="product-main-image-wrapper">
                      <ProductImage
                        src={selectedProduct.images[currentImageIndex]}
                        alt={selectedProduct.title}
                        className="product-main-image"
                      />
                      {selectedProduct.images.length > 1 && (
                        <>
                          <Button
                            variant="light"
                            className="image-nav-btn image-nav-prev"
                            onClick={handlePrevImage}
                          >
                            ‹
                          </Button>
                          <Button
                            variant="light"
                            className="image-nav-btn image-nav-next"
                            onClick={handleNextImage}
                          >
                            ›
                          </Button>
                          <div className="image-counter">
                            {currentImageIndex + 1} / {selectedProduct.images.length}
                          </div>
                        </>
                      )}
                    </div>
                    {selectedProduct.images.length > 1 && (
                      <div className="product-thumbnails">
                        {selectedProduct.images.map((img, idx) => (
                          <div
                            key={idx}
                            className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(idx)}
                          >
                            <ProductImage src={img} alt={`${selectedProduct.title} - ${idx + 1}`} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Informações do Produto */}
                <div className="product-details">
                  <div className="mb-3">
                    <Badge bg={getCategoryColor(selectedProduct.category)} className="mb-2">
                      {selectedProduct.category}
                    </Badge>
                    <p className="text-muted mb-1"><strong>Código:</strong> {selectedProduct.code}</p>
                  </div>

                  {selectedProduct.fullDescription && (
                    <div className="mb-4">
                      <h5>Descrição</h5>
                      <p>{selectedProduct.fullDescription}</p>
                    </div>
                  )}

                  {/* Especificações Técnicas */}
                  {(selectedProduct.composition || selectedProduct.width || selectedProduct.weight || selectedProduct.yield) && (
                    <div className="mb-4">
                      <h5>Especificações Técnicas</h5>
                      <ul className="list-unstyled">
                        {selectedProduct.composition && (
                          <li><strong>Composição:</strong> {selectedProduct.composition}</li>
                        )}
                        {selectedProduct.width && (
                          <li><strong>Largura:</strong> {selectedProduct.width}</li>
                        )}
                        {selectedProduct.weight && (
                          <li><strong>Gramatura:</strong> {selectedProduct.weight}</li>
                        )}
                        {selectedProduct.yield && (
                          <li><strong>Rendimento:</strong> {selectedProduct.yield}</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Tecnologias */}
                  {selectedProduct.technologies && selectedProduct.technologies.length > 0 && (
                    <div className="mb-4">
                      <h5>Tecnologias Aplicadas</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedProduct.technologies.map((tech, idx) => (
                          <Badge key={idx} bg="info">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cores */}
                  {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                    <div className="mb-4">
                      <h5>Cores Disponíveis</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {selectedProduct.colors.map((color, idx) => (
                          <Badge key={idx} bg="secondary">{color}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Indicações */}
                  {selectedProduct.indications && selectedProduct.indications.length > 0 && (
                    <div>
                      <h5>Indicações de Uso</h5>
                      <ul>
                        {selectedProduct.indications.map((indication, idx) => (
                          <li key={idx}>{indication}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  )
}

export default ProductGallery

