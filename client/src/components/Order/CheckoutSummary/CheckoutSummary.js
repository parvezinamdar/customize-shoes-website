import React from 'react';
import './CheckoutSummary.css';
import ClassicDisplay from '../../../container/Categories/Classic/Display/ClassicDisplay';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className="checkout-summary">
            <h1>We hope it looks well!</h1>
            
            <div style={{width:'100%', margin:'auto'}}>
                <ClassicDisplay display={props.display}/>
               
            </div>
            <Button 
                clicked={props.checkoutCancelled}
                btnType="danger">CANCEL</Button>
            <Button 
                clicked={props.checkoutContinued}
                btnType="success">CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;