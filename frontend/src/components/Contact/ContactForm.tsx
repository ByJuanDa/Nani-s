import { useState, FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="flex flex-col items-center justify-center py-10 gap-5 animate-slide-up">
        {/* Checkmark animado */}
        <div className="relative flex items-center justify-center w-20 h-20">
          <div className="absolute w-20 h-20 rounded-full bg-green-100 animate-ping opacity-30" />
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-900 font-black text-xl mb-1">¡Mensaje enviado!</p>
          <p className="text-gray-500 text-sm">Te contactaremos pronto por WhatsApp o teléfono.</p>
        </div>

        <a
          href="https://wa.me/5539784045"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Escribir por WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-gray-400 hover:text-gray-600 text-xs underline transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
        <input
          required
          type="text"
          placeholder="Tu nombre completo"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
        <input
          required
          type="tel"
          placeholder="55 0000 0000"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
        <textarea
          required
          rows={4}
          placeholder="¿Qué productos te interesan? ¿Cuántos kilos necesitas?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="relative bg-[#8B0000] hover:bg-[#C62828] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors text-sm overflow-hidden"
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Enviando...
          </span>
        ) : 'Enviar mensaje'}
      </button>

      {status === 'error' && (
        <p className="text-red-700 text-sm font-semibold text-center bg-red-50 rounded-lg py-2 animate-slide-up">
          Hubo un error. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}
    </form>
  )
}
