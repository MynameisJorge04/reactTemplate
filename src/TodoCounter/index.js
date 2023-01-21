//Importamos nuestro react
import React from 'react';
import { TodoContext } from '../TodoContext';

//Podemos importar nuestros archivos css
import './TodoCounter.css'

function TodoCounter() {
    const { totalTodos, completedTodos} = React.useContext(TodoContext);
    //Para agregar atributos en el mismo componente lo que hacemos es 

    //Retornamos nuestor componente
    return (

        <div className='TodoCounter--container'>
            <h1>Bienvenido</h1>
            <p className='TodoCounter'>Has completado <span className='span-counter'>{completedTodos}</span> de <span className='span-counter'>{totalTodos}</span> tareas</p>  
        </div>

        /*En react necesitamos hacer y utilizar 2 llaves por los objetos complentados en js
        <h2 style={{
            color: 'red',
            backgroundColor: 'yellow'
        }}>Has completado 2 de 3 TODOS</h2>*/

        
    );
             
}

//De esta forma hacemos el encapsulamiento de forma estricta
export { TodoCounter };