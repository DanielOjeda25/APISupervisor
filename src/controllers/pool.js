import sql from 'mssql/msnodesqlv8.js'
import dbConfig from '../dbConfig.js'

const pool = new sql.ConnectionPool(dbConfig)
pool.connect()

export default pool
