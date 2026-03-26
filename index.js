//Archivo principal del servidor

const express = require("express")

//Instancia de aplicacion Express
const app = express();

//INICIAR SERVER

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`✅ Servidor iniciado en http://localhost:${PORT}}`);
})