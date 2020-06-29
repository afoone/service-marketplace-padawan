const { createUsuario, getUsuarios, getUsuario,
  updateUsuario, deleteUsuario } = require('../controllers/usuario');
const { Router } = require('express');
const authmw = require('../middleware/auth')


const router = Router();

router
  .post("/", createUsuario)
  .get("/", authmw, getUsuarios)
  .get("/:id", getUsuario)
  .put("/:id", updateUsuario)
  .delete("/:id", deleteUsuario)

module.exports = router;
