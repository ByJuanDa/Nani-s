import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const products = [
  {
    name: 'Chuleta entera',
    price: 74, unit: 'kg', category: 'chuleta',
    presentation: 'Por pieza',
    description: 'Chuleta de cerdo entera. Se vende por pieza completa, el precio es por kg según el peso final de la pieza.',
  },
  {
    name: 'Chuleta marcada',
    price: 88, unit: 'kg', category: 'chuleta',
    presentation: 'Por pieza',
    description: 'Chuleta de cerdo con corte marcado. Se vende por pieza, precio por kg según el peso final.',
  },
  {
    name: 'Chuleta de kilo',
    price: 96, unit: 'kg', category: 'chuleta',
    presentation: 'Paquete ~1 kg',
    description: 'Chuleta de cerdo en paquete de aproximadamente 1 kg. Ideal para compras pequeñas.',
  },
  {
    name: 'Pierna española',
    price: 90, unit: 'kg', category: 'pierna',
    presentation: 'Por pieza',
    description: 'Pierna de cerdo estilo español. Se vende por pieza entera, precio por kg según peso final.',
  },
  {
    name: 'Pierna kilo',
    price: 94, unit: 'kg', category: 'pierna',
    presentation: 'Paquete ~1 kg',
    description: 'Pierna de cerdo en paquete de aproximadamente 1 kg. Perfecta para porciones pequeñas.',
  },
  {
    name: 'Longaniza',
    price: 60, unit: 'kg', category: 'embutido',
    presentation: 'Por kg',
    description: 'Longaniza de cerdo fresca. Se vende por kilogramo.',
  },
  {
    name: 'Tocino (pieza)',
    price: 96, unit: 'kg', category: 'tocino',
    presentation: 'Por pieza ~3 kg',
    description: 'Tocino de cerdo en pieza entera. Cada pieza pesa aproximadamente 3 kg, precio por kg según peso final.',
  },
  {
    name: 'Tocino kilo',
    price: 100, unit: 'kg', category: 'tocino',
    presentation: 'Paquete ~1 kg',
    description: 'Tocino de cerdo en paquete de aproximadamente 1 kg. Ideal si no necesitas una pieza completa.',
  },
  {
    name: 'Queso de puerco',
    price: 80, unit: 'kg', category: 'queso',
    presentation: 'Por kg',
    description: 'Queso de puerco artesanal. Se vende por kilogramo.',
  },
  {
    name: 'Jamón preferente',
    price: 90, unit: 'kg', category: 'jamon',
    presentation: 'Por kg',
    description: 'Jamón de cerdo de calidad preferente. Se vende por kilogramo.',
  },
  {
    name: 'Jamón York',
    price: 100, unit: 'kg', category: 'jamon',
    presentation: 'Por kg',
    description: 'Jamón York de cerdo, cocido y suave. Se vende por kilogramo.',
  },
  {
    name: 'Chistorra',
    price: 100, unit: 'kg', category: 'embutido',
    presentation: 'Por kg',
    description: 'Chistorra estilo español, embutido fino y condimentado. Se vende por kilogramo.',
  },
  {
    name: 'Argentino',
    price: 100, unit: 'kg', category: 'embutido',
    presentation: 'Por kg',
    description: 'Embutido estilo argentino. Se vende por kilogramo.',
  },
  {
    name: 'Longaniza 1ra',
    price: 100, unit: 'kg', category: 'embutido',
    presentation: 'Por kg',
    description: 'Longaniza de primera calidad. Se vende por kilogramo.',
  },
  {
    name: 'Queso Oaxaca',
    price: 110, unit: 'kg', category: 'queso',
    presentation: 'Por kg',
    description: 'Queso Oaxaca artesanal, hebra suave y fresca. Se vende por kilogramo.',
  },
]

async function main() {
  console.log('Sembrando productos...')
  await prisma.product.deleteMany()
  await prisma.product.createMany({ data: products })
  console.log(`${products.length} productos insertados.`)
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
