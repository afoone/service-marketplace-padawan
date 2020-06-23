const mongoose = require('mongoose');

const servicioSchema = mongoose.Schema( {
        nombre: String,
        precio: String,
        descripcion: String,
        imagen: String

    }
)

module.exports = mongoose.model('Servicio', servicioSchema);
