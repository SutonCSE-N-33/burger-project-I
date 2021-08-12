import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchOrder } from '../../../Redux/ActionCreators';
import ShowOrder from './ShowOrder';
import Spinner from '../../Spinner/Spinner';

const mapStateToProps = state =>{
    return{
        orders:state.orders,
        orderLoading:state.orderLoading,
        orderErr:state.orderErr
    }
}

const mapDispatchToProps = dispatch => {
    return{
               fetchOrder:()=> dispatch(fetchOrder())
    }
}

class Order extends Component{
    componentDidMount(){
        this.props.fetchOrder();
    }
    render(){
        let orders = null;
        if(this.props.orderErr){
            orders = <p>Sorry Failded to load order</p>
        }else{
            if(this.props.orders.length === 0){
                orders = <p>You Have no order</p>
            }else{
                orders = this.props.orders.map(order => {
                    return(
                        <ShowOrder order={order} key={order.id}/>
                    )
                })
            }
        }
       
        return(
            <div>
                      {this.props.orderLoading ? <Spinner /> : orders}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Order);