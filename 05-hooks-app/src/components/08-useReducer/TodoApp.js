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
    const [ todos, dispatch ] = useReducer(todoReducer, initialState);

    console.log( todos );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : 'Nueva tarea',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <ul className="list-group list-group-flush">
                            {
                                todos.map( (todo, i) => (
                                    <li 
                                        key={ todo.id}
                                        className="list-group-item"
                                    >
                                        <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                        <button
                                            className="btn btn-danger"
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))
                            }

                        </ul>
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                            >
                            Agregar
                        </button>
                        
                    </form>

                </div>
            </div>
            
        
        </div>
    )
}
