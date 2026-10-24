require('dotenv').config(); //importamos libreria .env

const express = require('express');  // importamos la libreria



const app = express();  //creamos nuestro servidor -- app va a ser nuestro servidor para manejar rutas e info que lleva de la api, peticiones get post.

app.use(express.json());  // para poder trabajar la info que llegue de un request, poder transformar esa info en json






app.get('/mensaje', (req, res) => {
    res.json({mensaje: 'Servidor funcionando'});
});



app.use('/api/productos', require('./routes/productoRoutes'));  //Todo lo que venga de /api/productos lo resuelve este archivo ./routes/productosRoute

//app.use('/api/categorias', require('./routes/categoriasRoutess'));


app.listen(3000, () => {
    console.log('Servidor funcionando en puerto 3000');
});