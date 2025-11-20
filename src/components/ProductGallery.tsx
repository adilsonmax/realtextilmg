import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { FaUmbrellaBeach, FaRunning, FaTh } from 'react-icons/fa'
import { products } from '../data/products'
import type { Product, ProductCategory } from '../data/products'
import ProductImage from './ProductImage'
import type { ReactElement } from 'react'

const TshirtIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
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
      'Tecidos Médios': <FaUmbrellaBeach size={32} />,
      'Tecidos Pesados': <FaRunning size={32} />,
      'Telas, tules e arrastão': <FaTh size={32} />,
    }
    return icons[category] || <FaTh size={32} />
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

