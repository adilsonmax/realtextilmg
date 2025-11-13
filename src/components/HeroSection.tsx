import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

interface HeroSectionProps {
  onRequestQuote?: () => void
}

const HeroSection = ({ onRequestQuote }: HeroSectionProps) => {
  // Preload da imagem do hero
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = '/images/Hero-3.jpg'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <section id="inicio" className="hero-section d-flex align-items-center">
      <div
        className="hero-background active"
        style={{
          backgroundImage: 'url(/images/Hero-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
        role="img"
        aria-label="Atleta em movimento representando performance e tecnologia têxtil"
      />
      <div className="hero-overlay" />
      <Container className="py-4 py-md-5 position-relative">
        <div className="hero-content text-white">
          <span className="hero-badge">A moda em movimento</span>
          <h1 className="display-4 fw-bold mb-3">Performance, design e tecnologia têxtil</h1>
          <p className="lead mb-4">
            Soluções completas para uniformes, moda esportiva e coleções corporativas com a assinatura Real Têxtil MG.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <Button href="#catalogo" size="lg" className="btn-brand-primary">
              Ver catálogo
            </Button>
            <Button 
              size="lg" 
              variant="outline-light" 
              className="btn-outline-hero"
              onClick={onRequestQuote}
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
