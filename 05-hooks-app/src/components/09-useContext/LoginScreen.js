import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser} = useContext(UserContext)
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ ()=> setUser({
                    id: 12345,
                    name: 'Jeyfred C',
                    email: 'jeyfredc@gmail.com'
                })}
            >
                Login
            </button>
        </div>
    )
}
