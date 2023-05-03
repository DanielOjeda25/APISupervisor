/* import sql from "mssql/msnodesqlv8.js";
import dbConfig from "../database/myLocalDB/localConfig.js";

const queryDB = (rubro, nombre, imagen) => {
	return `INSERT INTO supervisor.dbo.gondolasTest ([rubro],[nombre],[imagen]) 
		VALUES ('${rubro}', '${nombre}', '${imagen}')`;
};

export const POSTGondola = async (req, res) => {
	try {
		const pool = await sql.connect(dbConfig);
		const query = queryDB(
			req.body["rubro"],
			req.body["nombre"],
			req.body["imagen"],
		);
		await pool.request().query(query);
		res.status(200).send("Góndola agregada correctamente.");
	} catch (err) {
		console.log(err);
		res.status(500).send("Error al agregar la góndola.");
	}
};
 */

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: '149.100.155.1',
	user: 'u698067364_admin',
	password: 'Adminrootsupervisor1',
	database: 'u698067364_appsup',
	connectTimeout: 10000 // 10 segundos
});

export const GetGondolas = (req, res) => {
	connection.connect();
	connection.query('SELECT * FROM `Gondolas` ORDER BY `cliente` ASC', (error, results) => {
		if (error) {
			console.error(error);
			res.status(500).send('Error al obtener las góndolas.');
		} else {
			res.json(results);
			console.log('Datos obtenidos');
		}
		connection.end();
	});
};
const queryDB = (rubro, cliente, imagen) => {
	return `INSERT INTO Gondolas (cliente ,rubro, imagen) VALUES ('${cliente}', '${rubro}', '${imagen}')`;
};

export const POSTGondola = async (req, res) => {
	connection.connect();
	connection.query(queryDB(req.body["cliente"],
		req.body["rubro"],
		req.body["imagen"],), (error, results) => {
			if (error) {
				console.error(error);
				res.status(500).send('Error al obtener las góndolas.');
			} else {
				res.json(results[0]);
				console.log('post agregado');
			}
		});
		connection.end();
}