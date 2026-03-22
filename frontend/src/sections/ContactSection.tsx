import ContactForm from '../components/Contact/ContactForm'
import ContactInfo from '../components/Contact/ContactInfo'

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-[#FFF8F0] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#8B0000] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Haz tu <span className="text-[#8B0000]">pedido</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg max-w-md mx-auto">
            Escríbenos y te atendemos al momento.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <ContactInfo />
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-black text-gray-900 mb-6">Envíanos un mensaje</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
