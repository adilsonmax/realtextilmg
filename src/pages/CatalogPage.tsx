import { useState, useMemo, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import { products } from '../data/products'
import type { Product, ProductCategory } from '../data/products'
import ProductImage from '../components/ProductImage'
import { FaSearch, FaFilter } from 'react-icons/fa'

const CatalogPage = () => {
  // Obter categoria da URL se existir
  const getCategoryFromURL = (): ProductCategory | 'Todos' => {
    const hash = window.location.hash
    const match = hash.match(/[?&]categoria=([^&]*)/)
    if (match) {
      const decodedCategory = decodeURIComponent(match[1])
      const validCategories: ProductCategory[] = ['Tecidos Leves', 'Tecidos Médios', 'Tecidos Pesados', 'Telas, tules e arrastão']
      if (validCategories.includes(decodedCategory as ProductCategory)) {
        return decodedCategory as ProductCategory
      }
    }
    return 'Todos'
  }

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'Todos'>(getCategoryFromURL())
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Scroll para o topo quando a página for carregada
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Atualizar categoria quando a URL mudar
  useEffect(() => {
    const handleHashChange = () => {
      const category = getCategoryFromURL()
      setSelectedCategory(category)
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const categories: (ProductCategory | 'Todos')[] = ['Todos', 'Tecidos Leves', 'Tecidos Médios', 'Tecidos Pesados', 'Telas, tules e arrastão']

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory
      const matchesSearch =
        searchTerm === '' ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setCurrentImageIndex(0)
  }

  const handleThumbnailClick = (index: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (selectedProduct && index >= 0 && index < selectedProduct.images.length) {
      setCurrentImageIndex(index)
    }
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

  return (
    <div className="catalog-page">
      <section className="catalog-page-header section-padding">
        <Container>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">Catálogo de Produtos</h1>
            <p className="lead">Explore nossa linha completa de tecidos tecnológicos</p>
          </div>

          {/* Filtros e Busca */}
          <Row className="g-3 mb-4">
            <Col md={6}>
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Buscar por nome, código ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={6}>
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="me-2">
                  <FaFilter /> Filtrar por:
                </span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'outline-secondary'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>

          {/* Contador de resultados */}
          <div className="mb-4">
            <p className="text-muted mb-0">
              Mostrando <strong>{filteredProducts.length}</strong> produto{filteredProducts.length !== 1 ? 's' : ''}
              {selectedCategory !== 'Todos' && ` em ${selectedCategory}`}
            </p>
          </div>
        </Container>
      </section>

      {/* Grid de Produtos */}
      <section className="catalog-products-section section-padding">
        <Container>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <p className="lead text-muted mb-4">Nenhum produto encontrado com os filtros selecionados.</p>
              <Button 
                variant="outline-primary" 
                onClick={() => {
                  setSelectedCategory('Todos')
                  setSearchTerm('')
                }}
                aria-label="Limpar todos os filtros e mostrar todos os produtos"
              >
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <Row className="g-4">
              {filteredProducts.map((product) => (
                <Col md={6} lg={4} xl={3} key={product.id}>
                  <Card
                    className="catalog-product-card h-100"
                    onClick={() => handleProductClick(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="product-card-image-wrapper">
                      <ProductImage
                        src={product.images[0] || '/images/placeholder-product.jpg'}
                        alt={product.title}
                        className="product-card-image"
                      />
                      <div className="product-card-overlay">
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
                      {product.technologies && product.technologies.length > 0 && (
                        <div className="mt-2">
                          {product.technologies.slice(0, 2).map((tech, idx) => (
                            <Badge key={idx} bg="info" className="me-1" style={{ fontSize: '0.7rem' }}>
                              {tech}
                            </Badge>
                          ))}
                          {product.technologies.length > 2 && (
                            <Badge bg="secondary" style={{ fontSize: '0.7rem' }}>
                              +{product.technologies.length - 2}
                            </Badge>
                          )}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>

      {/* Modal de Detalhes do Produto */}
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
                        key={`${selectedProduct.id}-${currentImageIndex}`}
                        src={selectedProduct.images[currentImageIndex]}
                        alt={`${selectedProduct.title} - Imagem ${currentImageIndex + 1}`}
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
                            onClick={(e) => handleThumbnailClick(idx, e)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                handleThumbnailClick(idx, e as any)
                              }
                            }}
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
                    <p className="mb-1 product-code-text"><strong>Código:</strong> {selectedProduct.code}</p>
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
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal} aria-label="Fechar modal">
                Fechar
              </Button>
              <Button 
                variant="primary" 
                onClick={() => {
                  window.open('https://wa.me/5537999813287?text=Olá, vim do site da RealTextilMG e gostaria de solicitar um orçamento.', '_blank')
                }}
                aria-label="Solicitar orçamento para este produto"
              >
                Solicitar Orçamento
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  )
}

export default CatalogPage

