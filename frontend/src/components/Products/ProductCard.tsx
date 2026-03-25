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

const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  chuleta:  { bg: 'bg-red-50',    text: 'text-red-700',    badge: 'bg-red-100 text-red-700' },
  pierna:   { bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-700' },
  embutido: { bg: 'bg-yellow-50', text: 'text-yellow-700', badge: 'bg-yellow-100 text-yellow-700' },
  tocino:   { bg: 'bg-amber-50',  text: 'text-amber-700',  badge: 'bg-amber-100 text-amber-700' },
  queso:    { bg: 'bg-green-50',  text: 'text-green-700',  badge: 'bg-green-100 text-green-700' },
  jamon:    { bg: 'bg-pink-50',   text: 'text-pink-700',   badge: 'bg-pink-100 text-pink-700' },
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
  const color = categoryColors[product.category] ?? { bg: 'bg-gray-50', text: 'text-gray-700', badge: 'bg-gray-100 text-gray-700' }
  const icon  = categoryIcons[product.category] ?? '🥩'
  const image = productImages[product.name]

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Área de imagen */}
      <div className={`relative w-full aspect-[4/3] ${color.bg} overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover scale-150 group-hover:scale-[1.65] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            {icon}
          </div>
        )}

        {/* Badge categoría sobre imagen */}
        <span className={`absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${color.badge} backdrop-blur-sm`}>
          {product.category}
        </span>

        {/* Badge popular */}
        {product.popular && (
          <span className="absolute top-2 right-2 bg-[#8B0000] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-3 flex flex-col gap-1 flex-1">
        <h3 className="font-bold text-gray-900 text-sm leading-snug">{product.name}</h3>

        {product.presentation && (
          <span className="text-[11px] text-gray-400 font-medium">{product.presentation}</span>
        )}

        <div className="mt-auto pt-2">
          <span className="text-lg font-black text-[#8B0000]">${product.price}</span>
          <span className="text-gray-400 text-xs ml-1">/ {product.unit}</span>
        </div>
      </div>
    </div>
  )
}
