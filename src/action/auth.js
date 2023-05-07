import * as api from '../api'
import { setCurrentUser } from './currentUser'
// import Auth from '../pages/Auth/Auth'

export const signUp =(authData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.signUP(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
        
    }
}
export const login =(authData, navigate) => async (dispatch) =>{
    try {
        const {data} = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
        
    }
}