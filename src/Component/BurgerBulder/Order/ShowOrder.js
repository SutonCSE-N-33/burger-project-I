import React from 'react';


const ShowOrder = props => {
    const ingredientSummary = props.order.ingredients.map(item => {
        return(
            <div>
                <p>{item.type}:{item.amount}</p>
            </div>
        )
    })
    console.log(props)
    return(
        <div style={{
            border:"1px solid white",
            background:"white",
            boxShadow:"0 0 3px 0 black",
            marginTop:"10px"
        }}>
            <p>Order Number:{props.order.id}</p>
            <p>Address: {props.order.customer.address}</p>
            <hr />
            {ingredientSummary} 
            <hr />
            <p>Total: {props.order.price} /= BDT</p>
            </div>
    )
}

export default ShowOrder;