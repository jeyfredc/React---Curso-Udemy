import React, { useReducer } from 'react'

import './styles.css'
import { todoReducer } from './todoReducer';

const initialState = [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos ] = useReducer(todoReducer, initialState);

    console.log( todos );


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>

            </ul>
        </div>
    )
}
