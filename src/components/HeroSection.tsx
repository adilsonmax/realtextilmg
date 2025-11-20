import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    '/images/hero-main.jpg',
    '/images/hero-1.jpg',
    '/images/hero-2.jpg'
  ]

  // Preload das imagens
  useEffect(() => {
    images.forEach((image) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = image
      document.head.appendChild(link)
    })

    return () => {
      images.forEach((image) => {
        const link = document.querySelector(`link[href="${image}"]`)
        if (link) {
          document.head.removeChild(link)
        }
      })
    }
  }, [])

  // Rotação automática das imagens a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleWhatsApp = () => {
    window.open('https://wa.me/5537999813287?text=Olá, vim do site da RealTextilMG e gostaria de solicitar um orçamento.', '_blank')
  }

  const goToImage = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <section id="inicio" className="hero-section d-flex align-items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentImage ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'scroll'
          }}
          role="img"
          aria-label={`Real Têxtil MG - Imagem ${index + 1}`}
        />
      ))}
      
      <div className="hero-buttons-container d-none d-md-flex">
        <a href="#galeria" className="hero-btn hero-btn-primary">
          Ver Catálogo
        </a>
        <button onClick={handleWhatsApp} className="hero-btn hero-btn-primary">
          Solicitar Orçamento
        </button>
      </div>

      {/* Indicadores de imagem */}
      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => goToImage(index)}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
