// codigo que se conecta a nuestra base de datos

//libreria y credenciales de la base de datos en una variale global



console.log("SERVICIO");

const supabase = require('../config/supabase');

const obtenerTodo = async () => {
    //return productos

    const{data,error} =  await supabase

    .from('productos')
    .select('*');
 if (error) throw error;
 return data;   
}

const obtenerPorId = async (id) =>{

    const {data, error} = await supabase  //traemos los datos del comodin
    .from ('productos')  // de la tabla producto
    .select('*')  //trame todo
    .eq('prod_codigo', id);  // filtralo por id

    if (error) throw error;  // si da error

    return data;  // si esta todo ok retorna data

}

const crear = async (productos)=> {

    const {data,error} = await supabase
    .from ('productos')
    .insert (productos)
    .select ();

    if (error) throw error;

    return data;

}

module.exports = {obtenerTodo, obtenerPorId, crear};  // exportamos para utilizar en controller