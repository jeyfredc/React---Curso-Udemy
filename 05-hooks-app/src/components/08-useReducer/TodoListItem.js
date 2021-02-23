import React from 'react'

export const TodoListItem = ({ handleDelete, handleToggle, init, todo, i}) => {
    return (
        <>
            <li 
                
                className="list-group-item"
            >
            <p 
                className={`${ todo.done && 'complete'}`}
                onClick= { () =>  handleToggle(todo.id) } 
            >
                { i + 1 }. { todo.desc }
            </p>
            <button
                type="submit"
                className="btn btn-danger"
                onClick={ () => handleDelete ( todo.id) }
                value={init}
            >
                Borrar
            </button>
            </li>
        </>
    )
}
