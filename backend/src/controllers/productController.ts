import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({ orderBy: { category: 'asc' } })
    res.json({ success: true, data: products })
  } catch (error) {
    console.error('Error al obtener productos:', error)
    res.status(500).json({ success: false, error: 'Error interno del servidor' })
  }
}
