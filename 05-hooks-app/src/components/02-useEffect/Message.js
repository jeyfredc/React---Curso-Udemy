import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x:0,
        y:0,
    })

    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = (e) => {

            const coords = {
                x: e.x,
                y: e.y,
            }
            setCoords(coords);
            // console.log(coords);
            // console.log('Iniciando Componente');
        }
        
        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            window.removeEventListener('mousemove', mouseMove);
            // console.log('Saliendo del Componente');

        }
    }, [])

    return (

        <div>
            <h1> x: {x}</h1>
            <h1> y: {y}</h1>
            <h3>Eres genial!!!</h3>
        </div>
    )
}
