import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';

import './styles.css'
import { todoReducer } from './todoReducer';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    
/*     return [{
    id: new Date().getTime(),
    desc : 'Aprender React',
    done: false
}]; */
}

export const TodoApp = () => {

    /*  const [state, dispatch] = useReducer(reducer, initialState, init) 
    el argumento reducer, es la funcion reducer que se va a declarar, initialState, el estado inicial de la apliacion y init es una funcion
    que se usa para inicializar el state en caso de que ese state sea procesado o haga varias acciones.
    
    dispatch ayuda a disparar las acciones hacia el reducer  */
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

/*     console.log( description ); */

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validacion, utilizamos trim() para quitar espacios vacios y el recorrido de lo que escribimos en el campo con .length
        // Si es menor a 1 retorna vacio y no hace nada

        if( description.trim().length <= 1){
            return;
        }

        // console.log('Nueva tarea');
        const newTodo = {
            id: new Date().getTime(),
            desc : description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch(action);
        reset();
    }

    const handleDelete = ( todoId ) => {

        // console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
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
                                            type="submit"
                                            className="btn btn-danger"
                                            onClick={ () => handleDelete ( todo.id) }
                                            value={init}
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
                            onChange={ handleInputChange }
                            value= { description }
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
