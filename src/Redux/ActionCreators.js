import * as actionTypes from './ActionTypes';
import axios from 'axios';

export const addIngredient = igtype => {
    return {
        type:actionTypes.ADD_INGREDIENT,
    payload:igtype,
    }
}

export const removeIngredient = igtype => {
    return {
        type:actionTypes.REMOVE_INGREDIENT,
    payload:igtype,
    }
}

export const openPurchasable = () => {
    return{
        type:actionTypes.OPEN_PURCHASABLE
    }
}

export const stateReset = () => {
    return{
        type:actionTypes.STATE_RESET
    }
}

export const loadOrders = orders => {
    return{
        type:actionTypes.LOAD_ORDERS,
        payload:orders
    }
}


export const failedOrders = () => {
    return{
        type:actionTypes.FAILED_ORDERS
    }
}


export const fetchOrder = () => dispatch =>{
    axios.get("https://burgerbuilder2-53123-default-rtdb.firebaseio.com/orders.json")
    .then(response => {
        dispatch(loadOrders(response.data))
    })
}