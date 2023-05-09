// Importamos el objeto 'pool' desde el archivo 'pool.js'
import pool from './pool.js'

// Función asincrónica para obtener los IDs y nombres de clientes de la provincia de Misiones
export const getIdCliente = async (req, res) => {
  // Definimos una consulta SQL para obtener los IDs y nombres de clientes de la provincia de Misiones
  const query =
    "SELECT DISTINCT [idcliente],[nombre] FROM [Bamana].[dbo].[vwCuboClientes] WHERE [nombre_provincia] = 'MISIONES' ORDER BY [nombre] ASC"

  try {
    // Creamos una nueva solicitud a la base de datos utilizando el objeto 'pool'
    const request = pool.request()

    // Enviamos la consulta SQL a la base de datos utilizando la solicitud creada
    const result = await request.query(query)

    // Enviamos los resultados obtenidos en formato JSON como respuesta HTTP
    res.json(result.recordset)
  } catch (err) {
    // Si ocurre un error, lo imprimimos en la consola y enviamos una respuesta HTTP de error
    console.log(`Error al conectarse a la base de datos: ${err}`)
    res.status(500).send('Internal server error')
  } 
}
