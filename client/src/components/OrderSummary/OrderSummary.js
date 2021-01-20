import React from 'react';
import './OrderSummary.css';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {

    return (
        <div className="order-summary">
            <h3>Your Order</h3>
            <p>The Stylish Customize Shoes Is Ready To Go, Hope You Like It :)</p>
            <Button btnType="danger" clicked={props.modalClosed} >CANCEL</Button>
            <Button btnType="success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </div>
    )

}

export default orderSummary;