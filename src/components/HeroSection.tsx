const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5537999999999?text=Olá, gostaria de solicitar um orçamento', '_blank')
  }

  return (
    <section id="inicio" className="hero-section d-flex align-items-center">
      <div
        className="hero-background active"
        style={{
          backgroundImage: 'url(/images/hero-main.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll'
        }}
        role="img"
        aria-label="Real Têxtil MG"
      />
      
      <div className="hero-buttons-container">
        <a href="#galeria" className="hero-btn hero-btn-primary">
          Ver Catálogo
        </a>
        <button onClick={handleWhatsApp} className="hero-btn hero-btn-primary">
          Solicitar Orçamento
        </button>
      </div>
    </section>
  )
}

export default HeroSection
