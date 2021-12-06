//1.IMPPORT
import React from 'react'


//2.EXPORT of FUNCTION
export default function Food(props) {

    //console.log(props) //{list: Array(3), restaurants: Array(3)}
    const list = props.list
    const restaurants = props.restaurants
    
    //cada componente solo devuelve una etiqueta, no puedo hacer un <div> fuera del otro
    // solo una etiqueta Padre. FRAGMENTOS = <></> SON divs. Siempre van en un componente
    return ( 
        <>

            {      //itera en cada uno de los elementos del arreglo y se expresa en un <p>
                list.map((e, index) => { //map hace un nuevo arreglo y forEach hace mutabilidad en el arreglo
                    return (
                    <div key={index}>
                        <p>La comida es:</p>
                        <p> {e} </p>
                    </div>    
                    )
                })
            }
            <hr/>  
            {
                restaurants.map((e,index) => {
                    return (
                        <div key={index}>
                            <p>El restaurante se llama: {e.nombre} y su platillo principal es: {e.platilloPrincipal} </p>
                        </div>
                    )
                })
            }
        
        </>
        

    )
}
