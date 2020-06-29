const express = require('express');
const app = express();
const proveedorRouter = require('./routes/proveedor');
const servicioRouter = require('./routes/servicio');
const usuarioRouter = require('./routes/usuario')
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');
const cors = require('cors');

// Para que pueda decodificar el body en json en la request
app.use(express.json());

// Para habilitar las llamadas desde lugares o puertos diferentes al 4000
app.use(cors({
  "origin": "http://localhost:4200",
  "methods": "GET,HEAD,PUT,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

app.get("/", (req, res) => res.status(200).send("<h2>Server up and running</h2>"));

// Añadir las rutas 
app.use("/home/", homeRouter)
app.use("/login/", loginRouter)
app.use("/proveedor/", proveedorRouter)
app.use("/servicio/", servicioRouter)
app.use("/usuario/", usuarioRouter)


module.exports = app;

