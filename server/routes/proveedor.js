const { createProveedor, getProveedores, getProveedor,
  updateProveedor, deleteProveedor, getProveedoresByServiceId } = require('../controllers/proveedor');
const { Router } = require('express');

const router = Router();

router
  .post("/", createProveedor)
  // TODO:
  .get("/service/:id", getProveedoresByServiceId)
  .get("/", getProveedores)
  .get("/:id", getProveedor)
  .put("/:id", updateProveedor)
  .delete("/:id", deleteProveedor)
  

module.exports = router;
