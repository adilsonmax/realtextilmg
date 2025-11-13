// Função para aplicar máscara de telefone brasileiro
export const applyPhoneMask = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '')
  
  // Aplica máscara conforme o tamanho
  if (numbers.length <= 10) {
    // Telefone fixo: (00) 0000-0000
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
  } else {
    // Celular: (00) 00000-0000
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
  }
}

// Função para validar telefone brasileiro
export const validatePhone = (phone: string): boolean => {
  const numbers = phone.replace(/\D/g, '')
  // Aceita telefone fixo (10 dígitos) ou celular (11 dígitos)
  return numbers.length >= 10 && numbers.length <= 11
}

