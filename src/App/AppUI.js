import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoHeader } from "../TodoHeader";
import { Modal } from "../Modal";


//Podemos tener un envolvimiento de propos con reactcontext

function AppUI() {
  // El hook de contexto nos ayuda a acceder a datos globales de nuestro  contexto, desde cualquier componente hijo, sin tener que pasar estos datos por props componente por componente.
  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    //Soporta un componente solamente
    //Esta etiqueta nos funciona para calculos internos solo enviamos una etiqueta por componente envolver para quitar cantidad divs
    //Para comentar o poner javascript con las {} claves
    <React.Fragment>
      {
        //Para evitar confusiones no se debe dar class si no que se da con class name evitar clases de js
        //La magia de JSX es las propiedades que hay
        <TodoHeader />
        //Poner nuestros elementos
        //Todocounter es el que marcara el numero de todos completados
      }
      <TodoCounter />

      {
        //El input de busqueda que escribamos
        //podemos crear a traves de react nuestra app principal los valores de estados de nuestra app
      }
      <TodoSearch />

      {
        //COntenedor de todos con lista
        //Tenemos nuestro componente que sera el recursivo reutilizable, utilizando map rendrizando
        //Podemos ocupar Consumer vamos a enviar funcion con renders
      }

      {/* Podemos observar que tenemos nuestros valores podemos para enviar esto sin necesidad de tener componentes */}
      <TodoList>
        {
          //Controlamos de esta manera si hay un estado de error etc
          error && <p>Desesperate, hubo un error...</p>
        }
        {loading && <p>Estamos cargando, no desesperes...</p>}

        {
          //Esto se comprende como el manejo de efectos dependeiendo del numero total se desprende un texto etc
          !loading && !searchedTodos.length && <p>Crea tu primer todo</p>
        }

        {searchedTodos.map((todo) => (
          //Tomemos en cuenta que hay que tener un identificador de lista asi como un ID en abse de datos
          <TodoItem
            key={todo.text}
            text={todo.text}
            //Enviamos una nueva propiedad que se llame completed
            completed={todo.completed}
            //Enviamos las propiedas a nuestro componente para la actualizacion y re-renderizacion de todos
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      {/* Recuerda que la doble negacion significa que es igual a true hacemos validacion para enseñar el componente teletransportado */}

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { AppUI };
