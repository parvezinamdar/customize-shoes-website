import React , { Component } from 'react';
import Contact from '../Contact/Contact';
import { Route , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './Checkout.css';

class Checkout extends Component {

    state = {
        shoes: null 
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const shoes = {};
        for (let param of query.entries()){
            shoes[param[0]] = param[1]
        }
        this.setState({shoes: shoes})
    }
    render(){
        let summary = <Redirect to="/" />
       
        if(this.state.shoes){
            const purchasedRedirect = this.props.purchased ? <Redirect to="/payment" /> : null;
            summary = (
                <div class="checkout-container">
                    {purchasedRedirect}
                    <Route 
                        path='/checkout'
                        render={(props) => (<Contact shoes={this.state.shoes} {...props} />)}
                    />
                </div>
                
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return{
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);