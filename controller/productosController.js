

const service = require('../services/productosService');   //importamos nuestro servicio en carpeta services/productosService

console.log("CONTROLADOR");

const obtenerTodo = async (req, res) => {   //en res responde de lo q venga de la base de datos

    // validar datos que llegan
    //const productos = await service.obtenerTodo();   //   se conecta con la base de datos
    //res.json(productos);   // viene los datos en formato json

    try {
        const productos =  await service.obtenerTodo();
        res.json(productos);

    } catch (error) {
        console.error(error);
        res.status(500).json({error:"error en el servidor"})
    }

}

const obtenerUltimo = (req, res) => {}

module.exports = {obtenerTodo, obtenerUltimo};