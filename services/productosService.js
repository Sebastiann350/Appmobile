// codigo que se conecta a nuestra base de datos

//libreria y credenciales de la base de datos en una variale global



console.log("SERVICIO");

const supabase = require('../config/supabase');

const obtenerTodo = async () => {
    //return productos

    const{data,error} =  await supabase

    .from('Productos')
    .select('*');
 if (error) throw error;
 return data;   
}

module.exports = {obtenerTodo};