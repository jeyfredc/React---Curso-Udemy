import React from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [values, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    const {name, email, password } = values;

    return (

        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value= {name}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value= {email}
                onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="****"
                autoComplete="off"
                value= {password}
                onChange={ handleInputChange }
                />
            </div>

            <button 
            className="btn btn-success"
            type="submit">
                Enviar
            </button>
            
        </form>
    )
}
