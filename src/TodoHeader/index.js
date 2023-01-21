//Importamos nuestro react
import React from 'react';

//Podemos importar nuestros archivos css
import './TodoHeader.css'

function TodoHeader() {

    //Para agregar atributos en el mismo componente lo que hacemos es 

    //Retornamos nuestor componente
    return (
        
            <h4 className='TodoHeader'>Todo Machine</h4>  
        
    );
             
}

//De esta forma hacemos el encapsulamiento de forma estricta
export { TodoHeader };