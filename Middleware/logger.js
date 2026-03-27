//Middleware encargado de registrar las visitas en logs.txt, ejecutandose automaticamente en cada peticion de app.use()

const fs=require("fs");
const path = require("path");

//Ruta absoluta al archivo logs.txt
const logPath = path.join(__dirname, "../logs/log.txt");

//Crear linea de regitro con fecha, hora y ruta de aceso

const loggerMiddleware = (req, res,next) =>{
    const now = new Date();

    //Formatear en [YYYY-MM-DD] [HH:MM:SS]
    const fecha = now.toLocaleDateString("es-CL");
    const hora = now.toLocaleTimeString("es-CL");
    const linea = `[${fecha}] [${hora} ${req.method} ${req.originalURL}\n]`
    
    //fs.append agragara la linea al final del documento sin sobreescribir informacion preexistente, si el archivo no existe, lo creara

    fs.appendFile(logPath, linea, (err)=>{
        if(err){
            console.error("❌ Error al escribir el log.txt", err.message);
        }
    })

    next();
}

module.exports = loggerMiddleware