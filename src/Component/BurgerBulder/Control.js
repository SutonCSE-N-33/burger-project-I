import React from 'react';
import {Card , CardHeader, CardBody, CardFooter, Button} from 'reactstrap';

const controls = [
    {label:"Salad", type:"Salad"},   
    {label:"Cheese", type:"Cheese"},
    {label:"Meat", type:"Meat"}
]


const ControlHandle = props => {
    return (
        <div className="d-flex">
                   <div className="mr-auto ml-5">{props.label}</div>
                   <button className="btn btn-danger btn-sm m-1" onClick = {props.removeIngredientHandle}>Less</button>
                   <button className="btn btn-success btn-sm m-1" onClick = {props.addIngredientHandle}>More</button>
        </div>
    )
}


const Control = props => {
    return (
        <div className="container ml-md-5" style={{extAlign:"center"}}>
              <Card style={{
                  marginTop:"30px",
                  marginBottom:"30px",
                  textAlign:"center"
              }}>
                  <CardHeader style={{background:"#D70F64", color:"white"}}>ADD Ingredients</CardHeader>
                  <CardBody >
                    {
                        controls.map(item => {
                            return <ControlHandle 
                            label={item.label} 
                            type = {item.type}
                            addIngredientHandle={() =>props.addIngredientHandle(item.type)}
                            removeIngredientHandle = {() => props.removeIngredientHandle(item.type)}
                            />
                        })
                    }
                  </CardBody>
                  <CardFooter><h5>Price: {props.price} /= BDT</h5></CardFooter>
                  <Button disabled={!props.purchasable} style={{background:"#D70F64"}} onClick = {props.openModal}>Order Now</Button>
              </Card>
        </div>
    )
}
export default Control;