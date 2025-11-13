import { useState, useEffect } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  eager?: boolean
}

const ProductImage = ({ src, alt, className = '', fallbackSrc, eager = false }: ProductImageProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const defaultFallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW0gZG8gUHJvZHV0bzwvdGV4dD48L3N2Zz4='

  // Atualizar a imagem quando o src prop mudar
  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
    setIsLoading(true)
  }, [src])

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc(fallbackSrc || defaultFallback)
      setIsLoading(false)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && (
        <div 
          className="image-skeleton" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'skeleton-loading 1.5s ease-in-out infinite',
            borderRadius: 'inherit',
            zIndex: 1
          }}
          aria-hidden="true"
        />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          objectFit: 'cover',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </>
  )
}

export default ProductImage

