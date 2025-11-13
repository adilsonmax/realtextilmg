import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow-sm navigation-bar">
      <Container>
        <Navbar.Brand href="#inicio" className="fw-bold text-white">
          Real Têxtil MG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-2">
            <Nav.Link href="#inicio" onClick={() => window.location.hash = ''}>Início</Nav.Link>
            <Nav.Link href="#catalogo">Linhas</Nav.Link>
            <Nav.Link href="#galeria">Catálogo</Nav.Link>
            <Nav.Link href="#promocoes">Promoções</Nav.Link>
            <Nav.Link href="#contato">Fale Conosco</Nav.Link>
            <Nav.Link href="#localizacao">Localização</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar

