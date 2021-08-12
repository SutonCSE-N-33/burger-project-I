import React from 'react';
import './Burger.css';
import Ingredients from './Ingredients/Ingredients';
const Burger = props => {
    let ingredientArr = props.ingredients.map(item => {
       let amountArr = [...Array(item.amount).keys()];
        return amountArr.map(_ => {
            return <Ingredients type={item.type} key={Math.random()}/>
        })
    })
    .reduce((arr, element) => {
        return arr.concat(element);
    },[])


    if(ingredientArr.length === 0){
        ingredientArr="Please Add your Ingredients";
    }
    return(
        <div className="Burger">
           <Ingredients type="Top"/>
           {ingredientArr}
           <Ingredients type="Bottom"/>
        </div>
    )
}
export default Burger;