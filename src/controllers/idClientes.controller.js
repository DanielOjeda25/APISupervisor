import pool from './pool.js'

export const getIdCliente = async (req, res) => {
  const query =
    "SELECT DISTINCT [idcliente],[nombre],[nombre_localidad],[vendedor],[supervisor] FROM [Bamana].[dbo].[vwCuboClientes] WHERE [nombre_provincia] = 'MISIONES' ORDER BY [nombre] ASC"

  try {
    const request = pool.request()
    const result = await request.query(query)
    res.json(result.recordset)
  } catch (err) {
    console.log(`Error while connecting database: ${err}`)
    res.status(500).send('Internal server error')
  }
}
