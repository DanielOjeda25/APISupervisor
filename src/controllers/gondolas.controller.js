// Importamos la biblioteca 'mysql'
const mysql = require('mysql');

// Creamos una conexión con la base de datos MySQL utilizando la información de conexión proporcionada
//se que las Keys deben estar  privadas pero fue provisoria.
const connection = mysql.createConnection({
  host: '149.100.155.1',
  user: 'u698067364_admin',
  password: 'Adminrootsupervisor1',
  database: 'u698067364_appsup',
  connectTimeout: 10000 // 10 segundos
});

// Función para obtener datos de la tabla 'Gondolas' de la base de datos
export const GetGondolas = (req, res) => {
  // Conectamos con la base de datos
  connection.connect();

  // Realizamos una consulta SQL para obtener todos los datos de la tabla 'Gondolas'
  connection.query('SELECT * FROM `Gondolas` ORDER BY `cliente` ASC', (error, results) => {
    if (error) {
      // Si ocurre un error, lo imprimimos en la consola y enviamos una respuesta HTTP de error
      console.error(error);
      res.status(500).send('Error al obtener las góndolas.');
    } else {
      // Si la consulta es exitosa, enviamos los resultados en formato JSON como respuesta HTTP
      res.json(results);
      console.log('Datos obtenidos');
    }

    // Cerramos la conexión con la base de datos después de la consulta
    connection.end();
  });
};

// Función para insertar datos en la tabla 'Gondolas' de la base de datos
const queryDB = (rubro, cliente, imagen) => {
  // Definimos una consulta SQL de inserción utilizando los datos del cuerpo de la solicitud HTTP
  return `INSERT INTO Gondolas (cliente ,rubro, imagen) VALUES ('${cliente}', '${rubro}', '${imagen}')`;
};

export const POSTGondola = async (req, res) => {
  // Conectamos con la base de datos
  connection.connect();

  // Enviamos la consulta SQL de inserción a la base de datos
  connection.query(queryDB(req.body["cliente"],
                           req.body["rubro"],
                           req.body["imagen"]), (error, results) => {
    if (error) {
      // Si ocurre un error, lo imprimimos en la consola y enviamos una respuesta HTTP de error
      console.error(error);
      res.status(500).send('Error al obtener las góndolas.');
    } else {
      // Si la operación de inserción es exitosa, enviamos los resultados en formato JSON como respuesta HTTP
      res.json(results[0]);
      console.log('post agregado');
    }
  });

  // Cerramos la conexión con la base de datos después de la consulta
  connection.end();
};
