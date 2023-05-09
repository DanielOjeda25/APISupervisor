// Importamos el paquete 'mssql/msnodesqlv8.js' que nos permite conectarnos a una base de datos SQL Server
import sql from 'mssql/msnodesqlv8.js';

// Importamos la configuración de la base de datos desde el archivo 'dbConfig.js'
import dbConfig from '../dbConfig.js';

// Creamos una función que recibe una consulta SQL y retorna una conexión a la base de datos
export default function getConnection(query) {
  // Llamamos al método 'connect' de 'sql' y le pasamos la configuración de la base de datos y una función de callback
  // La función de callback se ejecutará cuando se establezca la conexión o si ocurre algún error durante la conexión
  new sql.connect(dbConfig, function (err) {
    if (err) {
      console.log(`Error while connecting database: ${err}`)
    } else {
      console.log(`connected to database: ${dbConfig.server}`)
    }

    // Creamos una instancia de 'Request' para ejecutar la consulta SQL
    const request = new sql.Request()

    // Ejecutamos la consulta SQL utilizando la instancia de 'Request' y una función de callback
    // La función de callback se ejecutará cuando se obtengan los resultados de la consulta o si ocurre algún error
    request.query(query, function (err, records) {
      if (err) console.log(err)

      // Imprimimos los registros obtenidos en la consola en formato de tabla
      console.table(records.recordset)
    })
  })
}

//Nota: este archivo se usa para probar nada mas la coenexion con la base de datos en el puerto raiz "/"