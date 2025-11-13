import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface QuoteFormProps {
  show: boolean
  onHide: () => void
}

const QuoteForm = ({ show, onHide }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  })
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{ type: 'success' | 'danger'; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setAlert(null)

    try {
      // Usando mailto como fallback - pode ser substituído por EmailJS ou outro serviço
      const subject = encodeURIComponent('Solicitação de Orçamento - Real Têxtil MG')
      const body = encodeURIComponent(`
Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Empresa: ${formData.empresa || 'Não informado'}

Mensagem:
${formData.mensagem}
      `)
      
      const mailtoLink = `mailto:realtextil@realtextilmg.com.br?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      // Simular sucesso após um pequeno delay
      setTimeout(() => {
        setAlert({
          type: 'success',
          message: 'Formulário preenchido! Seu cliente de email será aberto para envio.'
        })
        setLoading(false)
        
        // Limpar formulário após 3 segundos
        setTimeout(() => {
          setFormData({
            nome: '',
            email: '',
            telefone: '',
            empresa: '',
            mensagem: ''
          })
          setAlert(null)
        }, 3000)
      }, 500)

    } catch (error) {
      setAlert({
        type: 'danger',
        message: 'Erro ao processar formulário. Por favor, tente novamente.'
      })
      setLoading(false)
    }
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered className="quote-form-modal">
      <Modal.Header closeButton>
        <Modal.Title>Solicitar Orçamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {alert && (
          <Alert variant={alert.type} className="mb-4">
            {alert.message}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome completo *</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Telefone *</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa (opcional)"
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Mensagem *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  placeholder="Descreva sua necessidade, quantidade aproximada, prazo desejado e outras informações relevantes..."
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex gap-2 justify-content-end mt-4">
            <Button variant="secondary" onClick={onHide} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" className="btn-brand-primary" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Solicitação'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default QuoteForm

