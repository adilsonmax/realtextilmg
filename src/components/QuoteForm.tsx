import { useState, useEffect, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { COMPANY_INFO } from '../config/constants'
import { applyPhoneMask, validatePhone } from '../utils/phoneMask'

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
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState<{ type: 'success' | 'danger'; message: string } | null>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Focar no primeiro campo quando o modal abrir
  useEffect(() => {
    if (show && firstInputRef.current) {
      setTimeout(() => {
        firstInputRef.current?.focus()
      }, 100)
    }
  }, [show])

  // Limpar formulário quando fechar
  useEffect(() => {
    if (!show) {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        mensagem: ''
      })
      setErrors({})
      setAlert(null)
    }
  }, [show])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Aplicar máscara de telefone
    if (name === 'telefone') {
      const maskedValue = applyPhoneMask(value)
      setFormData(prev => ({
        ...prev,
        [name]: maskedValue
      }))
      // Limpar erro do campo quando começar a digitar
      if (errors[name]) {
        setErrors(prev => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
      // Limpar erro do campo quando começar a digitar
      if (errors[name]) {
        setErrors(prev => {
          const newErrors = { ...prev }
          delete newErrors[name]
          return newErrors
        })
      }
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = 'Nome deve ter pelo menos 3 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório'
    } else if (!validatePhone(formData.telefone)) {
      newErrors.telefone = 'Telefone inválido'
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória'
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setAlert(null)

    if (!validateForm()) {
      setAlert({
        type: 'danger',
        message: 'Por favor, corrija os erros no formulário.'
      })
      return
    }

    setLoading(true)

    try {
      // Sanitizar dados antes de enviar
      const sanitizedData = {
        nome: formData.nome.trim(),
        email: formData.email.trim().toLowerCase(),
        telefone: formData.telefone.trim(),
        empresa: formData.empresa.trim() || 'Não informado',
        mensagem: formData.mensagem.trim()
      }

      const subject = encodeURIComponent('Solicitação de Orçamento - Real Têxtil MG')
      const body = encodeURIComponent(`
Nome: ${sanitizedData.nome}
Email: ${sanitizedData.email}
Telefone: ${sanitizedData.telefone}
Empresa: ${sanitizedData.empresa}

Mensagem:
${sanitizedData.mensagem}
      `)
      
      const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`
      window.location.href = mailtoLink

      // Mostrar sucesso
      setAlert({
        type: 'success',
        message: 'Formulário preenchido! Seu cliente de email será aberto para envio.'
      })
      setLoading(false)
      
      // Fechar modal após 2 segundos
      setTimeout(() => {
        onHide()
      }, 2000)

    } catch (error) {
      setAlert({
        type: 'danger',
        message: 'Erro ao processar formulário. Por favor, tente novamente.'
      })
      setLoading(false)
    }
  }

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      size="lg" 
      centered 
      className="quote-form-modal"
      aria-labelledby="quote-form-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="quote-form-title">Solicitar Orçamento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {alert && (
          <Alert variant={alert.type} className="mb-4" dismissible onClose={() => setAlert(null)}>
            {alert.message}
          </Alert>
        )}
        <Form onSubmit={handleSubmit} noValidate>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="nome">Nome completo *</Form.Label>
                <Form.Control
                  id="nome"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  isInvalid={!!errors.nome}
                  ref={firstInputRef}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                />
                <Form.Control.Feedback type="invalid" id="nome-error">
                  {errors.nome}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email *</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  isInvalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <Form.Control.Feedback type="invalid" id="email-error">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="telefone">Telefone *</Form.Label>
                <Form.Control
                  id="telefone"
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  isInvalid={!!errors.telefone}
                  aria-describedby={errors.telefone ? "telefone-error" : undefined}
                />
                <Form.Control.Feedback type="invalid" id="telefone-error">
                  {errors.telefone}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Digite apenas números, a formatação será aplicada automaticamente
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="empresa">Empresa</Form.Label>
                <Form.Control
                  id="empresa"
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
                <Form.Label htmlFor="mensagem">Mensagem *</Form.Label>
                <Form.Control
                  id="mensagem"
                  as="textarea"
                  rows={5}
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  placeholder="Descreva sua necessidade, quantidade aproximada, prazo desejado e outras informações relevantes..."
                  isInvalid={!!errors.mensagem}
                  aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                />
                <Form.Control.Feedback type="invalid" id="mensagem-error">
                  {errors.mensagem}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex gap-2 justify-content-end mt-4">
            <Button variant="secondary" onClick={onHide} disabled={loading} type="button">
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

