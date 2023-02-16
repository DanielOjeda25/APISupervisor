import { config } from 'dotenv'
config()

let dbConfig
export default dbConfig = {
  server: process.env.SERVER,
  port: process.env.PORT || 3000,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  driver: process.env.DRIVER,
  timeout: 150000,
  connectionTimeout: 150000
}
