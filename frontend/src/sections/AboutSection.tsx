import { useInView } from '../hooks/useInView'

const stats = [
  { value: '15+', label: 'Productos' },
  { value: 'Mayoreo', label: 'Y menudeo' },
  { value: 'Diario', label: 'Surtido' },
]

const ventajas = [
  { icon: '🏭', title: 'Directo del productor', desc: 'Sin intermediarios. Precio justo y frescura garantizada en cada pedido.' },
  { icon: '🚚', title: 'Entrega puntual', desc: 'Surtimos negocios, restaurantes y tiendas con entrega diaria en ruta.' },
  { icon: '📦', title: 'Mayoreo y menudeo', desc: 'Desde 1 kg hasta grandes volúmenes. Nos adaptamos a tu negocio.' },
]

const delayClass: Record<number, string> = {
  0:   'delay-0',
  120: 'delay-100',
  240: 'delay-200',
  400: 'delay-300',
}

function AnimatedCard({ children, delay = 0, from = 'bottom' }: {
  children: React.ReactNode
  delay?: 0 | 120 | 240 | 400
  from?: 'bottom' | 'left' | 'right'
}) {
  const { ref, visible } = useInView()
  const translate = from === 'left' ? '-translate-x-10' : from === 'right' ? 'translate-x-10' : 'translate-y-8'

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${delayClass[delay]} ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translate}`}`}
    >
      {children}
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <AnimatedCard>
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FFF8F0] text-[#8B0000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-red-100">
              Quiénes somos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
              Tu proveedor de confianza<br />
              <span className="text-[#8B0000]">en carnes frías</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Surtimos negocios, restaurantes, fondas y tiendas con los mejores cortes y embutidos.
              Frescura, precio justo y entrega puntual — todos los días.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Tarjeta de identidad */}
          <AnimatedCard from="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8B0000] to-[#5a0000] rounded-3xl p-8 text-white shadow-2xl">

                {/* Header de la tarjeta */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white rounded-full p-1.5 shadow-lg flex-shrink-0">
                    <img
                      src="/logo.png"
                      alt="Nani's"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-3xl font-black leading-none">NANI'S</p>
                    <p className="text-red-300 text-sm font-semibold mt-1">Proveedor de Carnes Frías</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-300 text-xs font-semibold">Disponible hoy</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-6" />

                {/* Slogan */}
                <p className="text-red-100 text-base leading-relaxed italic mb-6">
                  "Calidad que se ve, sabor que se disfruta."
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-white/10 hover:bg-white/20 transition-colors rounded-2xl p-4 text-center">
                      <p className="text-white font-black text-lg leading-tight">{s.value}</p>
                      <p className="text-red-300 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -bottom-5 -right-4 bg-[#1B5E20] text-white rounded-2xl px-5 py-3 shadow-xl text-center">
                <p className="font-black text-base">@chiko-nanis</p>
                <p className="text-green-300 text-xs">Síguenos en Instagram</p>
              </div>
            </div>
          </AnimatedCard>

          {/* Ventajas */}
          <div className="flex flex-col gap-5 mt-6 md:mt-0">
            {ventajas.map((v, i) => (
              <AnimatedCard key={v.title} from="right" delay={i * 120}>
                <div className="flex gap-4 items-start bg-[#FFF8F0] hover:bg-red-50 rounded-2xl p-5 border border-red-100 transition-colors">
                  <span className="text-3xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <p className="font-black text-gray-900 text-base mb-1">{v.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}

            <AnimatedCard delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="#contacto"
                  className="bg-[#8B0000] hover:bg-[#C62828] text-white font-bold px-7 py-3 rounded-full text-center transition-colors"
                >
                  Contáctanos
                </a>
                <a
                  href="#productos"
                  className="border-2 border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white font-bold px-7 py-3 rounded-full text-center transition-colors"
                >
                  Ver productos
                </a>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  )
}
