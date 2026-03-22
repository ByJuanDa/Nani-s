const floatingIcons = [
  { emoji: '🥩', cls: 'top-[15%] left-[8%]  text-4xl animate-float      opacity-20' },
  { emoji: '🍖', cls: 'top-[20%] right-[10%] text-5xl animate-float-slow  opacity-20' },
  { emoji: '🌭', cls: 'bottom-[25%] left-[5%]  text-3xl animate-float-reverse opacity-15' },
  { emoji: '🥓', cls: 'top-[55%] right-[7%]  text-4xl animate-float      opacity-20' },
  { emoji: '🧀', cls: 'bottom-[30%] right-[20%] text-3xl animate-float-slow  opacity-15' },
  { emoji: '🍱', cls: 'top-[70%] left-[15%] text-3xl animate-float-reverse opacity-15' },
]

export default function Hero() {
  return (
    <section className="relative bg-[#8B0000] min-h-screen flex items-center overflow-hidden">

      {/* Blobs animados de fondo */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C62828] animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-20 w-[450px] h-[450px] rounded-full bg-[#1B5E20] animate-pulse-glow animate-delay-2s" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7B0000] opacity-30 animate-drift" />

      {/* Íconos flotantes decorativos */}
      {floatingIcons.map((f) => (
        <span key={f.emoji} className={`absolute pointer-events-none select-none ${f.cls}`}>
          {f.emoji}
        </span>
      ))}

      {/* Líneas decorativas */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto px-4 py-32 flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left animate-slide-up">
          <span className="inline-block bg-[#1B5E20] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Frescura y calidad todos los días
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Las mejores<br />
            <span className="text-red-300">carnes frías</span><br />
            a tu puerta
          </h1>
          <p className="text-red-200 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Chuletas, pierna, jamón, tocino, embutidos y más.
            Calidad garantizada directo del productor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#productos"
              className="bg-white text-[#8B0000] font-black text-base px-8 py-4 rounded-full hover:bg-red-100 transition-colors shadow-lg"
            >
              Ver productos
            </a>
            <a
              href="https://wa.me/5539784045"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              55 3978 4045
            </a>
          </div>
        </div>

        {/* Badge card */}
        <div className="flex-shrink-0 animate-float-slow">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-64 text-center">
            <div className="bg-[#1B5E20] rounded-2xl p-6 mb-4">
              <p className="text-white font-black text-4xl">15+</p>
              <p className="text-green-200 text-sm font-semibold mt-1">productos</p>
            </div>
            <p className="text-[#8B0000] font-black text-lg">Lista de Precios</p>
            <p className="text-gray-500 text-sm mt-1">Desde $60/kg</p>
            <a
              href="#productos"
              className="mt-4 block bg-[#8B0000] text-white font-bold text-sm px-4 py-2.5 rounded-full hover:bg-[#C62828] transition-colors"
            >
              Ver lista completa
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
