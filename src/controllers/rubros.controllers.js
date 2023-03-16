import sql from 'mssql/msnodesqlv8.js'
import dbConfig from '../dbConfig.js'

const query = 'SELECT DISTINCT [rubro] FROM [Bamana].[dbo].[vwCuboInventario]'

export const getRubros = async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request().query(query);
    res.set('Content-Type', 'application/json');
    res.json(result.recordset);
    pool.close();
  } catch (err) {
    console.log(`Error while querying database: ${err}`);
    res.status(500).send(`Error while querying database: ${err}`);
  }
}
