const express = require('express');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

const app = express();

// Middleware para permitir el uso de JSON en las solicitudes
app.use(express.json());

// Definir una ruta simple
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde la API en el puerto 3000!');
});

module.exports = app; // Exportamos la app para usarla en index.js
