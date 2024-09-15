import { createTransport } from '../config/nodemailer.js'

export async function sendEmailNewAppointment({ date, time }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_POST,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )
  
  const info = await transporter.sendMail({
    from: 'AppSalon <citas@appsalon.com',
    to: 'admin@appsalon.com',
    subject: 'AppSalon - Nueva Cita',
    text: 'AppSalon - Confirma tu cuenta',
    html: `
      <p>Hola: Admin, tienes una nueva cita</p>
      <p>La cita será el día: ${date} a la hora: ${time}</p>
    `
  })
}

export async function sendEmailUpdateAppointment({ date, time }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_POST,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

  const info = await transporter.sendMail({
    from: 'AppSalon <citas@appsalon.com',
    to: 'admin@appsalon.com',
    subject: 'AppSalon - Cita actualizada',
    text: 'AppSalon -Cita actualizada',
    html: `
      <p>Hola: Admin, un usuario ha modificado la cita</p>
      <p>La nueva cita será el día: ${date} a la hora: ${time}</p>
    `
  })
}

export async function sendEmailCancelAppointment({ date, time }) {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_POST,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  )

  const info = await transporter.sendMail({
    from: 'AppSalon <citas@appsalon.com',
    to: 'admin@appsalon.com',
    subject: 'AppSalon - Cita Cancelada',
    text: 'AppSalon -Cita Cancelada',
    html: `
      <p>Hola: Admin, un usuario ha cancelado la cita</p>
      <p>La cita cancelada era para el día: ${date} a la hora: ${time}</p>
    `
  })
}
