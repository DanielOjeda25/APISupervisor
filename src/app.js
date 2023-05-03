import express from "express";
import config from "./dbConfig.js";
import rubrosRouter from "./routes/rubros.routes.js";
import idClientes from "./routes/idClientes.routes.js";
import indexRoute from "./routes/index.routes.js";
import gondolasRoute from "./routes/gondolas.routes.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.set("port", config.port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://127.0.0.1:5173",
		origin: "http://localhost:4000",
		origin: "http://10.211.55.6:8080/idClientes",
		origin: '*',
		origin: 'https://bmn-deliverydron.com/',
		origin: '149.100.155.1',
		origin: '149.100.155.33'
	}),
);
app.use(rubrosRouter);
app.use(idClientes);
app.use(indexRoute);
app.use(gondolasRoute);

export default app;
