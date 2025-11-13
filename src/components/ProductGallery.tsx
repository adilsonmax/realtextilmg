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

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  return (
    <>
      <section id="galeria" className="section-padding">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="fw-semibold mb-3">Galeria de Produtos</h2>
            <p className="text-muted">Explore nossa linha completa de tecidos tecnológicos</p>
          </div>
          <Row className="g-4">
            {products.map((product) => (
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
                      <Badge bg={getCategoryColor(product.category)} className="mb-2">
                        {product.category}
                      </Badge>
                      <Button variant="light" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="h6 mb-1">{product.title}</Card.Title>
                    <Card.Text className="small text-muted mb-2">Código: {product.code}</Card.Text>
                    <Card.Text className="small">{product.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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

