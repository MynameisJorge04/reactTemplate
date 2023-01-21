import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
  
  const [newTodosValue, setNewTodosValue] = React.useState('');

  const { addTodos, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodosValue( event.target.value );
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodosValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo todo</label>
      <textarea 
      value={newTodosValue}
      onChange={onChange}
      placeholder="Cortar la cebolla para el almuerzo" />
      <div className="TodoForm-buttonContainer">
        <button 
        type="button" 
        onClick={onCancel}
        className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button 
        type="sumbit"
        className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
