import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  //Declarando una funcion arrow en onclick
  // const onDelete = () =>{
  //   alert('Ya borraste el todo '+ props.text);
  // }
  
  return (
    <li className="TodoItem">
      <span className={//Aqui podemos observar que se aplican clases junto a propiedades haciendo suma de texto eh imagen
        `Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
