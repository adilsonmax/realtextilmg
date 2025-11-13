import Container from 'react-bootstrap/Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer py-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="text-white-50">© {currentYear} Real Têxtil MG. Todos os direitos reservados.</span>
        <a className="text-white-50" href="#inicio">
          Voltar ao topo
        </a>
      </Container>
    </footer>
  )
}

export default Footer

