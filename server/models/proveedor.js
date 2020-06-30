const mongoose = require('mongoose');


const proveedorSchema = mongoose.Schema({
    nombre: String,
    descripcion: String,
    cif: String,
    correo: String,
    telefono: String,
    imagen: String,
    servicio: [{ type: mongoose.Schema.Types.ObjectId, ref: "Servicio" }]
}
)

module.exports = mongoose.model('Proveedor', proveedorSchema);
