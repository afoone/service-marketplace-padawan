const { createServicio, getServicios, getServicio,
  updateServicio, deleteServicio } = require('../controllers/servicio');
const { Router } = require('express');

const router = Router();

router
  .post("/", createServicio)
  .get("/", getServicios)
  .get("/:id", getServicio)
  .put("/:id", updateServicio)
  .delete("/:id", deleteServicio)

module.exports = router;
