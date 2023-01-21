import React from 'react';

//Podemos empezar a hacer hoooks como queramos
function useLocalStorage(itemName, initialValue) {
  //Cuando tengamos algo de infromaicon dentro de nuestro estado porque ya acabo de cargar entonces pasamos a la aplicacion
  const [error, setError] = React.useState(false);
  //Cuando tengamos algo de infromaicon dentro de nuestro estado porque ya acabo de cargar entonces pasamos a la aplicacion
  const [loading, setLoading] = React.useState(true);
  //Ya no traeremos por defecto la informacacion storage si nho lo definido
  const [item, setItem] = React.useState(initialValue);
  
  //Lo que haremos es simular que tardara un rato en llegar
  React.useEffect(() => {
    //Cantidad de tiempo hasta ejecutar la funcion
    setTimeout(() => {
      try {
        //Vamos a hacer un try catch, que consiste en una condicion de error, y ejecuta cierta parte de codigo
         //Casi siempre las APIS tienen ciertas versiones
        const localStorageItem = localStorage.getItem(itemName);

        //Crear un primer array vacio con cosas vacias, tenbemos que traer la info guardada en local storage
        let parsedItem;
        
        //Vemos si tiene informacion
        if (!localStorageItem) {
          //Por defecto una lista de todos necesitamos enmviar un string
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } 

        //Ya tiene algunos todos
        else {
          parsedItem = JSON.parse(localStorageItem);
        }
        //Nuestro estado es el inical al tener un array vacio, lo que hace es dar el nuevo valor en localstorage
        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        //Tomamos en cuenta que los errores son falsos
        setError(error);
      }
    }, 1000);
  });
  
  //Para la persistencia cada cambio debemos llamar nuestro local storage para persistencia
  const saveItem = (newItem) => {
    try {
      //Envolvemos a nuestros items por si hay algun error tambien
      const stringifiedItem = JSON.stringify(newItem);
      //HAY QUE PERSISTIR la informacion
      localStorage.setItem(itemName, stringifiedItem);
      //Debemos evitar la actualizacion de la pagina
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  //Necesitamos retornar localStorage, es importante tomar en cuenta que si hay mas estados que dos en un hook devolvemos un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };


// import React from 'react';

// //Podemos empezar a hacer hoooks como queramos

// function useLocalStorage(itemName, initialValue) {
//     //Cuando tengamos algo de infromaicon dentro de nuestro estado porque ya acabo de cargar entonces pasamos a la aplicacion
//     const [loading, setLoading] = React.useState(true);
  
//     //Cuando tengamos algo de infromaicon dentro de nuestro estado porque ya acabo de cargar entonces pasamos a la aplicacion
//     const [error, setError] = React.useState(false);
  
//     //Ya no traeremos por defecto la informacacion storage si nho lo definido
//     const [item, setItem] = React.useState(initialValue);
  
//     //Lo que haremos es simular que tardara un rato en llegar
//     React.useEffect(() => {
//       //Cantidad de tiempo hasta ejecutar la funcion
//       setTimeout(() => {
//         //Vamos a hacer un try catch, que consiste en una condicion de error, y ejecuta cierta parte de codigo
  
//         try{
//           //Casi siempre las APIS tienen ciertas versiones
//         const localStorageItem = localStorage.getItem(itemName);
  
//         //Crear un primer array vacio con cosas vacias, tenbemos que traer la info guardada en local storage
//         let parsedItem;
  
//         //Vemos si tiene informacion
//         if (!localStorageItem) {
//           //Por defecto una lista de todos necesitamos enmviar un string
//           localStorage.setItem(itemName, JSON.stringify(initialValue));
//           parsedItem = initialValue;
//         }
  
//         //Ya tiene algunos todos
//         else {
//           parsedItem = JSON.parse(localStorageItem);
//         }
  
//         //Nuestro estado es el inical al tener un array vacio, lo que hace es dar el nuevo valor en localstorage
//         setTimeout(parsedItem);
//         setLoading(false);
//         } catch(error){
//           //Tomamos en cuenta que los errores son falsos
//           setError(error);
//         }
  
//       }, 1000);
//     });
  
  
  
//     //Para la persistencia cada cambio debemos llamar nuestro local storage para persistencia
//     const savedItem = (newItem) => {
//       //Envolvemos a nuestros items por si hay algun error tambien
//       try{
//         //HAY QUE PERSISTIR la informacion
//       const stringifiedItem = JSON.stringify(newItem);
//       //GUardamos nuestra cadena
//       localStorage.setItem(itemName, stringifiedItem);
//       //Debemos evitar la actualizacion de la pagina
//       setItem(newItem);
//       } catch(error){
//         setError(error);
//       }
//     };
  
//     //Necesitamos retornar localStorage, es importante tomar en cuenta que si hay mas estados que dos en un hook devolvemos un objeto
//     return {
//       item, 
//       savedItem, 
//       loading,
//       error,
//     };
//   }

//   export { useLocalStorage };