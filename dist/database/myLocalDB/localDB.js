/* import sql from 'mssql/msnodesqlv8.js';
import dbConfig  from './localConfig.js'

export default function getConnectionLocal(query) {
  new sql.connect(dbConfig, function (err) {
    if (err) {
      console.log(`Error while connecting database: ${err}`)
    } else {
      console.log(`connected to database: ${dbConfig.server}`)
    }
    const request = new sql.Request()
    request.query(query, function (err, records) {
      if (err) console.log(err)
      console.table(records.recordset)
    })
  })
}

 */

/* const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '149.100.155.1',
  user: 'u698067364_admin',
  password: 'Adminrootsupervisor1',
  database: 'u698067364_appsup'
});

connection.connect();

connection.query('SELECT * FROM `Gondolas`', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
});

connection.end(); */
"use strict";