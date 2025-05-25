const express = require('express');
const mongoose = require('./config/connection.js');
const modeloUsuario = require('./models/users.models.js')
const app = express();
const puerto = 3000;

app.get('/saludo', (req, res) => {
  res.send('¡Hola desde Express!');
});

app.get('/conexionMongo', (req,res) => {
    res.send('conexion activa')
    res.end();
});

app.get('/insertarusuario', (req,res)=>{
    const nuevoUsuario = new modeloUsuario({
        nombre: 'Juanito',
        edad: 30,
        correo: 'juan.perez@ejemplo.com'
    });

    nuevoUsuario.save()
        .then(usuario => {
            console.log('Usuario creado:', usuario);
        })
        .catch(err => {
            console.error('Error al crear usuario:', err);
        });
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});



