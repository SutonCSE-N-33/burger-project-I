import * as actionTypes from './ActionTypes';
const fiexedPrice = {
    Salad: 20,
    Cheese: 40,
    Meat: 50
}

const initState = {
    ingredients : [
        {type:"Salad", amount:0},
        {type:"Cheese", amount:0},
        {type:"Meat", amount:0}
    ],
    totalPrice: 0,
    purchasable:false,
    orders:[],
    orderLoading:true,
    orderErr:false
}


export const Reducer = (state = initState, action) => {

    const ingredients = [...state.ingredients];
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
        for(let item of ingredients){
            if(item.type === action.payload)  item.amount++;
        }
        return {
            ...state,
            ingredients: ingredients,
            totalPrice: state.totalPrice + fiexedPrice[action.payload]
        }

        case actionTypes.REMOVE_INGREDIENT:
        for(let item of ingredients){
            if(item.type === action.payload){
                if(item.amount === 0){
                    return;
                }
                item.amount--;
            }
            
        }
        return {
            ...state,
            ingredients: ingredients,
             totalPrice: state.totalPrice - fiexedPrice[action.payload]
        }

        case actionTypes.OPEN_PURCHASABLE:
            const sum = ingredients.reduce((sum, element) => {
                return sum + element.amount;
            },0);
    return{
        ...state,
        purchasable: sum> 0
    }
    case actionTypes.STATE_RESET:
        return{
            ...state,
            ingredients : [
                {type:"Salad", amount:0},
                {type:"Cheese", amount:0},
                {type:"Meat", amount:0}
            ],
            totalPrice: 0,
            purchasable:false
        }
        case actionTypes.LOAD_ORDERS:
            let orders =[];
            for(let key in action.payload){
                orders.push({
                    ...action.payload[key],
                    id:key
                })
            }
            return{
               ...state,
               orders:orders,
               orderLoading:false
            }
        default:
            return state;
    }
    
}