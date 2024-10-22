const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Ruta para el microservicio de usuarios en Node.js (puerto 4000)
app.use(
  "/usuarios",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
  })
);

// Ruta para el microservicio de vehículos en Spring Boot (puerto 8080)
app.use(
  "/vehiculos",
  createProxyMiddleware({
    target: "http://localhost:8080",
    changeOrigin: true,
  })
);

// Definir una ruta simple
app.get("/", (req, res) => {
  res.send("¡Hola Mundo desde la API en el puerto 3000!");
});

module.exports = app; // Exportar la instancia de la aplicación
