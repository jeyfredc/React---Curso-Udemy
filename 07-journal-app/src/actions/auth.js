import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui'

export const startLoginEmailPassword = ( email, password )=> {
    return ( dispatch ) => {

        dispatch(startLoading())

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user })=> {
            console.log(user)

            dispatch(login (user.uid, user.displayName));

            dispatch(finishLoading())
        }).catch(error => {
            console.log(error)
            dispatch(finishLoading())
        }
        )

    }
}
    

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return ( dispatch ) => {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({ user })=> {
                console.log(user)
                await user.updateProfile({ displayName: name })

                dispatch(
                    login (user.uid, user.displayName) 
                )
            } ).catch(error => console.log(error))
    }

}

export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then ( ({ user }) => {
                dispatch(
                    login (user.uid, user.displayName) 
                )
            });
    }
}


export const login = ( uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout () );
    }
}

export const logout = () => ({
    type: types.logout
})