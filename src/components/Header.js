//1.IMPORT
import React from "react";





//2. FUNCTION
// const Header () =>{}
function Header (props){ //<-- Props es un parametro y se hace argumento(onjeto) en Header con la propiedad que se le ponga.

    console.log(props) //<-- Objeto: {nombre: 'Rod', ciudad: 'CDMX'}/{nombre: 'Mike', ciudad: 'EDOMEX'}/{nombre: 'Sam', ciudad: 'Hidalgo'}
    return (
        <p>Soy El Header. Te doy la bienvenida {props.nombre} de {props.ciudad}</p>
    )

}


//3. EXPORT
// module.exports = Header
export default Header
