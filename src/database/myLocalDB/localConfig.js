import { config } from 'dotenv'
config()

let dbConfig
export default dbConfig = {
  server: "DESARROLLO30C6\\SQLEXPRESS",
  port: 1433 || 3000,
  user: 'Danistry',
  password: 'danistry',
  database: 'webstore',
  driver: process.env.DRIVER,
  timeout: 150000,
  connectionTimeout: 150000
}
