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
  rubro,
  imagen
) => {
  const query = `INSERT INTO [supervisor].[dbo].[gondolasData] 
  (idcliente, nombre, nombre_localidad,nombre_provincia,idvendedor,vendedor, supervisor, rubro, imagen) 
  VALUES (${id}, '${nombre}', '${nombreLocalidad}', '${nombreProvincia}', ${idvendedor}, '${vendedor}', '
  ${supervisor}', '${rubro}', '${imagen}')`
  return query
}

export const POSTGondola = async (_req, res) => {
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
        3,
        'Danistry Ojeda',
        'Iguazu',
        'Misiones',
        61,
        'Ernesto Lucero',
        'Supervisor O',
        'Limpieza',
        'https://firebasestorage.googleapis.com/v0/b/supervisorapp-1f77a.appspot.com/o/Gondolas%2FImage-1676656368134?alt=media&token=f0f172a0-75d7-4bef-94a8-71545d6d75e3'
      ),
      (err, _records) => {
        if (err) console.log(err)
        res.set('Content-Type', 'application/json');
      }
    )
  }
  try {
    new sql.connect(dbConfig, conexion)
  } catch (err) {
    console.log(err)
  }
}
const query =
  'SELECT [id],[idcliente],[nombre],[nombre_localidad],[nombre_provincia],[idvendedor] ,[vendedor] ,[supervisor] ,[rubro] ,[imagen] FROM [supervisor].[dbo].[gondolasData]'

export const GetGondolas = async (_req, res) => {
  const conexion = (err) => {
    if (err) {
      console.log(`Error while connecting database: ${err}`)
    } else {
      console.log(`connected to database: ${dbConfig.server}`)
      console.log('Data enviada')
    }
    const request = new sql.Request()

    request.query(query, function (err, records) {
      if (err) console.log(err)
      //convertimos la imagen que viene de la db en formato de buffer a toString
      res.set('Content-Type', 'application/json')
      let result = transformImagen(records)
      res.json(result)
    })
  }
  try {
    new sql.connect(dbConfig, conexion)
  } catch (err) {
    console.log(err)
  }
  
}
function transformImagen(records) {
  for (let i = 0; i < records.recordset.length; i++) {
    let imagenBuffer = new Buffer.from(records.recordset[i].imagen)
    imagenBuffer = imagenBuffer.toString()
    delete records.recordset[i].imagen
    records.recordset[i].imagen = imagenBuffer
  }

  return records.recordset
}
