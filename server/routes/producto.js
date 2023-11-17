const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

router.post('/', productoController.crearProducto);

module.exports = router;