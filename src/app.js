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
app.set("port", config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
  })
);

app.use(rubrosRouter);
app.use(idClientes);
app.use(indexRoute);
app.use(gondolasRoute);
app.listen(8080)
console.log("server on port http://localhost:8080");
// Servir archivo index.html
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "public", "index.html"));
});

export default app;
