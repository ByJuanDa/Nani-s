process.on('unhandledRejection', (err) => { console.error('UNHANDLED REJECTION:', err) })
process.on('uncaughtException',  (err) => { console.error('UNCAUGHT EXCEPTION:', err)  })

import express from 'express'
import cors from 'cors'
import productRoutes from './routes/products'
import contactRoutes from './routes/contact'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/contact', contactRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
