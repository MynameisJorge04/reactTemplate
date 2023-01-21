import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(props){
    //Podemos declarar afuera de ello con una funcion que pueda ser reutilizable
    const onClickButton = () =>{
        // alert(msg)
        //Lo que hacemos es devolver la negacion del estado anterior es un toggle
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <button
        //En react tenemos la posibilidad a traves de ON el desarrollar eventos aplicados a la estructura de la aplicacion esto hace mas facil la escritura
        className="CreateTodoButton"
        //Se decalara de esta manera y le enviamos una funcion arrow meter uan funcion y recibir propiedades dentro de uan funcion con parametros de una funcion
        // onClick={() => onClickButton('Aqui podemos ver lo loco de esto')}
        onClick={onClickButton}
        >
        +
        </button>
    );
}

export { CreateTodoButton };