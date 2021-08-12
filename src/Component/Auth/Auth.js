import React, {Component} from 'react';
import { Formik } from 'formik';
import {connect} from 'react-redux';
import {auth} from '../../Redux/AuthActionCreators/AuthActionCreator';


const mapDispatchToProps = dispatch => {
    return{
        auth:(email, password, mood) => dispatch(auth(email, password, mood))
    }    
}

class Auth extends Component {
    state = {
        mood:"Sign Up"
    }
    loginHandle = () => {
        this.setState({
            mood: this.state.mood === "Sign Up" ? "Login" :"Sign Up"
        })
    }
    render(){
   return(
          <div>
              <Formik 
              initialValues = {
                  {
                      email:"",
                      password:"",
                      confirmPassword:""
                  }
              }

              onSubmit = {
                  (values) => {
                       this.props.auth(values.email, values.password, this.state.mood)
                  }
              }

              validate = {(values) =>  {
                  const errors = {};

                  if(!values.email){
                      errors.email="required";
                  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                      errors.email="Invalid Email Address";
                  }

                  if(!values.password){
                      errors.password="required"
                  }else if(values.password.length < 4){
                      errors.password="Must be atleast 4 charecters"
                  }

                  if(this.state.mood === "Sign Up"){
                    if(!values.confirmPassword){
                        errors.confirmPassword="required"
                    }else if(values.password !== values.confirmPassword){
                        errors.confirmPassword="Pass word failed does no match"
                    }
                  }
                //   console.log(errors);
                  return errors;
              }}
              >
                 {({values, handleChange, handleSubmit,errors}) => (<div 
                 style={{
                     border:"1px solid grey",
                     padding:"15px",
                     borderRadius:"5px"
                 }}
                 >
                     <button onClick={this.loginHandle} style={{background:"crimson",color:"white"}} className="btn btn-lg">Siwtch to {this.state.mood==="Sign Up" ? "Login" : "Sign Up"}</button><br/><br/>
                    <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Enter Your gmail"
                    className="form-control"
                     value={values.email}
                     onChange={handleChange}                     
                    />
                    <span style={{color:"red"}}>{errors.email}</span>
                    <br/><br/>
                    <input type="password" name="password" placeholder="Enter Your password"
                    className="form-control"
                     value={values.password}
                     onChange={handleChange}                     
                    />
                    <span style={{color:"red"}}>{errors.password}</span>
                    <br/><br/>
                    {this.state.mood === "Sign Up" ? <div>
                    <input type="password" name="confirmPassword" placeholder="Enter Your Confirm Password"
                    className="form-control"
                     value={values.confirmPassword}
                     onChange={handleChange}                     
                    />
                    <span style={{color:"red"}}>{errors.confirmPassword}</span>
                    <br /><br />
                    </div> : null}
                    <button type="submit" className="btn btn-success">{this.state.mood === "Sign Up" ? "Sign Up" : "Login"}</button>
                    </form>                     
                 </div>)}
              </Formik>
          </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(Auth);