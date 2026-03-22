import ProductGrid from '../components/Products/ProductGrid'

const products = [
  { id: 1,  name: 'Chuleta entera',    price: 74,  unit: 'kg', category: 'chuleta'  },
  { id: 2,  name: 'Chuleta marcada',   price: 88,  unit: 'kg', category: 'chuleta'  },
  { id: 3,  name: 'Chuleta de kilo',   price: 96,  unit: 'kg', category: 'chuleta'  },
  { id: 4,  name: 'Pierna española',   price: 90,  unit: 'kg', category: 'pierna'   },
  { id: 5,  name: 'Pierna kilo',       price: 94,  unit: 'kg', category: 'pierna'   },
  { id: 6,  name: 'Longaniza',         price: 60,  unit: 'kg', category: 'embutido' },
  { id: 7,  name: 'Tocino',            price: 96,  unit: 'kg', category: 'tocino'   },
  { id: 8,  name: 'Tocino kilo',       price: 100, unit: 'kg', category: 'tocino'   },
  { id: 9,  name: 'Queso de puerco',   price: 80,  unit: 'kg', category: 'queso'    },
  { id: 10, name: 'Jamón preferente',  price: 90,  unit: 'kg', category: 'jamon'    },
  { id: 11, name: 'Jamón York',        price: 100, unit: 'kg', category: 'jamon'    },
  { id: 12, name: 'Chistorra',         price: 100, unit: 'kg', category: 'embutido' },
  { id: 13, name: 'Argentino',         price: 100, unit: 'kg', category: 'embutido' },
  { id: 14, name: 'Longaniza 1ra',     price: 100, unit: 'kg', category: 'embutido' },
  { id: 15, name: 'Queso Oaxaca',      price: 110, unit: 'kg', category: 'queso'    },
]

export default function ProductsSection() {
  return (
    <section id="productos" className="bg-[#FFF8F0] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#8B0000] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Lista de precios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Nuestros <span className="text-[#8B0000]">productos</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
            Todos los precios son por kilogramo. Pregunta por promociones y pedidos al mayoreo.
          </p>
        </div>

        <ProductGrid products={products} />

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5539784045"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#C62828] text-white font-black text-base px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hacer un pedido ahora
          </a>

          <a
            href="/lista-precios.pdf"
            download="Lista de Precios Nani's.pdf"
            className="inline-flex items-center gap-3 bg-white hover:bg-[#FFF8F0] text-[#8B0000] font-black text-base px-8 py-4 rounded-full transition-colors shadow-lg border-2 border-[#8B0000]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
            </svg>
            Descargar lista de precios
          </a>
        </div>
      </div>
    </section>
  )
}
