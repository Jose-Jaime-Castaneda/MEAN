const express = require('express');
const conectarDB = require('./config/db');

const app = express();
conectarDB();
app.use(express.json());
app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('El servidor funciona');
})