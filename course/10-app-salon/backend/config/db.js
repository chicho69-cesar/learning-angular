import colors from 'colors'
import mongoose from 'mongoose'

export const db = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, { dbName: 'app-salon' })
    const url = `${db.connection.host}:${db.connection.port}`
    
    console.log(colors.cyan.bgWhite(`Mongo DB Se conectó correctamente: ${url}`))
  } catch (error) {
    console.log(colors.red(`Error: ${error.message}`))
    process.exit(1)
  }
}
