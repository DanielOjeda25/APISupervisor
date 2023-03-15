import sql from 'mssql/msnodesqlv8.js'
import dbConfig from '../database/myLocalDB/localConfig.js'

const queryDB = (
  rubro,
  nombre,
  imagen
) => {
  const query = `INSERT INTO gondolasTest ([rubro],[nombre], [imagen]) 
  VALUES ('${rubro}', '${nombre}', '${imagen}')`
  return query
}

export const POSTGondola = async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig)
     await pool.request().query(
      queryDB(
        req.body['rubro'],
        req.body['nombre'],
        req.body['imagen']
      )
    )
    res.status(200).send('Góndola agregada correctamente.')
  } catch (err) {
    console.log(err)
    res.status(500).send('Error al agregar la góndola.')
  }
}

const query =
  'SELECT * FROM gondolasTest'

export const GetGondolas = async (_req, res) => {
  try {
    const pool = await sql.connect(dbConfig)
    const request = pool.request()
    const result = await request.query(query)
    let records = result.recordset
    /*  for (let i = 0; i < records.length; i++) { */
    /*    let imagenBuffer = new Buffer.from(records[i].imagen) */
    /*    imagenBuffer = imagenBuffer.toString() */
    /*    // rome-ignore lint/performance/noDelete: <explanation> */
    /*    delete records[i].imagen */
    /*    records[i].imagen = imagenBuffer */
    /*  } */
    res.status(200).json(records)
  } catch (err) {
    console.log(err)
    res.status(500).send('Error al obtener las góndolas.')
  }
}
