//Archivo principal del servidor
//Se eligió "index.js" por convención en proyectos Node.js: es el punto de entrada estándar que npm y Node reconocen automáticamente.


//Cargar variables de entorno desde archivo .env
require("dotenv").config();

const express = require("express")

//Importacion del router
const router = require("./Routes/router");

//Instancia de aplicacion Express
const app = express();

//Conectar rutas definidas en router.js

app.use("/", router)

//INICIAR SERVER

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`✅ Servidor iniciado en http://localhost:${PORT}}`);
})