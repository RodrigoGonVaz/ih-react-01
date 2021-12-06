import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // ---> trae el archivo de css
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(    //<---- invoca unos argumentos: el primer argumento tiene etiquetas html - componentes, pedasos de codigos
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
