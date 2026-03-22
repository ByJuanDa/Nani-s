import { useState } from 'react'

const links = [
  { href: '#productos', label: 'Productos' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#8B0000] shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Nani's Carnes Frías"
            width={56}
            height={56}
            className="rounded-full object-cover ring-2 ring-white bg-white"
          />
          <span className="text-sm text-white font-black tracking-widest">NANI'S</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white font-semibold text-sm tracking-wide hover:text-red-200 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5539784045"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-sm px-5 py-2 rounded-full transition-colors"
          >
            Ordenar ahora
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="md:hidden text-white p-2"
          aria-label="Menú"
        >
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#7B0000] px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white font-semibold py-2 border-b border-red-800"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5539784045"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1B5E20] text-white font-bold text-sm px-5 py-2 rounded-full text-center mt-2"
          >
            Ordenar ahora
          </a>
        </nav>
      )}
    </header>
  )
}
