const mongoose = require('mongoose');

mongoose
  .connect('mongodb://root:test12345@ds111063.mlab.com:11063/db-beta1', { useNewUrlParser: true })
  .then(() => {
    console.log('Conectado')
  })
  .catch(() => {
    console.log('Error al Conectar')
  })

module.exports = mongoose;