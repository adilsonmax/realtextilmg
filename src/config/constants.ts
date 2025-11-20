// Configurações e constantes da aplicação

export const COMPANY_INFO = {
  name: 'Real Têxtil MG',
  email: 'realtextil@realtextilmg.com.br',
  phone: '(37) 3213-7711',
  phoneRaw: '553732137711',
  whatsapp: {
    number: '5537999813287',
    formatted: '(37) 99981-3287',
    message: 'Olá! Gostaria de conhecer os tecidos tecnológicos da Real Têxtil MG.'
  },
  address: {
    street: 'Rua Espírito Santo, 611',
    neighborhood: 'Centro',
    city: 'Divinópolis',
    state: 'MG',
    zipCode: '35500-030',
    full: 'Rua Espírito Santo, 611 - Centro, Divinópolis - MG, 35500-030'
  },
  social: {
    facebook: 'https://www.facebook.com/realtextilmg',
    instagram: 'https://www.instagram.com/realtextilmg',
    tiktok: 'https://www.tiktok.com/@realtextilmg',
    googleBusiness: 'https://g.page/r/CZtl1A8b-P5wEBM/review'
  },
  businessHours: {
    weekdays: 'Segunda a sexta, das 8h às 18h'
  }
} as const

export const WHATSAPP_URL = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodeURIComponent(COMPANY_INFO.whatsapp.message)}`

export const GOOGLE_MAPS = {
  query: encodeURIComponent(COMPANY_INFO.address.full),
  directionsUrl: `https://www.google.com/maps/dir/Current+Location/${encodeURIComponent(COMPANY_INFO.address.full)}`,
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.address.full)}&output=embed`
} as const

