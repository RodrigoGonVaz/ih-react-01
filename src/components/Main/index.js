//1.IMPORT
import React from "react";
import Food from "./Food";
import Movies from "./Movies";


// 2. FUNCIONES
function Main (){

    const foodList = [
        "tamales",
        "tortas",
        "tacos"
    ]

    const restaurantsList = [
        {
            nombre: "Mc Donalds",
            platilloPrincipal: "Hamburguesas"
        },
        {
            nombre: "Pizza Hut",
            platilloPrincipal: "Pizza"
        },
        {
            nombre: "Casa de Toño",
            platilloPrincipal: "Taquitos de cochinita"
        }
    ]

    const movieList = [
        {
            title: "Interstellar",
            director: "Christopher Nolan"
        },
        {
            title: "Gladiator",
            director: "Ridley Scott"
        },
        {
            title: "Ex Machine",
            director: "Alex Garland"
        }
    ]



	return (

        <>
        <Movies movies={movieList} />
        <hr/>
		<Food list={foodList} restaurants={restaurantsList} />
        </>
	)

}


// 3. EXPORTACIÓN
export default Main