const express = require('express');
const mongoose = require('./config/connection.js');
const app = express();
const puerto = 3000;

app.get('/saludo', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.get('/conexionMongo', (req,res) => {
    res.send('conexion activa')
    res.end();
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});



