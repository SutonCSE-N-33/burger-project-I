import React from 'react';
import {Nav, Navbar, NavbarBrand,NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Logo from '../../Assets/Logo.png';
const Header = () => {
    return(
        <div className="Navigation">
           <Navbar style={{background:"#D70F64", height:"70px"}}>
               <NavbarBrand href="/" className="Brand mr-auto ml-md-5"><img src={Logo} alt="Logo" width="80px"/></NavbarBrand>
           <Nav className="mr-md-5">
               <NavItem style={{marginRight:"20px"}}>
                   <NavLink exact to="/" className="NavLink">BurgerBuilder</NavLink>
               </NavItem>
               <NavItem>
                   <NavLink to="/order" className="NavLink">Order</NavLink>
               </NavItem>
               <NavItem>
                   <NavLink to="/auth" style={{marginLeft:"10px"}} className="NavLink">Login</NavLink>
               </NavItem>
           </Nav>
           </Navbar>
        </div>
    )
}
export default Header;