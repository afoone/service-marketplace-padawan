const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema( {
    nombre: String,
    usuario: String,
    password: String,
    roles: [String]

    }
)

module.exports = mongoose.model('Usuario', usuarioSchema);
