import sql from 'mssql/msnodesqlv8.js'
import dbConfig from '../database/myLocalDB/localConfig.js'

const queryDB = (
  id,
  nombre,
  nombreLocalidad,
  nombreProvincia,
  idvendedor,
  vendedor,
  supervisor,
  imagen
) => {
  const query = `INSERT INTO [supervisor].[dbo].[gondolasData] 
  (idcliente, nombre, nombre_localidad,nombre_provincia,idvendedor,vendedor, supervisor, imagen) 
  VALUES (${id}, '${nombre}', '${nombreLocalidad}', '${nombreProvincia}', ${idvendedor}, '${vendedor}', '
  ${supervisor}', '${imagen}')`
  return query
}

export const POSTGondola = async (req, res) => {
  const conexion = (err) => {
    if (err) {
      console.log(`Error while connecting database: ${err}`)
    } else {
      console.log(`connected to database: ${dbConfig.server}`)
      console.log('Data enviada')
    }
    const request = new sql.Request()

    request.query(
      queryDB(
        5,
        'Danistry',
        'el dorado',
        'Misiones',
        6,
        'Ojeda Daniel Alejandro',
        'Supervisor XYZ',
        'https://firebasestorage.googleapis.com/v0/b/supervisorapp-1f77a.appspot.com/o/Gondolas%2FImage-1676656368134?alt=media&token=f0f172a0-75d7-4bef-94a8-71545d6d75e3'
      ),
      (err, records) => {
        if (err) console.log(err)
        res.set('Content-Type', 'application/json')
      }
    )
  }
  try {
    new sql.connect(dbConfig, conexion)
  } catch (err) {
    console.log(err)
  }
}

export const GetGondolas = async (req, res) => {
  const conexion = (err) => {
    if (err) {
      console.log(`Error while connecting database: ${err}`)
    } else {
      console.log(`connected to database: ${dbConfig.server}`)
      console.log('Data enviada')
    }
    const request = new sql.Request()

    request.query(
      ` SELECT [id]
      ,[idcliente]
      ,[nombre]
      ,[nombre_localidad]
      ,[nombre_provincia]
      ,[idvendedor]
      ,[vendedor]
      ,[supervisor]
	  ,[imagen]
  FROM [supervisor].[dbo].[gondolasData]`,
      (err, records) => {
        if (err) console.log(err)
      
        let image = records.recordset[1].imagen
        const buf = new Buffer(image)
        console.log(buf.toString())
        res.set('Content-Type', 'application/json')
      }
    )
  }
  try {
    new sql.connect(dbConfig, conexion)
  } catch (err) {
    console.log(err)
  }
}
