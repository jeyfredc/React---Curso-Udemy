import React, { useEffect, useReducer } from 'react'

import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
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



/*     console.log( description ); */

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

   

    const handleDelete = ( todoId ) => {

        // console.log(todoId)

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = ( todoId )=> {
        dispatch({
            type:'toggle',
            payload: todoId
        })
    }

    const handleAdd = ( newTodo ) => {
        dispatch({
            type:'add',
            payload: newTodo
        })
    }


    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                    todos={ todos } 
                    handleDelete={ handleDelete } 
                    handleToggle={ handleToggle }
                    />
            </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd 
                    handleAdd={handleAdd}
                    dispatch = {dispatch}/>

                </div>
            </div>
            
        
        </div>
    )
}
