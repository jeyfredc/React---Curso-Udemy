import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import './login.css'

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        
        dispatch({
            type: types.login,
            payload: {
                name: 'jeyfred.calderon',
            }
        })

        history.replace('/')

    }

    return (
    <div className="containerLogin">
        <div className="row mt-5">
            <div className="col-md-offset-5 col-md-3">
                <div className="form-login">
                    <h4>Bienvenido a Heroes App.</h4>
                    <p>Por favor haz click sobre Login para ingresar a la aplicación</p>
                        <button 
                            className="btn btn-dark btn-md"
                            onClick={ handleLogin}
                        >
                            login
                        </button>
                </div>
            </div>
        </div>
    </div>
    )
}
