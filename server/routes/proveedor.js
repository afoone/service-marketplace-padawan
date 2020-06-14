const { createProveedor, getProveedores, getProveedor,
    updateProveedor, deleteProveedor } = require('../controllers/proveedor');
const { Router } = require('express');

const router = Router();

router
    .post("/crear_prov", createProveedor)
    .get("/lista_prov", getProveedores)
    .get("/:id", getProveedor)
    .put("/modificar_prov/:id", updateProveedor)
    .delete("/borrar_prov/:id", deleteProveedor)

module.exports =router;