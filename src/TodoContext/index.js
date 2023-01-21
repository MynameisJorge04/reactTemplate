import React from "react";
import { useLocalStorage } from "./useLocalStorage";

//Esta herramienta nos permite compartir los esatados de todos los componentes de la navegacion sienod este un objeto
const TodoContext = React.createContext();

function TodoProvider(props) {
  //Nuesro hook cuenta con estados, obviamente cambiando a objetos
  const {
    item: todos,
    saveItem: savedTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  //Creamos nuestros estados a traves de nuestro searchValue y esto hace que haya una posuble reutilizacion de los componentes esto nos ayudara al cambio de estado dinamico
  const [searchValue, setSearchValue] = React.useState('');

  //Estado para modal abrir 
  const [openModal, setOpenModal] = React.useState(false);

  //CUantos todos hemos completado, a traves de nuestro todo viendo la propiedad interesante la forma de validacion con doble signo de admiiracion
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length; //Total de todos

  //Buscar si no han escrito nada en un arreglo con el input
  let searchedTodos = [];
  //Vemos si search es mayor que 1 para ver si no han escrito se muetsrasn igual

  /*Otra forma de realizarlo es un poco mas compacto
  const todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  */

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }
  //Vamos a filtrar cantidad de todos en la listay convertimos todas las minisuculas en mayusuclas
  else {
    //Con esto lo que logramos hacer esque convertimos el input a minusculas de lo que hacemos es llamar a nuestro evento filterdonde buscaremos cada componente rendreizado
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      //De esta forma comparamos con string cuales hay
      return todoText.includes(searchText);
    });
  }

  //Esto es para marcar la funcion como completado, el id es text que ocuparemos
  const completeTodos = (text) => {
    //Metodo que encuentra el Index
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    //Lista de todos entramos y por cada estado de todo Index cambiamos a true

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };

    //De esta forma inyectamos todos los todos esto para hacer los rededenres cambiar los estados con lso 3 puntos inyectamos todos
    const newTodos = [...todos];
    //Forma facil de desarrollar los estados clonando todos
    newTodos[todoIndex].completed = true;
    //Causamos el redender con nuestros todos para obtener
    savedTodos(newTodos);
  };

  //Esto es para añadir todos dentro de nuestro arreglo
  const addTodos = (text) => {
    //Tenemos nuestro arreglo
    const newTodos = [...todos];
    
    newTodos.push({
      completed: false,
      text,
    });

    //Guardamos nuestro arreglo
    savedTodos(newTodos);
  };

  //Esto para eliminar un arreglo
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    //En esta caso solo ponemos 1 para un todo eliminado
    newTodos.splice(todoIndex, 1);
    //nuestro render
    savedTodos(newTodos);
  };

  //  console.log('Antes del use effect');
  //  //Este hook lo que hace es renderizar un useEffect lo que hace es antes de renderizar en el html del cliente react acabo de hacer todo eso
  //  React.useEffect(() =>{
  //      console.log('use effect');
  //      //El array nos ayuda a que nuestro efecto solo se renderize una vez
  //      //Lo condicionamos cada que un todo se mueve
  //  }, [totalTodos]);

  // console.log('Despues del use effect');

  return (
    //Lo que hace interesante esque tenga por dentro cualquier componente dentro de los componentes, basicmanetetrayendo todos los props, ocupamos value par acompoartir propiedades dobles llaves
    <TodoContext.Provider value={{
     loading,
     error,
     totalTodos,
     addTodos,
     completedTodos,
     searchValue,
     setSearchValue,
     searchedTodos,
     completeTodos,
     deleteTodos,
     setOpenModal,
     openModal,
    }}>{props.children}</TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};

//Sacamos las propiedad provider y el consumer lo que hace el provider es para envolver toda la aplicacion, y el consumer es para tomar la informacion en nuestro estado

/* <TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer> */

