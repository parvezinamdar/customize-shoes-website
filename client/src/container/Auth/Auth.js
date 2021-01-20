import React, { Component } from 'react';
import './Auth.css';
import './AuthLogin.css';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

//Input
import Input from '../../components/UI/Input/Input';

//Button
import Button from '../../components/UI/Button/Button';

//Spinner
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

//Images

import login from './images/login.jpg';
import login1 from './images/login1.jpg';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if(!rules){
            return true;
        }
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (e,controlName) => {
        //DEEP CLONE
        const updatesControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: e.target.value,
                valid: this.checkValidity(e.target.value, this.state.controls[controlName].validation),
                touched: true
            }   
        };
        this.setState({controls: updatesControls});
    }
 
    submitHandler = (e) => {
        e.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value, this.state.isSignUp)
        console.log(this.state.controls.email.value,this.state.controls.password.value, this.state.isSignUp);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp };
        })
    }
    switchSignUptoLogin = () => {
        this.setState({ loading: true});
        let config = {...this.state.controls}
        config.email.value = "";
        config.password.value = "";
        setTimeout(function(){this.setState({ isSignUp: false, loading: false, controls: config })}.bind(this),2000);
    }

    switchLogintoSignUp = () => {
        this.setState({ loading: true});
        let config = {...this.state.controls}
        config.email.value = "";
        config.password.value = "";
        setTimeout(function(){this.setState({ isSignUp: true, loading: false, controls: config})}.bind(this),2000);
    }

    render(){
        const formElementArray = [];
        for (let key in this.state.controls ){
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let errorMessage = null;
        if(this.props.error){
            if(this.props.error.message === "INVALID_EMAIL"){
                errorMessage = (
                    <p class="error-message">Email is invalid or empty</p>
                );
            }
            if(this.props.error.message === "MISSING_PASSWORD"){
                errorMessage = (
                    <p class="error-message">Password cannot be empty</p>
                );
            }
            if(this.props.error.message === "EMAIL_EXISTS"){
                errorMessage = (
                    <p class="error-message">Email is already exists</p>
                );
            }
            // errorMessage = (
            //     <p>{this.props.error.message}</p>
            // );
            
        }
         
        let form =  <React.Fragment>
                        <div class="container-fluid">
                            { 
                                 this.state.loading ? <Spinner /> :
                                this.state.isSignUp === true ? 
                               
                                    <div class="row">
                                        
                                        <div class="col-sm-6 login-section-wrapper">
                                            <div class="brand-wrapper"></div>
                                            <div class="login-wrapper my-auto">
                                                
                                                <h1 class="login-title">Register</h1>
                                                {errorMessage}
                                                <form onSubmit={this.submitHandler}>
                                                    {   formElementArray.map(formElement => (
                                                        <div>
                                                            <label style={{ textTransform: "capitalize"}} for="email">{formElement.id}</label>
                                                            <Input 
                                                                key={formElement.id}
                                                                elementType={formElement.config.elementType} 
                                                                elementConfig={formElement.config.elementConfig} 
                                                                value={formElement.config.value} 
                                                                invalid={!formElement.config.valid}
                                                                shouldValidate={formElement.config.validation}
                                                                changed={(e) => this.inputChangedHandler(e, formElement.id)} 
                                                                touched={formElement.config.touched}/>
                                                        </div>
                                                            
                                                    )) }
                                                    <button clicked={this.switchAuthModeHandler} id="login" class="btn btn-block login-btn"> 
                                                        Submit
                                                    </button>
                                                    
                                                </form>
                                                <p class="login-wrapper-footer-text">Already have an account? <span onClick={this.switchSignUptoLogin} style={{ cursor: "pointer"}} class="text-reset">Login here</span></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 px-0 d-none d-sm-block">
                                            <img src={login} alt="" class="login-img" />
                                        </div>
                                    </div> : 
                                    <div class="row">
                                        <div class="col-sm-6 login-section-wrapper">
                                            <div class="brand-wrapper"></div>
                                            <div class="login-wrapper my-auto">
                                                
                                                <h1 class="login-title">Login</h1>
                                                {errorMessage}
                                                <form onSubmit={this.submitHandler}>
                                                    {   formElementArray.map(formElement => (
                                                        <div>
                                                            <label style={{ textTransform: "capitalize"}} for="email">{formElement.id}</label>
                                                            <Input 
                                                                key={formElement.id}
                                                                elementType={formElement.config.elementType} 
                                                                elementConfig={formElement.config.elementConfig} 
                                                                value={formElement.config.value} 
                                                                invalid={!formElement.config.valid}
                                                                shouldValidate={formElement.config.validation}
                                                                changed={(e) => this.inputChangedHandler(e, formElement.id)} 
                                                                touched={formElement.config.touched}/>
                                                        </div>
                                                            
                                                    )) }
                                                    <button clicked={this.switchAuthModeHandler} id="login" class="btn btn-block login-btn"> 
                                                        Submit
                                                    </button>
                                                    
                                                </form>
                                                <NavLink to="/forget-password" class="forgot-password-link">Forget Password</NavLink>
                                                <p class="login-wrapper-footer-text">Don't have an account? <span onClick={this.switchLogintoSignUp} style={{ cursor: "pointer"}} class="text-reset">Create an Account</span></p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 px-0 d-none d-sm-block">
                                            <img src={login1} alt="" class="login-img" />
                                        </div>
                                    </div> 
                            }
                            
                        
                        
                        
                        </div>

                    </React.Fragment>
        
        if(this.props.loading){
            form = <Spinner />
        }

        

        let authRedirect = null;
        if(this.props.isAuthenticated){
            authRedirect = <Redirect to="/" />
        }

        return (
            <div className="auth-container">
                <div className="auth">
                    {authRedirect}
                    {form}
                </div>
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email,password,isSignup))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);