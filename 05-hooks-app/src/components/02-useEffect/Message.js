import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('Componente recibido');
        
        return () => {
            console.log('Componente Saliendo');
        }
    }, [])

    return (
        
        <div>
            <h3>Eres genial!!!</h3>
        </div>
    )
}
