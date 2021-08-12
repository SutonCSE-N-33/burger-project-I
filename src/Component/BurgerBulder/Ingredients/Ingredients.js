import React from 'react';
import Top from '../../../Assets/images/Top.png';
import Bottom from '../../../Assets/images/Bottom.png';
import Cheese from '../../../Assets/images/cheese.jpg';
import Meat from '../../../Assets/images/meat.jpg';
import Salad from '../../../Assets/images/salad.jpg';
import './Ingredients.css';
const Ingredients = props => {
    let Ingredients = null;
    switch(props.type){
        case "Top":
            Ingredients = <div><img src={Top} alt="top"></img></div>;
            break;
            case "Salad":
            Ingredients = <div><img src={Salad} alt="salad"></img></div>;
            break;
            case "Meat":
            Ingredients = <div><img src={Meat} alt="meat"></img></div>;
            break;
            case "Cheese":
            Ingredients = <div><img src={Cheese} alt="cheese"></img></div>;
            break;
            case "Bottom":
            Ingredients = <div><img src={Bottom} alt="bottom"></img></div>;
            break;
            default:
                Ingredients=null;
    }
    return(
        <div className="Ingredients">
             {Ingredients}
        </div>
    )
}
export default Ingredients;