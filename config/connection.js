const mongoose = require('mongoose');

const URI ='mongodb+srv://tigid:D4qg01@diego.mlvih.mongodb.net/shopNodeDiego'

mongoose.connect(URI)
.then(() => console.log('conexion exitosa en mongodb'))
.catch(err => console.error('error al conectar en mongo db:',err));

module.exports = mongoose;