import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../config/constants'

const WhatsAppFloatButton = () => {

  return (
    <a
      href={WHATSAPP_URL}
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

