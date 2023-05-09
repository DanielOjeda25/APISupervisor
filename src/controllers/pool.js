// Importamos el paquete 'mssql/msnodesqlv8.js' que nos permite conectarnos a una base de datos SQL Server
import sql from 'mssql/msnodesqlv8.js'

// Importamos la configuración de la base de datos desde el archivo 'dbConfig.js'
import dbConfig from '../dbConfig.js'

// Creamos una nueva instancia de 'ConnectionPool' utilizando la configuración de la base de datos
const pool = new sql.ConnectionPool(dbConfig)

// Conectamos la instancia de 'ConnectionPool' a la base de datos
pool.connect()

// Exportamos la instancia de 'ConnectionPool' para que pueda ser utilizada en otros archivos
export default pool
