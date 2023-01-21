import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index.js';

//Importando los scripts de react obtenemos el render de react
//Ejemplo: const e = Rect.createElement

/*Para crear componentes con react

function App(){
  return ();
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    //Podemos escirbir hijos dentro de nuestros elementos, que recibiremos como children, siendo obtenidos como parametros
    <App />

);

// De esta fomra podemos crear modal view o un popup
// ReactDOM.createPortal(
//   <App />,
//   document.getElementById('modal')
// )


