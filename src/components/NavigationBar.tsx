import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow-sm navigation-bar">
      <Container>
        <Navbar.Brand href="#inicio" className="d-flex align-items-center fw-bold text-white" aria-label="Real Têxtil MG - Página inicial">
          Real Têxtil
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" aria-label="Alternar menu de navegação" />
        <Navbar.Collapse id="main-navbar">
                  <Nav className="ms-auto gap-2" role="navigation" aria-label="Menu principal">
                    <Nav.Link href="#inicio" onClick={() => window.location.hash = ''} aria-label="Ir para seção Início">Início</Nav.Link>
                    <Nav.Link href="#galeria" aria-label="Ir para seção Catálogo de Produtos">Catálogo</Nav.Link>
                    <Nav.Link href="#promocoes" aria-label="Ir para seção Promoções">Promoções</Nav.Link>
                    <Nav.Link href="#contato" aria-label="Ir para seção Fale Conosco">Fale Conosco</Nav.Link>
                    <Nav.Link href="#localizacao" aria-label="Ir para seção Localização">Localização</Nav.Link>
                    <Nav.Link href="#midias-sociais" aria-label="Ir para seção Mídias Sociais">Mídias Sociais</Nav.Link>
                    <Nav.Link href="#sobre" aria-label="Ir para seção Sobre a Empresa">Sobre</Nav.Link>
                  </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar

