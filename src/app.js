import express from "express";
import path from "path";
import config from "./dbConfig.js";
import rubrosRouter from "./routes/rubros.routes.js";
import idClientes from "./routes/idClientes.routes.js";
import indexRoute from "./routes/index.routes.js";
import gondolasRoute from "./routes/gondolas.routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// Configuración del puerto
app.set("port", config.port);

// Configuración del middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración del middleware para permitir CORS
app.use(
  cors({
    origin: '*',
  })
);

// Configuración de las rutas
app.use(rubrosRouter);
app.use(idClientes);
app.use(indexRoute);
app.use(gondolasRoute);

// Configuración del servidor
app.listen(8080)
console.log("server on port http://localhost:8080");


export default app;
