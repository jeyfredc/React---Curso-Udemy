import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import firebase from 'firebase';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const [checking, setChecking] = useState(true)

    const [loggedIn, setLoggedIn] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if(user?.uid){

                dispatch( login( user.uid, user.displayName ))
                setLoggedIn(true)
            }else {
                setLoggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if(checking){
        return(
        <h1>Espere...</h1>
        )
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
