import pool from './pool.js'

export const getIdCliente = async (req, res) => {
  const query =
    "SELECT DISTINCT [idcliente],[nombre] FROM [Bamana].[dbo].[vwCuboClientes] WHERE [nombre_provincia] = 'MISIONES' ORDER BY [nombre] ASC"

  try {
    const request = pool.request()
    const result = await request.query(query)
    res.json(result.recordset)
  } catch (err) {
    console.log(`Error al conectarse a la base de datos: ${err}`)
    res.status(500).send('Internal server error')
  } 
}
