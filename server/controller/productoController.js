const { send } = require("process");
const Producto = require("../Models/Producto");

exports.crearProducto = async (req, res) => {
    try {
        let producto;
        producto = new Producto(req.body);

        await producto.save();
        res.status(200).send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al registrar el producto');
    }
}

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obetener los productos');
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        const productos = await Producto.findById(req.params.id);
        res.json(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obetener el producto');
    }
}

exports.editarProducto = async (req, res) => {
    try {
        const { nombre, categoria, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
        res.status(200).send('Producto actualizado con exito');

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema al actualizar el producto');
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: 'No existe el producto' });
        }
        await Producto.findOneAndDelete({ _id: req.params.id });
        res.status(200).send('Producto eliminado con exito');

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un problema al eliminar el producto');
    }
}