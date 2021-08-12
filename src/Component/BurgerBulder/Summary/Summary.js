import React from 'react';

const Summary = props =>{
    const ingredientArr = props.ingredients.map(item => {
        return(
            <div key={item.type}>
                <li>
                <span style={{textTransform:"capitalize", fontSize:"20px"}}>{item.type}</span> :{item.amount}
                </li>
            </div>
        )
    })
    return (
        <div>
                <ul>{ingredientArr}</ul> 
        </div>
    )
}

export default Summary