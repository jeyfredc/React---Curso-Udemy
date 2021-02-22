import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'


export const EjemploRealRef = () => {
    
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Ejemplo Real Ref</h1>
            { 
            show
             ? 
            <MultipleCustomHooks />
            :
            null }

            <button 
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow(!show) 
                } }
            >
                Show/Hide
            </button>
        </div>
    )
}
