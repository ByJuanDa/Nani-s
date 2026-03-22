import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

const products = [
  { name: 'Chuleta entera',    price: 74,  unit: 'kg', category: 'chuleta' },
  { name: 'Chuleta marcada',   price: 88,  unit: 'kg', category: 'chuleta' },
  { name: 'Chuleta de kilo',   price: 96,  unit: 'kg', category: 'chuleta' },
  { name: 'Pierna española',   price: 90,  unit: 'kg', category: 'pierna'  },
  { name: 'Pierna kilo',       price: 94,  unit: 'kg', category: 'pierna'  },
  { name: 'Longaniza',         price: 60,  unit: 'kg', category: 'embutido'},
  { name: 'Tocino',            price: 96,  unit: 'kg', category: 'tocino'  },
  { name: 'Tocino kilo',       price: 100, unit: 'kg', category: 'tocino'  },
  { name: 'Queso de puerco',   price: 80,  unit: 'kg', category: 'queso'   },
  { name: 'Jamón preferente',  price: 90,  unit: 'kg', category: 'jamon'   },
  { name: 'Jamón York',        price: 100, unit: 'kg', category: 'jamon'   },
  { name: 'Chistorra',         price: 100, unit: 'kg', category: 'embutido'},
  { name: 'Argentino',         price: 100, unit: 'kg', category: 'embutido'},
  { name: 'Longaniza 1ra',     price: 100, unit: 'kg', category: 'embutido'},
  { name: 'Queso Oaxaca',      price: 110, unit: 'kg', category: 'queso'   },
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
