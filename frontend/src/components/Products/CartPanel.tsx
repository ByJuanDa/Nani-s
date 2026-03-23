type Product = {
  id: number
  name: string
  price: number
  unit: string
  category: string
  description?: string
  presentation?: string
}

type CartItem = { product: Product; qty: number }

export default function CartPanel({
  items,
  onRemove,
  onQtyChange,
  onClose,
}: {
  items: CartItem[]
  onRemove: (id: number) => void
  onQtyChange: (id: number, qty: number) => void
  onClose: () => void
}) {
  const lines = items
    .map((i) =>
      `• ${i.product.name}${i.product.presentation ? ` (${i.product.presentation})` : ''} x${i.qty} ${i.product.unit} — $${i.product.price}/${i.product.unit}`
    )
    .join('\n')

  const waUrl = `https://wa.me/5539784045?text=${encodeURIComponent(
    `Hola! Me gustaría hacer el siguiente pedido:\n\n${lines}\n\n¿Me pueden confirmar disponibilidad y total?`
  )}`

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 flex flex-col gap-4 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-black text-gray-900 text-lg">Tu pedido</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-6">Aún no has agregado productos</p>
        ) : (
          <>
            <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="flex items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-800 truncate">{product.name}</p>
                    {product.presentation && (
                      <p className="text-[11px] text-gray-400">{product.presentation}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => onQtyChange(product.id, qty - 1)}
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-bold">{qty}</span>
                    <button
                      onClick={() => onQtyChange(product.id, qty + 1)}
                      className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-black text-[#8B0000] w-14 text-right flex-shrink-0">
                    ${product.price * qty}
                  </span>
                  <button
                    onClick={() => onRemove(product.id)}
                    className="text-gray-300 hover:text-red-400 text-xs ml-1 flex-shrink-0"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-bold text-sm px-5 py-3 rounded-full transition-colors w-full"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar pedido por WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
