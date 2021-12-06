import React from 'react'

export default function Movies(props) {

    const movies = props.movies

    return (
        <>
            {
                movies.map((e,index) => {
                    return (
                        <div key={index}>
                            <p>La pelicula se llama: {e.title} y su platillo principal es: {e.director} </p>
                        </div>
                    )
                })
            }
        </>
    )
}
