//Archivo principal del servidor
//Se eligió "index.js" por convención en proyectos Node.js: es el punto de entrada estándar que npm y Node reconocen automáticamente.


//Cargar variables de entorno desde archivo .env
require("dotenv").config();

const express = require("express");
const path = require("path")

//Importacion del router
const router = require("./Routes/router");

//importacion del middleware
const loggerMiddleware = require("./Middleware/logger");

//Instancia de aplicacion Express
const app = express();

//Parseo del body de peticiones JSON

app.use(express.json());

//Parseo datos de formulario HTML
app.use(express.urlencoded({extended: true}))

//Cargar archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

//Middleware para registar peticiones en log.txt

app.use(loggerMiddleware)

//Conectar rutas definidas en router.js

app.use("/", router)

//INICIAR SERVER

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`✅ Servidor iniciado en http://localhost:${PORT}}`);
    console.log(`📁 Entorno: ${process.env.NODE_ENV || "development"}`);
})