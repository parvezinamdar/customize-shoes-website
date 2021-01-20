import React , { Component } from 'react';
import Button  from '../../components/UI/Button/Button';
import './Contact.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Contact extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fatest', displayValue: 'Fastest'},
                        { value: 'cheapest', displayValue: 'Cheapest'}]
                },
                value: 'fastest',
                validation:{},
                valid: true
            },
        },
        formIsValid: false,
        loading: false
    }
    orderHandler = (e) => {
        e.preventDefault();
        console.log(this.props.shoes);
        
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            shoes: this.props.shoes,
            orderData: formData,
            userId: this.props.userId
        }
        this.props.onOrder(order, this.props.token);
    }

    checkValidity(value, rules) {
        let isValid = true;
        
        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (e,inputIdentifier) => {
        //DEEP CLONE
        const updatesOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatesOrderForm[inputIdentifier]
        };
        updatedFormElement.value = e.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatesOrderForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);

        let formIsValid = true;
        for(let inputIdentifier in updatesOrderForm){
            formIsValid = updatesOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatesOrderForm, formIsValid: formIsValid});
    }

    render(){
        const formElementArray = [];
        for (let key in this.state.orderForm ){
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <div className="row mt-5">
                {/* <div className="col-md-6 mb-5">
                    <div className="contact-data">

                        <h4>Enter Your Contact Data</h4>
                        {form}
                    </div>
                    
                </div> */}
                <div className="col-md-6 mb-5 mx-auto">
                    <div className="contact-data">
                        <h4>Your Order is Ready</h4>
                        <h5 className="mt-3">Enter Your Contact Data</h5>
                        
                        <form onSubmit={this.orderHandler}>  
                            {formElementArray.map(formElement => (
                                <div key={formElement.id}>   
                                    <span className="require-data float-left"><FontAwesomeIcon icon={faAsterisk} /> Required</span>
                                    <Input 
                                        elementType={formElement.config.elementType} 
                                        elementConfig={formElement.config.elementConfig} 
                                        value={formElement.config.value} 
                                        invalid={!formElement.config.valid}
                                        shouldValidate={formElement.config.validation}
                                        changed={(e) => this.inputChangedHandler(e, formElement.id)} 
                                        touched={formElement.config.touched}
                                    />
                                </div>
                            ))}
                            <Button btnType="success" disabled={!this.state.formIsValid}>ORDER</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    
        if(this.props.loading){
            form = <Spinner />
        }
        return (
            <div className="container">
                {form}
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onOrder: (orderData,token) => dispatch(actions.purchaseOrder(orderData,token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Contact,axios));