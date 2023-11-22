const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');

router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProducto);
router.put('/:id', productoController.editarProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;