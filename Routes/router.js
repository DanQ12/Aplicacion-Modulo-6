//Enrutador principal de la aplicacion
//index.js usa app.use() para conectarse, esto mantiene el archivo principal limpio y escalable

const express = require("express");
const router = express.Router();

//Importamos los controladores para las rutas

const homeController = require("../Controllers/homeController");
const statusController = require("../Controllers/statusController");

// Rutas publicas

//GET -> Pagina principal (responde con HTML)
router.get("/", homeController.getHome);

//GET /status -> Estado del servidor(Responde con JSON)
router.get("/status", statusController.getStatus)

module.exports = router;