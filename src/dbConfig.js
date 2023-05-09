import { config } from 'dotenv'
config()

let dbConfig
export default dbConfig = {
  server: process.env.SERVER,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  driver: 'msnodesqlv8',
  connectionTimeout: '15000',
  requestTimeout: '15000'
}

//los datos que deberian ir en cada uno, te los tiene que proporcionar el Jefe, para conectarte a su base
// de datos