import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  price: number
  unit: string
  category: string
  description?: string
  presentation?: string
  popular?: boolean
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  chuleta:  { bg: 'bg-red-50',    text: 'text-red-600',    border: 'border-red-200' },
  pierna:   { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  embutido: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
  tocino:   { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200' },
  queso:    { bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200' },
  jamon:    { bg: 'bg-pink-50',   text: 'text-pink-600',   border: 'border-pink-200' },
}

const categoryIcons: Record<string, string> = {
  chuleta:  '🥩',
  pierna:   '🍖',
  embutido: '🌭',
  tocino:   '🥓',
  queso:    '🧀',
  jamon:    '🍱',
}

const productImages: Record<string, string> = {
  'Chuleta entera':   '/products/chuleta_entera.jpeg',
  'Chuleta de kilo':  '/products/chuleta_1kg.jpeg',
  'Pierna española':  '/products/pierna_esp_pieza.jpeg',
  'Tocino (pieza)':   '/products/tocino_pieza.jpeg',
  'Tocino kilo':      '/products/tocino_1kg.jpeg',
  'Jamón preferente': '/products/jamon_preferente.jpeg',
  'Jamón York':       '/products/jamon_york.jpeg',
  'Chistorra':        '/products/chistorra.jpeg',
  'Argentino':        '/products/chorizo_argentino.jpeg',
}

export default function ProductModal({ product, onClose, onAdd }: { product: Product; onClose: () => void; onAdd: (p: Product) => void }) {
  const color = categoryColors[product.category] ?? { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' }
  const icon  = categoryIcons[product.category] ?? '🥩'
  const image = productImages[product.name]
  const [lightbox, setLightbox] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <>
    {lightbox && (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 cursor-zoom-out"
        onClick={() => setLightbox(false)}
      >
        <img src={image!} alt={product.name} className="max-w-full max-h-full object-contain p-4" />
        <button
          type="button"
          onClick={() => setLightbox(false)}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        >
          ✕
        </button>
      </div>
    )}
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-sm w-full flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen o header con ícono */}
        {image ? (
          <div className="relative w-full h-48">
            <img
              src={image}
              alt={product.name}
              onClick={(e) => { e.stopPropagation(); setLightbox(true) }}
              className="w-full h-full object-contain p-2 cursor-zoom-in"
            />
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 transition-colors text-xl leading-none w-8 h-8 rounded-full flex items-center justify-center shadow"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-3 p-6 pb-0">
            <div className={`w-14 h-14 rounded-2xl ${color.bg} flex items-center justify-center text-3xl border ${color.border} flex-shrink-0`}>
              {icon}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none mt-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* Contenido */}
        <div className="p-6 flex flex-col gap-4">
          {/* Categoría + nombre */}
          <div>
            <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${color.bg} ${color.text} ${color.border}`}>
              {product.category}
            </span>
            <h2 className="text-xl font-black text-gray-900 mt-2">{product.name}</h2>
          </div>

          {/* Presentación */}
          {product.presentation && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Presentación:</span>
              <span className="text-xs font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {product.presentation}
              </span>
            </div>
          )}

          {/* Descripción */}
          {product.description && (
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          )}

          {/* Precio + botón */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div>
              <span className="text-3xl font-black text-[#8B0000]">${product.price}</span>
              <span className="text-gray-400 text-sm ml-1">/ {product.unit}</span>
            </div>
            <button
              type="button"
              onClick={() => { onAdd(product); onClose() }}
              className="bg-[#8B0000] hover:bg-[#C62828] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
