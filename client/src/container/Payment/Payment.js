import React , { Component } from 'react';
import Button  from '../../components/UI/Button/Button';
import './Payment.css';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';


import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

function loadRazorpay (src){
    return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


class Payment extends Component {
    state = {
        loading: false,
    }

    displayRazorpay = async () => {

        const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js')
        
        if(!res){
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        console.log('RAZORPAY PRICE', this.state.price);
        const data = await fetch('http://localhost:3001/razorpay', { method: 'POST'}).then((t) => t.json())
        console.log('DATA MAIN', data);
        const options = {
            "key": "rzp_test_KL9qhWThCki1nN", // Enter the Key ID generated from the Dashboard
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            redirect: true,
            "name": "Shoes",
            "description": "Thank you for placing an order",
            "image": "http://localhost:3001/logo.svg",
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            "prefill": {
                "name": "Your Name",
                "email": "Your Email",
                "contact": "Your Number"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#F37254"
            }
        };
        
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata);
        });
    }
    render(){

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
                        <Button btnType="success" clicked={this.displayRazorpay}>PAYMENT</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Payment,axios));