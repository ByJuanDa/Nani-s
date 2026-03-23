import { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

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

const categories = ['todos', 'chuleta', 'pierna', 'embutido', 'tocino', 'queso', 'jamon']

const categoryEmoji: Record<string, string> = {
  todos:    '🛒',
  chuleta:  '🥩',
  pierna:   '🍖',
  embutido: '🌭',
  tocino:   '🥓',
  queso:    '🧀',
  jamon:    '🍱',
}

const delayClass: Record<number, string> = {
  0: 'td-0', 1: 'td-60', 2: 'td-120', 3: 'td-180', 4: 'td-240',
  5: 'td-300', 6: 'td-360', 7: 'td-420', 8: 'td-480', 9: 'td-540',
  10: 'td-600', 11: 'td-660', 12: 'td-720', 13: 'td-780', 14: 'td-840',
}

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const { ref, visible } = useInView(0.05)
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${delayClass[index] ?? 'td-0'} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  )
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState('todos')
  const [selected, setSelected] = useState<Product | null>(null)

  const filtered = active === 'todos' ? products : products.filter((p) => p.category === active)

  return (
    <div>
      {/* Pills de categoría */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`flex items-center gap-1.5 text-sm font-semibold capitalize px-4 py-2 rounded-full border transition-all duration-200 ${
              active === cat
                ? 'bg-[#8B0000] text-white border-[#8B0000] shadow-md scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:border-[#8B0000] hover:text-[#8B0000]'
            }`}
          >
            <span>{categoryEmoji[cat]}</span>
            <span>{cat === 'todos' ? 'Todos' : cat}</span>
          </button>
        ))}
      </div>

      {/* Grid con animación escalonada */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((p, i) => (
          <AnimatedCard key={p.id} index={i}>
            <ProductCard product={p} onClick={() => setSelected(p)} />
          </AnimatedCard>
        ))}
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
