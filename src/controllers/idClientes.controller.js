import sql from 'mssql/msnodesqlv8.js'
import dbConfig from '../dbConfig.js'

const query =
  "SELECT DISTINCT [idcliente],[nombre],[nombre_localidad],[vendedor],[supervisor] FROM [Bamana].[dbo].[vwCuboClientes] WHERE [nombre_provincia] = 'MISIONES' ORDER BY [nombre] ASC"
//
//old query SELECT DISTINCT [idcliente],[nombre],[nombre_localidad],[nombre_provincia],[idvendedor],[vendedor],[supervisor] FROM [Bamana].[dbo].[vwCuboClientes] WHERE [nombre_provincia] = 'MISIONES'

export const getIdCliente = async (req, res) => {
  const conexion = (err) => {
    if (err) {
      console.log(`Error while connecting database: ${err}`)
    } else {
      console.log(`connected to database: ${dbConfig.server}`)
    }
    const request = new sql.Request()

    request.query(query, (err, records) => {
      if (err) console.log(err)
      res.set('Content-Type', 'application/json')
      res.json(records.recordset)
    })
  }
  try {
    new sql.connect(dbConfig, conexion)
  } catch (err) {
    console.log(err)
  }
}
