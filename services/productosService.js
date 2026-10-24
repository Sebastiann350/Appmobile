// codigo que se conecta a nuestra base de datos

//libreria y credenciales de la base de datos en una variale global

const productos = [
    { id: 1, nombre: 'Notebook actualizar', precio: 500000},
    { id: 2, nombre: 'Mouse', precio: 15000},
    { id: 3, nombre: 'Teclado', precio: 25000},
];

console.log("SERVICIO");

const obtenerTodo = () => productos;

module.exports = {obtenerTodo};