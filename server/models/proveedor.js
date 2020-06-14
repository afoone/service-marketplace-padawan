const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema(
    
    {
        nombre: String,
        servicio: String,
        descripcion: String,
        cif: String,
        correo: String,
        telefono: String,
        imagen: String,
    }
)

module.exports = mongoose.model('Proveedor', proveedorSchema);