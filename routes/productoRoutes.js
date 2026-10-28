//localhost:3000/api/productos lo resuelvo en este archivo

const express = require('express');   //importamos libreria para que teng funcion de un servidor

const router = express.Router();   //encargado de enrutar los pedidos

const ctrl = require('../controller/productosController');   //controlador 

console.log("ENRUTADOR");

router.get('/', ctrl.obtenerTodo);   //definidor la accion obtenerTodo
router.get('/', ctrl.obtenerUltimo);
router.get('/:id', ctrl.obtenerPorId);
router.post('/crear', ctrl.crear);
router.post('/eliminar', ctrl.eliminar);
router.post('/actualizar', ctrl.actualizar);

module.exports = router;   //exportar