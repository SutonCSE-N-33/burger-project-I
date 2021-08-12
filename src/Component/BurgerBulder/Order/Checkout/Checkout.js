import React, {Component} from 'react'
import {Button,Modal,ModalBody} from 'reactstrap';
import {connect} from 'react-redux';
import axios from 'axios';
import { stateReset } from '../../../../Redux/ActionCreators';
import Spinner from '../../../Spinner/Spinner';
const mapStateToProps = state => {
    return{
        ingredients:state.ingredients,
        totalPrice:state.totalPrice,
        purchasable:state.purchasable
    }
}

const mapDispatchToProps = dispatch => {
    return{
        stateReset: () => dispatch(stateReset())
    }
}
class Checkout extends Component{
    state ={
                 values:{
                    address:"",
                    phone:"",
                    paymentMethod:"Cash on Delivery"
                 },
                 isLoading:false,
                 openModal:false,
                 openMsg:""
    }

    inputChangeHandler = event => {
        this.setState({
           values:{
            ...this.state.values,
            [event.target.name]: event.target.value
           }
        })
    }

    submitHandler = () => {
        this.setState({
            isLoading:true
        })
        this.props.stateReset()
        const orders = {
            customer:this.state.values,
            ingredients:this.props.ingredients,
            price:this.props.totalPrice
        }
        axios.post("https://burgerbuilder2-53123-default-rtdb.firebaseio.com/orders.json", orders)
        .then(response => {
            if(response.status === 200){
                this.setState({
                    isLoading:false,
                    openModal:true,
                    openMsg:"Order Placed Successfully"
                })
                this.props.stateReset()
            }else{
                this.setState({
                    isLoading:false,
                    openModal:true,
                    openMsg:"Something went wrong"
                })
            }
        })
        .catch(err => {
            this.setState({
                isLoading:false,
                openModal:true,
                openMsg:"Something went wrong"
            })
        })

    }

    goBack = () => {
        this.props.history.goBack("/");
    }
    render(){
        const form = (<div>
             <div>
                <h4 style={{
                    textAlign:"left",
                border:"1px solid crimson",
                borderRadius:"5px",
                boxShadow:"1px 1px black",
                padding:"22px"
            }}>Pprice: {this.props.totalPrice}</h4>
                <div style={{
                border:"1px solid crimson",
                borderRadius:"5px",
                boxShadow:"1px 1px black",
                padding:"22px"
            }}>
                   <form>
                       <input type="text" name="address" className="form-control" value={this.state.values.address} onChange={(event)=> this.inputChangeHandler(event)}></input><br />
                       <input type="text" name="phone" className="form-control" value={this.state.values.phone}  onChange={(event)=> this.inputChangeHandler(event)}></input><br />
                       <select name="paymentMethod" className="form-control" value={this.state.values.paymentMethod}  onChange={(event)=> this.inputChangeHandler(event)}>
                          <option>Cash on Delivery</option>
                          <option>Bkash</option>
                          <option>Nagad</option>
                       </select><br/><br/>
                       <Button onClick={this.submitHandler} style={{background:"crimson"}} disabled={!this.props.purchasable} className="mr-auto">Place Order</Button>
                       <Button onClick={this.goBack} style={{background:"crimson"}} className="ml-1">Cancel</Button>
                   </form>
            </div>
            </div>
        </div>)
        return(
            
           <div>
               {this.state.isLoading ? <Spinner/> : form}
               <Modal isOpen={this.state.openModal} onClick={this.goBack}>
                   <ModalBody>
                            <p>{this.state.openMsg}</p>
                   </ModalBody>
               </Modal>
           </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps ) (Checkout);