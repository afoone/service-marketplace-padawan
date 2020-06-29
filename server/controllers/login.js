const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const secretKey = "dskfjlsdpkafjklsdfjlksdjf398jsdjfkl";

const loginController = {
  login: (req, res) => {

    const { body } = req;
    console.log("body", body);
    Usuario.findOne({ usuario: body.usuario }, (err, usuario) => {
      console.log(usuario);
      if (err || !usuario || usuario.password !== body.password) {
        return res.status(401).send("")
      } else {
        const token = jwt.sign({ user: usuario }, secretKey, {
          expiresIn: 60 * 60 * 24
        });
        return res.status(200).jsonp({
          token, roles: usuario.roles,
          nombre: usuario.nombre,
          usuario: usuario.usuario
        });
      }
    })
  }
}

module.exports = loginController;
