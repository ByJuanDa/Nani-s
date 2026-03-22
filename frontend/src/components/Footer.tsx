export default function Footer() {
  return (
    <footer className="bg-[#4A0000] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-2xl font-black tracking-widest">NANI'S</p>
          <p className="text-red-300 text-sm">Carnes Frías · Frescura y calidad todos los días</p>
        </div>
        <div className="flex gap-6 text-sm text-red-300">
          <a href="#productos" className="hover:text-white transition-colors">Productos</a>
          <a href="#nosotros"  className="hover:text-white transition-colors">Nosotros</a>
          <a href="#contacto"  className="hover:text-white transition-colors">Contacto</a>
        </div>
        <p className="text-red-400 text-xs">© {new Date().getFullYear()} Nani's. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
