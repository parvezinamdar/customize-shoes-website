import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';


//Order Reducer
import orderReducer from './store/reducers/order';

//Auth Reducer
import authReducer from './store/reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    order: orderReducer,
    auth: authReducer
})

const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app,document.getElementById('root')
);

registerServiceWorker();
