import * as actionTypes from '../ActionTypes';
import axios from 'axios';



export const auth = (email, password, mood) => dispatch =>{
    const authData = {
        email: email,
        password:password,
        returnSecureToken:true
    }
    let authUrl = null;
    if(mood === "Sign Up"){
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    }else{
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }
    const API_KEY = "AIzaSyBQhqM_pc-lIrOmf-QZUWFgE6uSHpQWdWs";
    axios.post(authUrl+API_KEY,authData)
    .then( response => console.log(response))  
}