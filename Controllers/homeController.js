//Controlador para ruta Raiz "/"
//Separa la logica de negocio del enrutamiento

const homeController = {
    //Maneja GET /
    //Devuelve la pagina de bienvenida en HTML
    getHome: (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Node & Express App</title>
                    <link rel="stylesheet" href="/styles.css"/>
                </head>

                <body>
                    <div class="container">
                        <h1>🚀 Bienvenido a la Aplicacion</h1>
                        <p>Servidor Node.js + Express funcionando correctamente</p>
                        <a href="/status">Ver estado del servidor -></a>
                    </div>
                </body>
            </html>
            `)
    }
}

module.exports = homeController;