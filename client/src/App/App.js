import React, { Component } from 'react';

import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Layout
import Layout from '../hoc/Layout/Layout';

//Home
import Home from '../container/Home/Home';

//Dashboard
import Dashboard from '../container/Dashboard/Dashboard';

//Checkout
import Checkout from '../container/Checkout/Checkout';

//Orders
import Orders from '../container/Orders/Orders';

//Auth
import Auth from '../container/Auth/Auth';

//Logout
import Logout from '../container/Auth/Logout/Logout';

//Payment
import Payment from '../container/Payment/Payment';
//ForgetPassword
import ForgetPassword from '../components/ForgetPassword/ForgetPassword';

import {connect} from 'react-redux';

import * as actions from '../store/actions/index';

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render(){
    let routes = (
      <Switch>
        {/* <Route path="/signup" component={Auth} /> */}
        <Route path="/login" component={Auth} />
        <Route path="/forget-password" exact component={ForgetPassword} />
        <Route path="/shoes-customize" component={Dashboard} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    if(this.props.isAuthenticated){
      routes = (
          <Switch>
            <Route path="/payment" component={Payment} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/logout" component={Logout} />
            <Route path="/shoes-customize" component={Dashboard} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
      );
    }
    return (
      <React.Fragment>
        <Layout>
          {routes}
        </Layout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return{
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
