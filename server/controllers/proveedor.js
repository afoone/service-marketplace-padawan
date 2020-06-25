const Proveedor = require('../models/proveedor');

const proveedorController = {

  createProveedor: (req, res) => {
    const { body } = req;
    // creamos el proveedor
    const proveedor = new Proveedor();
    proveedor.nombre = body.nombre;
    proveedor.servicio = body.servicio;
    proveedor.descripcion = body.descripcion;
    proveedor.cif = body.cif;
    proveedor.correo = body.correo;
    proveedor.telefono = body.telefono;
    proveedor.imagen = body.imagen;
    // guardamos en mongo
    proveedor.save()
      .then(
        // devolvemos un 201 (Created) con la respuesta json con el proveedor recién creado
        proveedor => { return res.status(201).jsonp(proveedor) }
      ).catch(
        err => { return res.status(500).jsonp({ msg: "error grabando proveedor" }) }
      )
  },

  getProveedores: (req, res) => {
    Proveedor.find(
      (err, proveedores) => {
        return err ? res.status(500).send("<h1>ERROR<h1>")
          : res.status(200).jsonp(proveedores);
      }
    )
  },

  getProveedor: (req, res) => {
    Proveedor.findById(req.params.id, (err, proveedor) => {
      err ? res.status(404).send("<h1>No Encontrado<h1>")
        : res.status(200).jsonp(proveedor);
    })
  },

  updateProveedor: (req, res) => {
    const { body, params } = req;
    Proveedor.findById(params.id, (err, proveedor) => {
      if (err) {
        return res.status(404)("<h1>No Encontrado<h1>")
      }//if para modificar solo un elemento si está vacio
      proveedor.nombre = body.nombre;
      proveedor.servicio = body.servicio;
      proveedor.descripcion = body.descripcion;
      proveedor.cif = body.cif;
      proveedor.correo = body.correo;
      proveedor.telefono = body.telefono;
      proveedor.imagen = body.imagen;
      proveedor.save().then(
        p => {return res.status(201).jsonp(p)}
      )
      .catch(
        err => { return res.status(500).jsonp({msg: "error actualizando proveedores"})}
      )
    })
  },

  deleteProveedor: (req, res) => {
    const { id } = req.params;
    Proveedor.findById(id, (err, proveedor) => {
      if (err) {
        return res.status(500).send("<h1>ERROR 500<h1>");
      }
      if (!proveedor) {
        return res.status(404).send("<h1>No Encontrado<h1>")
      }
      proveedor.remove().then(
        p => {return res.status(200).jsonp(p);}
      ).catch(
        err => {return res.status(500).jsonp({msg: "error borrando proveedor"})}
      )
    })
  }

}


module.exports = proveedorController;
