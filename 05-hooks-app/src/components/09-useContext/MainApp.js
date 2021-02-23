import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})

/*     const user = {
        id: 12345,
        name: 'Jeyfred C',
        email: 'jeyfredc@gmail.com'
    } */
    return (

        <div>
            <UserContext.Provider value={{ user, setUser }}>

            <AppRouter />
            
            </UserContext.Provider>
        </div>
    )
}
