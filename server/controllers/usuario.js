const Usuario = require('../models/usuario');


const usuarioController = {

    createUsuario: (req, res) => {
        const { body } = req;

        const usuario = new Usuario();
        usuario.nombre =body.nombre;
        usuario.usuario = body.usuario;
        usuario.password = body.password;
        usuario.roles = body.roles;

        usuario.save().then(
            usuario => { return res.status(201).jsonp(usuario) }
        ).catch(
            err => { return res.status(500).jsonp({ msg: "error grabando usuario"}) }
        )
    },

    getUsuarios: (req, res) => {
        Usuario.find(
            (err, usuarios) => {
                return err ? res.status(500).send("<h1>ERROR<h1>")
                : res.status(200).jsonp(usuarios);
            }
        )
    },

    getUsuario: (req, res) => {
        Usuario.findById(req.params.id, (err, usuario) => {
            err || !usuario ? res.status(404).send("<h1>No Encontrado</h1>")
            : res.status(200).jsonp(usuario)
        })
    },

    updateUsuario: (req, res) => {
        const { body, params } = req;
        Usuario.findById(params.id, (err, usuario) => {
            if (err) {
                return res.status(404)("<h1>No encontrado<h1>")
            }
            usuario.nombre =body.nombre;
            usuario.usuario = body.usuario;
            usuario.password = body.password;
            usuario.roles = body.roles;
            usuario.save().then(
                p => {return res.status(201).jsonp(p)} 
            ).catch(
                err => {return res.status(500).jsonp({msg: "error actualizando usuarios"})}
            )
        })
    },

    deleteUsuario: (req, res) => {
        const { id } = req.params;
        Usuario.findById(id, (err, usuario) => {
            if (err) {
              return res.status(500).send("<h1>ERROR 500<h1>");
            }
            if (!usuario){
                return res.status(404).send("<h1>No Encontrado<h1>")
              }
              usuario.remove().then(
                p => {return res.status(200).jsonp(p);}
                ).catch(
                  err => {return res.status(500).jsonp({msg: "error borrando proveedor"})}
                )
        }
        )
    }
}

module.exports = usuarioController;