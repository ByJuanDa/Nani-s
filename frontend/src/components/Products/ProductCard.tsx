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

export default function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  const color = categoryColors[product.category] ?? { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' }
  const icon  = categoryIcons[product.category] ?? '🥩'
  const image = productImages[product.name]

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl border border-gray-100 hover:border-[#8B0000]/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Badge popular */}
      {product.popular && (
        <span className="absolute top-3 right-3 z-10 bg-[#8B0000] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow">
          Popular
        </span>
      )}

      {/* Imagen o área de ícono */}
      {image ? (
        <div className="w-full h-36 overflow-hidden">
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className={`w-full h-36 ${color.bg} flex items-center justify-center text-5xl border-b ${color.border}`}>
          {icon}
        </div>
      )}

      {/* Contenido */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        {/* Badge categoría */}
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full w-fit border ${color.bg} ${color.text} ${color.border}`}>
          {product.category}
        </span>

        {/* Nombre */}
        <h3 className="font-bold text-gray-800 text-sm leading-snug">{product.name}</h3>

        {/* Presentación */}
        {product.presentation && (
          <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full w-fit font-medium">
            {product.presentation}
          </span>
        )}

        {/* Precio */}
        <div className="mt-auto pt-2">
          <span className="text-xl font-black text-[#8B0000]">${product.price}</span>
          <span className="text-gray-400 text-xs ml-1">/ {product.unit}</span>
        </div>
      </div>
    </div>
  )
}
