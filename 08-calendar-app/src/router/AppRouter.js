import React, { Fragment } from 'react'
import {
    Route,
    Routes,

} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <div>

            <Routes>
      

                <Route
                    path='/login'
                    element={<LoginScreen />}
                    />
               
            
                <Route
                    path='/calendar'
                    element={<CalendarScreen />}
                    
                    />
                  

                {/* /login
                /Calendar  */}

            </Routes>
        </div>
    )
}
