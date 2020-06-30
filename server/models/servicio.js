const mongoose = require('mongoose');

const servicioSchema = mongoose.Schema({
    nombre: String,
    precio: String,
    descripcion: String,
    imagen: String,
    proveedor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Proveedor" }]
}
)

module.exports = mongoose.model('Servicio', servicioSchema);
