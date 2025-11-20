import Container from 'react-bootstrap/Container'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer py-4">
      <Container>
        {/* Disclaimer */}
        <div className="footer-disclaimer text-center mb-4">
          <p className="text-white-50 mb-2">
            <strong>Disclaimer:</strong> As cores dos produtos exibidos nas imagens podem variar devido às configurações de tela e iluminação. 
            Recomendamos solicitar amostras físicas antes da compra. Disponibilidade e especificações técnicas sujeitas a alterações sem aviso prévio. 
            Vendas exclusivas para confeccionistas e empresas do setor têxtil.
          </p>
        </div>
        
        {/* Copyright e Links */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pt-3 border-top border-secondary">
          <span className="text-white-50">© {currentYear} Real Têxtil MG. Todos os direitos reservados.</span>
          <a className="text-white-50" href="#inicio">
            Voltar ao topo
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

