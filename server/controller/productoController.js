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