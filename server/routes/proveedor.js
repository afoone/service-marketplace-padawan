const { createProveedor, getProveedores, getProveedor,
  updateProveedor, deleteProveedor } = require('../controllers/proveedor');
const { Router } = require('express');

const router = Router();

router
  .post("/", createProveedor)
  // TODO:
  //.get("/service/:id", funcion)
  .get("/", getProveedores)
  .get("/:id", getProveedor)
  .put("/:id", updateProveedor)
  .delete("/:id", deleteProveedor)

module.exports = router;
