// Importamos el paquete 'mssql/msnodesqlv8.js' que nos permite conectarnos a una base de datos SQL Server
import sql from 'mssql/msnodesqlv8.js'

// Importamos la configuración de la base de datos desde el archivo 'dbConfig.js'
import dbConfig from '../dbConfig.js'

// Definimos la consulta SQL que deseamos ejecutar
const query = 'SELECT DISTINCT [rubro] FROM [Bamana].[dbo].[vwCuboInventario]'

// Definimos un controlador para la ruta que obtiene los rubros de la base de datos
export const getRubros = async (req, res) => {
  try {
    // Creamos una instancia de 'ConnectionPool' y nos conectamos a la base de datos
    const pool = await sql.connect(dbConfig);

    // Ejecutamos la consulta SQL utilizando la instancia de 'ConnectionPool'
    const result = await pool.request().query(query);

    // Configuramos la respuesta HTTP con el contenido de la consulta SQL
    res.set('Content-Type', 'application/json');
    res.json(result.recordset);

    // Cerramos la conexión a la base de datos
    pool.close();
  } catch (err) {
    // Manejamos cualquier error que ocurra durante la conexión o la consulta SQL
    console.log(`Error while querying database: ${err}`);
    res.status(500).send(`Error while querying database: ${err}`);
  }
}


//NOTa: este archivo creo que no es usado porque los rubros fueron hardcoreados ya que habia problemas con la base de datos en su momento.