type Product = {
  id: number
  name: string
  price: number
  unit: string
  category: string
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

export default function ProductCard({ product }: { product: Product }) {
  const color = categoryColors[product.category] ?? { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' }
  const icon  = categoryIcons[product.category] ?? '🥩'

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-[#8B0000]/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-5 flex flex-col gap-3 overflow-hidden">

      {/* Fondo decorativo en hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/0 to-[#8B0000]/0 group-hover:from-[#8B0000]/3 group-hover:to-transparent transition-all duration-300 rounded-2xl" />

      {/* Badge popular */}
      {product.popular && (
        <span className="absolute top-3 right-3 bg-[#8B0000] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
          Popular
        </span>
      )}

      {/* Ícono */}
      <div className={`w-12 h-12 rounded-xl ${color.bg} flex items-center justify-center text-2xl border ${color.border}`}>
        {icon}
      </div>

      {/* Badge categoría */}
      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit border ${color.bg} ${color.text} ${color.border}`}>
        {product.category}
      </span>

      {/* Nombre */}
      <h3 className="font-bold text-gray-800 text-sm leading-snug">{product.name}</h3>

      {/* Precio + botón */}
      <div className="mt-auto flex items-center justify-between gap-2">
        <div>
          <span className="text-2xl font-black text-[#8B0000]">${product.price}</span>
          <span className="text-gray-400 text-xs ml-1">/ {product.unit}</span>
        </div>
        <a
          href={`https://wa.me/5539784045?text=Hola, me interesa ${product.name} ($${product.price}/kg)`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
        >
          Pedir
        </a>
      </div>
    </div>
  )
}
