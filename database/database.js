const mongoose = require('mongoose');

const dbURI = 'mongodb://admin:admin@mongodb:27017/miapp?authSource=admin';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Eventos de conexión
mongoose.connection.on('connected', () => {
    console.log('Conexión a MongoDB establecida.');
  });

module.exports = mongoose.connection;