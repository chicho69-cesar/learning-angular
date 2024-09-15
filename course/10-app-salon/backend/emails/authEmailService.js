import { createTransport } from '../config/nodemailer.js'

export async function sendEmailVerification({ name, email, token }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_POST,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

  const info = await transporter.sendMail({
    from: 'AppSalon <cuentas@appsalon.com',
    to: 'correo@correo.com',
    subject: 'AppSalon - Confirma tu cuenta',
    text: 'AppSalon - Confirma tu cuenta',
    html: `
      <p>Hola: ${name}, confirma tu cuenta en AppSalon</p>
      <p>Tu cuenta esta casi lista, solo debes confirmarla en el siguiente enlace:</p>
      <a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar cuenta</a>
      <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
    `
  })
}

export async function sendEmailPasswordReset({ name, email, token }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_POST,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

  const info = await transporter.sendMail({
    from: 'AppSalon <cuentas@appsalon.com',
    to: email,
    subject: 'AppSalon - Restablece tu Password',
    text: 'AppSalon - Restablece tu Password',
    html: `
      <p>Hola: ${name}, has solicitado restablecer tu password</p>
      <p>Sigue el siguiente enlace para generar un nuevo password:</p>
      <a href="${process.env.FRONTEND_URL}/auth/olvide-password/${token}">Restablecer Password</a>
      <p>Si tu no solicitaste esto, puedes ignorar este mensaje</p>
    `
  })
}
