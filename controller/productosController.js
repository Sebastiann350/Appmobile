

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

const obtenerPorId = async (req, res) => {

    console.log(req.params);  // lo recibo dentro de la url params con id - console.log

    try {
        const data = await service.obtenerPorId(req.params.id);  // ruta del servicio
        return res.json(data);  //retorna la respuesta en json lo que contiene data
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al obtener por id"});  //si da error retorna status 500 con el json "".
    }



}

const crear = async (req, res) => {

    console.log(req.body);

    try {
        const data = await service.crear(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        returnres.status(500).json({error: "error al crear registro"})
    }



}

const eliminar = async (req, res) =>{

    console.log(req.body.prod_codigo);

    try {
        const data = await service.eliminar(req.body.prod_codigo);
        return res.data(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al eliminar"})
    }

}


const obtenerUltimo = (req, res) => {}

module.exports = {obtenerTodo, obtenerUltimo, obtenerPorId, crear, eliminar};  // exportamos para utlizar en routes