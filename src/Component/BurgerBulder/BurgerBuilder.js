import React, { Component } from 'react';
import Burger from './Burger';
import Control from './Control';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Summary from './Summary/Summary';
import {connect} from 'react-redux';
import {addIngredient, removeIngredient, openPurchasable} from '../../Redux/ActionCreators';

const mapStateToProps = state => {
    return{
        ingredients: state.ingredients,
        totalPrice:state.totalPrice,
        purchasable:state.purchasable
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addIngredient:(igtype) => dispatch(addIngredient(igtype)),
        removeIngredient:(igtype) =>  dispatch(removeIngredient(igtype)),
        openPurchasable:()=> dispatch(openPurchasable())
    }
}

class BurgerBuilder extends Component{
    state = {
        modalOpen:false
    }

    openMoadal = () => {
        this.setState({modalOpen: !this.state.modalOpen})
    }

    
    addIngredientHandle = type => {
        this.props.addIngredient(type);
        this.props.openPurchasable();
        
    }

    OpenCheckout = () => {
        this.props.history.push("/checkout");
    }

    removeIngredientHandle = type => {
        this.props.removeIngredient(type);
        this.props.openPurchasable();
    }
    render(){
        
        return(
            <div>
               <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.props.ingredients} />
                <Control
                 addIngredientHandle={this.addIngredientHandle}
                 removeIngredientHandle={this.removeIngredientHandle}
                 price={this.props.totalPrice}
                 openModal = {this.openMoadal}
                 purchasable = {this.props.purchasable}
                 />
               </div>
               <Modal isOpen = {this.state.modalOpen}>
                   <ModalHeader>Your Order Summary</ModalHeader>
                   <ModalBody>
                       <h3>Total Price:{this.props.totalPrice.toFixed(0)} BDT</h3>
                       <Summary ingredients = {this.props.ingredients}/>
                   </ModalBody>
                   <ModalFooter>
                       <Button style={{background:"#D70F64"}} onClick = {this.OpenCheckout}>Continue to checkout</Button>
                       <Button className="secondary" onClick = {this.openMoadal}>Cancel</Button>
                   </ModalFooter>
               </Modal>
            </div>
  
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);