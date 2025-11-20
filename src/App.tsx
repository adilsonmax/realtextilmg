import { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SocialMediaSection from './components/SocialMediaSection'
import CatalogSection from './components/CatalogSection'
import ProductGallery from './components/ProductGallery'
import CatalogPage from './pages/CatalogPage'
import PromotionsSection from './components/PromotionsSection'
import ContactSection from './components/ContactSection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import WhatsAppFloatButton from './components/WhatsAppFloatButton'
import QuoteForm from './components/QuoteForm'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog'>('home')
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  // Detectar mudança de hash para navegação
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#galeria') || hash.startsWith('#catalogo')) {
        setCurrentPage('catalog')
      } else {
        setCurrentPage('home')
      }
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="app-wrapper">
      <a href="#main-content" className="skip-to-main">
        Pular para o conteúdo principal
      </a>
      <NavigationBar />
      <main id="main-content">
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <AboutSection />
            <SocialMediaSection />
            <CatalogSection />
            <ProductGallery />
            <PromotionsSection />
            <ContactSection onRequestQuote={() => setShowQuoteForm(true)} />
            <MapSection />
          </>
        ) : (
          <CatalogPage />
        )}
      </main>
      <Footer />
      <WhatsAppFloatButton />
      <QuoteForm show={showQuoteForm} onHide={() => setShowQuoteForm(false)} />
    </div>
  )
}

export default App
