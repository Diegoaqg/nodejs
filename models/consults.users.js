// Buscar usuarios
Usuario.find()
    .then(usuarios => {
        console.log('Usuarios encontrados:', usuarios);
    })
    .catch(err => {
        console.error('Error al buscar usuarios:', err);
    });
