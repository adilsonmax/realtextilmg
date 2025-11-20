import { useState, useEffect } from 'react'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SocialMediaSection from './components/SocialMediaSection'
import ProductGallery from './components/ProductGallery'
import CatalogPage from './pages/CatalogPage'
import PromotionsSection from './components/PromotionsSection'
import ContactSection from './components/ContactSection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import WhatsAppFloatButton from './components/WhatsAppFloatButton'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'catalog'>('home')

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
            <ProductGallery />
            <PromotionsSection />
            <ContactSection />
            <MapSection />
            <SocialMediaSection />
            <AboutSection />
          </>
        ) : (
          <CatalogPage />
        )}
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  )
}

export default App
