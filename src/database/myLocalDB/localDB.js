import sql from 'mssql/msnodesqlv8.js';
import dbConfig  from './localConfig.js'

export default function getConnectionLocal(query) {
  new sql.connect(dbConfig, function (err) {
    if (err) {
      console.log('Error while connecting database: ' + err)
    } else {
      console.log('connected to database: ' + dbConfig.server)
    }
    const request = new sql.Request()
    request.query(query, function (err, records) {
      if (err) console.log(err)
      console.table(records.recordset)
    })
  })
}


