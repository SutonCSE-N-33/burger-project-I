import React from 'react';
import Header from './Header/Header';
import BurgerBuilder from './BurgerBulder/BurgerBuilder';
import Order from '../Component/BurgerBulder/Order/Order';
import Checkout from './BurgerBulder/Order/Checkout/Checkout';
import {Route} from 'react-router-dom';
import Auth from '../Component/Auth/Auth';
const Main = () => {
    return(
        <div>
             <Header />
             <div className="container">
                 <Route path="/order" component={Order} />
                 <Route path="/checkout" component={Checkout} />
                 <Route path="/auth" exact component={Auth} />
                 <Route path="/" exact component={BurgerBuilder} />
                 
             </div>
        </div>
    )
}
 
export default Main;