//pedimos a react que nos haga un paquete invisible
//LLamamos a nuestro archivo todocounter traer la funcion no el archivo
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


//Ejemplo: tenemos una url 
//const url = "https://.jpg" podemos remplazar con el nombre de la variable

//Esto se traduce a una clase en un div, que solo son llamados a react
//Podemos obtener parametros de elementos desde nuestro index.js observamos que hay buenos
//mensajes existentes

//Lista falsa de todos

// const defultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar curso intro react', completed: false},
//   {text: 'Llorar con la lloran', completed: false},
//   {text: 'LALALALLALALAA', completed: false},
// ];



function App() {
  

  return (

    //Creando toda la app desing de la pagina con los props de cada cosa

    //Llamamos a nuestro Todo Provider
    <TodoProvider>
      {/* Ya podemos tener cualquier componente dentro de appui pueden comunicarse a traves de consumer */}
      <AppUI/>
    </TodoProvider>

    // //Soporta un componente solamente
    // //Esta etiqueta nos funciona para calculos internos solo enviamos una etiqueta por componente envolver para quitar cantidad divs
    // //Para comentar o poner javascript con las {} claves
    // <React.Fragment>
    // {//Para evitar confusiones no se debe dar class si no que se da con class name evitar clases de js
    // //La magia de JSX es las propiedades que hay
    // <TodoHeader/>
    // //Poner nuestros elementos
    // //Todocounter es el que marcara el numero de todos completados
    // }
    // <TodoCounter
    // total={totalTodos}
    // completed={completedTodos}
    // />

    // {//El input de busqueda que escribamos
    //  //podemos crear a traves de react nuestra app principal los valores de estados de nuestra app
    // }
    // <TodoSearch
    //   searchValue={searchValue}
    //   setSearchValue={setSearchValue}
    // />
    
      
    // {//COntenedor de todos con lista
    // //Tenemos nuestro componente que sera el recursivo reutilizable, utilizando map rendrizando
    // }
    // <TodoList>
      
    // {searchedTodos.map(todo => (
    //       //Tomemos en cuenta que hay que tener un identificador de lista asi como un ID en abse de datos
    //       <TodoItem 
    //       key={todo.text} 
    //       text={todo.text}
    //       //Enviamos una nueva propiedad que se llame completed
    //       completed={todo.completed}
    //       //Enviamos las propiedas a nuestro componente para la actualizacion y re-renderizacion de todos
    //       onComplete={() =>completeTodos(todo.text)}
    //       onDelete={() =>deleteTodos(todo.text)}
    //       />
    //  ))}
      
    // </TodoList>

    // <CreateTodoButton/>
    // </React.Fragment>
    );

    
}

//Encapsulamiento javascript
export default App;
