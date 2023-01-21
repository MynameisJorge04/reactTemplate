import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

//NOs deben enviar dos props para seguir leyendo a traves de la app principal
function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    //Esta es la forma de llamar a los estados para react con esto podemos tomar en cuenta la realizacion de  nuestro estado
    //Devolvemos un valor search del input y tambien una funcion que cambia con un string en cada valor

    //Obtenemos el valor de nuestro input esto es a traves de un parametro
    
    const onSearchValueChange = (event) =>{
        //Esta propiedas saca a traves del metodoOnchange el valor que tiene el input con nuestro target
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    //Esta es una forma de enviar componenetes o etiquetas para react en este caso lo hicimos con arrays:
    return(
        <input 
        className='TodoSearch' 
        placeholder="Buscar tareas" 
        //Ocupamos declarar el valor del iinput interpretado por el estado
        value={searchValue}
        //Cada cambio que hay de un usuario propiedad de cambio
        onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };