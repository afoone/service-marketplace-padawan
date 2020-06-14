const express = require('express');
const app = express();
const proveedorRouter = require('./routes/proveedor');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send("<h2>Server up and running</h2>"));

app.use("/proveedor/", proveedorRouter)
 app.get('/', (req, res) => {

   Proveedor.find(
       (err, proveedores) => {
           return err ? res.status(500).send("<h1>error</h1>") : res.jsonp(proveedores);
       }
   )
}
) 








module.exports = app;

