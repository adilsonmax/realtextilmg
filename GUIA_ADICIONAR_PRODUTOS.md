# Guia para Adicionar Produtos ao Catálogo

Este guia explica como adicionar novos produtos ao catálogo do site.

## Estrutura de Dados

Os produtos são definidos no arquivo `src/data/products.ts`. Cada produto segue a estrutura do tipo `Product`:

```typescript
{
  id: string                    // ID único do produto (ex: '1', 'produto-2527')
  code: string                  // Código do produto (ex: '2527')
  title: string                 // Nome do produto (ex: 'Corta Vento Hidrofóbico 2527')
  description: string           // Descrição curta (aparece no card)
  fullDescription?: string      // Descrição completa (aparece no modal)
  images: string[]              // Array de caminhos das imagens
  category: ProductCategory     // Categoria: 'Tecidos Leves', 'Tecidos Médios', 'Tecidos Pesados', ou 'Telas, tules e arrastão'
  composition?: string          // Composição do tecido (ex: '100% Poliéster')
  width?: string                // Largura (ex: '150cm')
  weight?: string               // Gramatura (ex: '120g/m²')
  yield?: string                // Rendimento (ex: '1,20m')
  technologies?: string[]       // Array de tecnologias (ex: ['Hidrofóbico', 'Corta Vento'])
  colors?: string[]             // Array de cores disponíveis (ex: ['Preto', 'Azul'])
  indications?: string[]        // Array de indicações de uso (ex: ['Esportivo', 'Fitness'])
}
```

## Passo a Passo

### 1. Adicionar Imagens do Produto

1. Salve as imagens do produto na pasta `public/images/products/`
2. Use nomes descritivos, por exemplo:
   - `2527-1.jpg` (imagem principal)
   - `2527-2.jpg` (imagem secundária)
   - `2527-3.jpg` (detalhe do tecido)

### 2. Adicionar Produto ao Arquivo de Dados

Abra `src/data/products.ts` e adicione um novo objeto ao array `products`:

```typescript
{
  id: '1',
  code: '2527',
  title: 'Corta Vento Hidrofóbico 2527',
  description: 'Tecido corta vento com tratamento hidrofóbico para atividades outdoor',
  fullDescription: 'Tecido tecnológico desenvolvido para oferecer proteção contra vento e água. Ideal para atividades esportivas ao ar livre, oferecendo conforto e durabilidade.',
  images: [
    '/images/products/2527-1.jpg',
    '/images/products/2527-2.jpg',
    '/images/products/2527-3.jpg'
  ],
  category: 'Tecidos Leves',
  composition: '100% Poliéster',
  width: '150cm',
  weight: '120g/m²',
  yield: '1,20m',
  technologies: ['Hidrofóbico', 'Corta Vento', 'Respirável'],
  colors: ['Preto', 'Azul', 'Vermelho', 'Verde'],
  indications: ['Esportivo', 'Fitness', 'Outdoor', 'Ciclismo']
}
```

### 3. Categorias Disponíveis

Use exatamente uma das seguintes categorias:
- `'Tecidos Leves'`
- `'Tecidos Médios'`
- `'Tecidos Pesados'`
- `'Telas, tules e arrastão'`

### 4. Campos Opcionais

Os seguintes campos são opcionais (podem ser omitidos):
- `fullDescription`
- `composition`
- `width`
- `weight`
- `yield`
- `technologies`
- `colors`
- `indications`

### 5. Verificar

Após adicionar o produto:
1. Salve o arquivo `src/data/products.ts`
2. O servidor de desenvolvimento deve recarregar automaticamente
3. Verifique se o produto aparece na galeria
4. Clique no produto para verificar se o modal está exibindo todas as informações corretamente

## Exemplo Completo

```typescript
export const products: Product[] = [
  {
    id: '1',
    code: '2527',
    title: 'Corta Vento Hidrofóbico 2527',
    description: 'Tecido corta vento com tratamento hidrofóbico',
    fullDescription: 'Descrição completa do produto...',
    images: ['/images/products/2527-1.jpg'],
    category: 'Tecidos Leves',
    composition: '100% Poliéster',
    width: '150cm',
    weight: '120g/m²',
    technologies: ['Hidrofóbico', 'Corta Vento'],
    colors: ['Preto', 'Azul'],
    indications: ['Esportivo', 'Fitness']
  },
  {
    id: '2',
    code: '3001',
    title: 'Tecido Médio 3001',
    description: 'Tecido de gramatura média para uso geral',
    images: ['/images/products/3001-1.jpg'],
    category: 'Tecidos Médios',
    composition: '80% Poliéster, 20% Elastano'
  }
  // Adicione mais produtos aqui...
]
```

## Dicas

- Use IDs únicos para cada produto
- Mantenha os códigos dos produtos consistentes com o catálogo físico
- Adicione pelo menos uma imagem para cada produto
- Use descrições claras e objetivas
- Organize as imagens por código do produto para facilitar a manutenção

## Imagem de Fallback

Se uma imagem não for encontrada, o sistema usará automaticamente uma imagem placeholder. Para personalizar, adicione uma imagem em `public/images/placeholder-product.jpg`.

