const Servicio = require('../models/servicio');

const servicioController = {

  createServicio: (req, res) => {
    const { body } = req;
    // creamos el servicio
    const servicio = new Servicio();
    servicio.nombre = body.nombre;
    servicio.precio = body.precio;
    servicio.descripcion = body.descripcion;
    servicio.imagen = body.imagen;

    // guardamos en mongo
    servicio.save()
      .then(
        // devolvemos un 201 (Created) con la respuesta json con el proveedor recién creado
        servicio => { return res.status(201).jsonp(servicio) }
      ).catch(
        err => { return res.status(500).jsonp({ msg: "error grabando servicio" }) }
      )
  },

  getServicios: (req, res) => {
    Servicio.find(
      (err, servicios) => {
        return err ? res.status(500).send("<h1>ERROR<h1>")
          : res.status(200).jsonp(servicios);
      }
    )
  },

  getServicio: (req, res) => {
    Servicio.findById(req.params.id, (err, servicio) => {
      err || !servicio ? res.status(404).send("<h1>No Encontrado<h1>")
        : res.status(200).jsonp(servicio);
    })
  },

  updateServicio: (req, res) => {
    const { body, params } = req;
    Servicio.findById(params.id, (err, servicio) => {
      if (err) {
        return res.status(404)("<h1>No Encontrado<h1>")
      }//if para modificar solo un elemento si está vacio
      servicio.nombre = body.nombre;
      servicio.precio = body.precio;
      servicio.descripcion = body.descripcion;
      servicio.imagen = body.imagen;
      servicio.save().then(
        p => { return res.status(200).jsonp(p) }
      )
        .catch(
          err => { return res.status(500).jsonp({ msg: "error actualizando servicio" }) }
        )
    })
  },

  deleteServicio: (req, res) => {
    const { id } = req.params;
    Servicio.findById(id, (err, servicio) => {
      if (err) {
        return res.status(500).send("<h1>ERROR 500<h1>");
      }
      if (!servicio) {
        return res.status(404).send("<h1>No Encontrado<h1>")
      }
      servicio.remove().then(
        p => { return res.status(200).jsonp(p); }
      ).catch(
        err => { return res.status(500).jsonp({ msg: "error borrando servicio" }) }
      )
    })
  }

}

module.exports = servicioController;
