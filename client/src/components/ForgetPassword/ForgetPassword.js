import React, { Component } from 'react';
import './ForgetPassword.css';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

//Input
import Input from '../../components/UI/Input/Input';

//Button
import Button from '../../components/UI/Button/Button';

//Spinner
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';
import firebase from 'firebase';

class ForgetPassword extends Component {

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
            }
        },
        isSignUp: true
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
        
        if (window.confirm('Check your email firebase has send you')) {
            this.forgetPassword();
        }

    }

    forgetPassword = () => {
        var auth = firebase.auth();
        var emailAddress = this.state.controls.email.value;
        auth.sendPasswordResetEmail(emailAddress).then(function() {

        }).catch(function(error) {
            console.log(error);
        });
    }
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp };
        })
    }

    render(){
        const formElementArray = [];
        for (let key in this.state.controls ){
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

         
        let form =  <React.Fragment>
                        <form onSubmit={this.submitHandler}>
                            { formElementArray.map(formElement => (
                                    <Input 
                                        key={formElement.id}
                                        elementType={formElement.config.elementType} 
                                        elementConfig={formElement.config.elementConfig} 
                                        value={formElement.config.value} 
                                        invalid={!formElement.config.valid}
                                        shouldValidate={formElement.config.validation}
                                        changed={(e) => this.inputChangedHandler(e, formElement.id)} 
                                        touched={formElement.config.touched}/>
                                )) }
                                <Button btnType="success">Submit</Button>
                            </form>
                    </React.Fragment>
        
        if(this.props.loading){
            form = <Spinner />
        }

        let errorMessage = null;
        if(this.props.error){
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if(this.props.isAuthenticated){
            authRedirect = <Redirect to="/" />
        }

        return (
            <div className="forget-container">
                <div className="forget">
                    {authRedirect}
                    {errorMessage}
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

export default connect(mapStateToProps,mapDispatchToProps)(ForgetPassword);