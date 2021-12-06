/*
Componentes:
*/
//1. Importacion
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

//2. Funcion
function App() {

  //manejo de variables y otras funciones
  const bootcamp = "Ironhack"

  //ESTE FORMATO NO ES HTML COMPLETAMENTE, SINO TAMBIEN INVOLUCRA JS AL SIMULTANEO
  //HTML + JS = JSX
  return (
    <div className="App">
     <Header nombre="Rod" ciudad="CDMX"/>
    <p>HOLA MUNDO</p>
    <p>ROD GON</p>
    <p>{12*12}</p>
    <p>{bootcamp}</p>

    {/*
    <Header nombre="Mike" ciudad="EDOMEX"/>
    <Header nombre="Sam" ciudad="Hidalgo"/> */}


    <hr />

    <Main />

    <hr />

    <Footer email="hola@mexaverse.com" edad="12" />
    <Footer email="adios@mexaverse.com" edad="22" />

    </div>
  );
}


//3.EXPORT
export default App;
