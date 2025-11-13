import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppFloatButton = () => {
  const whatsappNumber = '5537999813287'
  const whatsappMessage = encodeURIComponent('Olá! Gostaria de conhecer os tecidos tecnológicos da Real Têxtil MG.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-button"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WhatsAppFloatButton

