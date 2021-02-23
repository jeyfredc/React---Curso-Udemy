import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAdd, dispatch}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description : ''
    })

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

        handleAdd(newTodo)

        dispatch(handleAdd);
        reset();
    }
    
    return (
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
    )
}
