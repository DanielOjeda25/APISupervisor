import sql from 'mssql/msnodesqlv8.js'
import dbConfig from '../dbConfig.js'

const query = 'SELECT DISTINCT [localidad] FROM [Bamana].[dbo].[vwCuboVentas]'

export const getLocalidades = async (req, res) => {
  const conexion = (err) => {
    if (err) {
      console.log('Error while connecting database: ' + err)
    } else {
      console.log('connected to database: ' + dbConfig.server)
    }
    const request = new sql.Request()

    request.query(query, (err, records) => {
      if (err) console.log(err)
      res.set('Content-Type', 'application/json')
      /* console.log(records.recordset.slice(1, records.recordset.length)) */
      res.json(records.recordset)
    })
  }
  try {
    new sql.connect(dbConfig, conexion)
  } catch (err) {
    console.log(err)
  }
}
