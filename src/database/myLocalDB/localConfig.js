import { config } from 'dotenv'
config()

let dbConfig
export default dbConfig = {
  server: "DESARROLLO30C6\\SQLEXPRESS",
  port: process.env.PORT || 3000,
  user: process.env.USER_LOCAL,
  password: process.env.PASSWORD_LOCAL,
  database: process.env.DATABASE_LOCAL,
  driver: process.env.DRIVER,
}
