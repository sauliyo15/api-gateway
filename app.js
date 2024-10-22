const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Ruta para el microservicio de usuarios en Node.js (puerto 4000)
app.use(
  "/usuarios",
  createProxyMiddleware({
    target: process.env.USERS_SERVICE_URL,
    changeOrigin: true,
  })
);

// Ruta para el microservicio de vehículos en Spring Boot (puerto 8080)
app.use(
  "/vehiculos",
  createProxyMiddleware({
    target: process.env.VEHICLES_SERVICE_URL,
    changeOrigin: true,
  })
);

// Definir una ruta simple
app.get("/", (req, res) => {
  res.send("¡Hola Mundo desde la API-Gateway en el puerto 3000!");
});

module.exports = app; // Exportar la instancia de la aplicación
