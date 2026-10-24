

const service = require('../services/productosService');   //importamos nuestro servicio en carpeta services/productosService

const obtenerTodo = (req, res) => {   //en res responde de lo q venga de la base de datos

    // validar datos que llegan
    
    const productos = service.obtenerTodo();   //   se conecta con la base de datos

    res.json(productos);   // viene los datos en formato json

}

const obtenerUltimo = (req, res) => {}

module.exports = {obtenerTodo, obtenerUltimo};