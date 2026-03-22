import { Request, Response } from 'express'
import { prisma } from '../lib/prisma'
import { resend } from '../lib/mailer'

export const sendMessage = async (req: Request, res: Response) => {
  const { name, phone, message } = req.body

  if (!name || !phone || !message) {
    res.status(400).json({ success: false, error: 'Todos los campos son requeridos' })
    return
  }

  try {
    await prisma.contactMessage.create({ data: { name, phone, message } })

    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'chikonanis11@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:auto;border:1px solid #eee;border-radius:12px;overflow:hidden">
          <div style="background:#8B0000;padding:20px 24px">
            <h2 style="color:#fff;margin:0;font-size:18px">Nuevo mensaje de contacto</h2>
            <p style="color:#ffaaaa;margin:4px 0 0;font-size:13px">Nani's Carnes Frías</p>
          </div>
          <div style="padding:24px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;width:90px">Nombre</td>
                <td style="padding:8px 0;font-weight:bold;color:#1a1a1a">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px">Teléfono</td>
                <td style="padding:8px 0;font-weight:bold;color:#1a1a1a">
                  <a href="tel:${phone}" style="color:#8B0000;text-decoration:none">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top">Mensaje</td>
                <td style="padding:8px 0;color:#1a1a1a">${message}</td>
              </tr>
            </table>
            <div style="margin-top:20px;text-align:center">
              <a href="https://wa.me/${phone.replace(/\D/g, '')}"
                 style="display:inline-block;background:#1B5E20;color:#fff;font-weight:bold;padding:12px 24px;border-radius:50px;text-decoration:none;font-size:14px">
                Responder por WhatsApp
              </a>
            </div>
          </div>
          <div style="background:#f9f9f9;padding:12px 24px;text-align:center;color:#aaa;font-size:11px">
            Nani's Carnes Frías · chikonanis11@gmail.com
          </div>
        </div>
      `,
    }).catch((err: unknown) => {
      console.error('Error al enviar correo:', err)
    })

    res.json({ success: true, message: 'Mensaje recibido, te contactaremos pronto.' })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Error al procesar mensaje:', msg)
    res.status(500).json({ success: false, error: msg })
  }
}
