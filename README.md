# 🚀 Node & Express Web App

Aplicación web construida con **Node.js** y **Express**, estructurada con una arquitectura MVC (Modelo-Vista-Controlador) que separa responsabilidades en controladores, rutas y middleware.

---

## 📁 Estructura del proyecto

```
proyecto/
├── index.js                  # Punto de entrada del servidor
├── package.json              # Dependencias y scripts
├── Routes/
│   └── router.js             # Definición de rutas
├── Controllers/
│   ├── homeController.js     # Lógica para la ruta raíz "/"
│   └── statusController.js   # Lógica para la ruta "/status"
├── Middleware/
│   └── logger.js             # Middleware de registro de peticiones
├── Logs/
│   └── log.txt               # Archivo de logs (generado automáticamente)
└── public/
    └── styles.css            # Estilos CSS para la página principal
```

---

## ⚙️ Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)

---

## 🛠️ Instalación

1. Clona el repositorio o descarga los archivos del proyecto.

2. Instala las dependencias:

```bash
npm install dotenv express
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (opcionales):

```env
PORT=3000
NODE_ENV=development
APP_NAME=Node-Express-WebApp
```

---

## ▶️ Uso

### Modo producción

```bash
npm start
```

### Modo desarrollo (con recarga automática via nodemon)

```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:3000`

---

## 🌐 Endpoints disponibles

| Método | Ruta      | Descripción                              | Respuesta |
|--------|-----------|------------------------------------------|-----------|
| GET    | `/`       | Página de bienvenida                     | HTML      |
| GET    | `/status` | Estado actual del servidor               | JSON      |

### Ejemplo de respuesta — `GET /status`

```json
{
  "status": "ok",
  "message": "El servidor esta en funcionamiento",
  "data": {
    "app": "Node-Express-WebApp",
    "entorno": "development",
    "timestamp": "2025-01-01T00:00:00.000Z",
    "uptime": "42 segundos"
  }
}
```

---

## 🧩 Arquitectura

### `index.js` — Servidor principal

Configura y arranca la aplicación Express. Registra los middlewares globales (parseo de JSON, archivos estáticos, logger) y conecta el router.

### `Routes/router.js` — Enrutador

Define las rutas públicas de la aplicación y las asocia a sus respectivos controladores, manteniendo `index.js` limpio y escalable.

### `Controllers/` — Controladores

Contienen la lógica de negocio separada del enrutamiento:

- **`homeController.js`**: Devuelve la página HTML de bienvenida.
- **`statusController.js`**: Devuelve un JSON con el estado del servidor, el entorno, el timestamp actual y el uptime.

### `Middleware/logger.js` — Logger

Se ejecuta automáticamente en cada petición HTTP. Registra la fecha, hora, método y ruta en el archivo `Logs/log.txt` usando `fs.appendFile`, sin sobreescribir el historial previo.

**Formato de log:**
```
[27-3-2025] [14:32:10] GET /
[27-3-2025] [14:32:15] GET /status
```

---

## 📦 Dependencias

| Paquete    | Versión   | Descripción                                      |
|------------|-----------|--------------------------------------------------|
| `express`  | ^5.2.1    | Framework web para Node.js                       |
| `dotenv`   | ^17.3.1   | Carga variables de entorno desde `.env`          |
| `nodemon`  | ^3.1.14   | Recarga automática en desarrollo (devDependency) |

---

## 👤 Autor

**Daniel Quezada Agüero**

---

## 📄 Licencia

ISC
