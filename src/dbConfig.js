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
