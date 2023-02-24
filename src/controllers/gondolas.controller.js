import sql from 'mssql/msnodesqlv8.js'
import dbConfig from '../database/myLocalDB/localConfig.js'

const query =
  "INSERT INTO [webstore].[dbo].[Products] (Name, Description, Quantity) VALUES ('Daniel', 'nueva laptop', 3)"

export const POSTGondola = async (req, res) => {
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
      res.json(records.recordset)
    })
  }
  try {
    new sql.connect(dbConfig, conexion)
  } catch (err) {
    console.log(err)
  }
}
