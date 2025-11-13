export type ProductCategory = 
  | 'Tecidos Leves'
  | 'Tecidos Médios'
  | 'Tecidos Pesados'
  | 'Telas, tules e arrastão'

export type Product = {
  id: string
  code: string
  title: string
  description: string
  fullDescription?: string
  images: string[]
  category: ProductCategory
  composition?: string
  width?: string
  weight?: string
  yield?: string
  technologies?: string[]
  colors?: string[]
  indications?: string[]
}

export const products: Product[] = [
  {
    id: '1',
    code: '2527',
    title: 'Corta Vento Hidrofóbico 2527',
    description: 'Tecido com tecnologia hidrofóbica, desenvolvido para confecção de vestuários no segmento fitness, esportivo entre outras aplicações.',
    fullDescription: 'Tecido com tecnologia hidrofóbica, desenvolvido para confecção de vestuários no segmento fitness, esportivo entre outras aplicações. O produto tem como característica principal caimento fluído, toque extra macio e alta resistência contra esgarçamento.',
    images: ['/images/products/2527-1.jpg', '/images/products/2527-2.jpg', '/images/products/2527-3.jpg'],
    category: 'Tecidos Leves',
    composition: '100% Poliéster',
    width: '150 Cm',
    weight: '75 Gm.',
    yield: 'Vendido em metro',
    technologies: ['Hidrofóbico', 'Respirabilidade', 'Secagem Rápida'],
    colors: ['Verde Neon', 'Preto', 'Azul', 'Vermelho'],
    indications: ['Fitness', 'Esportivo', 'Outdoor', 'Moda Esportiva']
  },
  {
    id: '2',
    code: '2408',
    title: 'Dry Duplo Poli Furadinho 2408',
    description: 'Malha dupla trabalhada em Microfibra de poliéster microsserrilhada de alta resistência contra desfiamento.',
    fullDescription: 'Malha dupla trabalhada em Microfibra de poliéster microsserrilhada de alta resistência contra desfiamento. Tecido com textura furadinho (perfurada) que oferece excelente respirabilidade e conforto.',
    images: ['/images/products/2408-1.jpg', '/images/products/2408-2.jpg', '/images/products/2408-3.jpg'],
    category: 'Tecidos Leves',
    composition: '100% Poliéster',
    width: '165 Cm',
    weight: undefined,
    yield: '466 Cm',
    technologies: ['Proteção UV', 'Conforto Térmico', 'Antibacteriano', 'Respirabilidade', 'Secagem Rápida', 'Alta Resistência'],
    colors: ['Azul Royal', 'Preto', 'Branco', 'Cinza'],
    indications: ['Fitness', 'Esportivo', 'Moda Esportiva', 'Vestuário Técnico']
  },
  {
    id: '3',
    code: '2468',
    title: 'Lycra Maquinetado 2468',
    description: 'Base com textura brilhante de alta durabilidade e elasticidade bi-way, ideal para fitness, esportes e moda praia.',
    fullDescription: 'Base com textura brilhante de alta durabilidade. Possui elasticidade para ambos os sentidos (bi-way), proporcionando maior conforto. O elastano se ajusta perfeitamente ao corpo dando maior mobilidade, segurança e performance. Essa base é ideal para o segmento fitness, práticas esportivas e praia na aplicação de biquínis, maiôs e sungas.',
    images: ['/images/products/2468-1.jpg', '/images/products/2468-2.jpg', '/images/products/2468-3.jpg'],
    category: 'Tecidos Médios',
    composition: '88% Poliamida 12% Elastano',
    width: '150 Cm',
    weight: undefined,
    yield: '270 Cm',
    technologies: ['Proteção UV', 'Conforto Térmico', 'Respirabilidade', 'Secagem Rápida', 'Elasticidade Bi-way', 'Alta Durabilidade', 'Compressão', 'Hidrofóbico'],
    colors: ['Consultar Disponibilidade'],
    indications: ['Fitness', 'Esportivo', 'Moda Praia', 'Biquínis', 'Maiôs', 'Sungas']
  }
]

