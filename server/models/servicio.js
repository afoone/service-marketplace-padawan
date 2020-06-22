const mongoose = require('mongoose');

const servicioSchema = mongoose.Schema( {
        nombre: String,
        precio: String,
        descripcion: String

    }
)

module.exports = mongoose.model('Servicio', servicioSchema);
