import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { db } from './config/db.js'
import appointmentRoutes from './routes/appointmentRoutes.js'
import authRoutes from './routes/authRoutes.js'
import servicesRoutes from './routes/servicesRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()

db()

const whiteList = [process.env.FRONTEND_URL, undefined]
const corsOption = {
  origin: function (origin, callback) {
    if (whiteList.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Error de CORS'))
    }
  }
}

app.use(express.json())
app.use(cors(corsOption))

app.use('/api/services', servicesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(colors.blue.bgMagenta.bold('El servidor se está ejecutando en el puerto: ', PORT))
})
