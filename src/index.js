import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import burgerBuilderReducer from './components/containers/BurgerBuilder/store/burgerBuilderReducer';
import orderFormReducer from './components/CheckoutSummary/ContactData/store/orderFormReducer';
import signInReducer from './components/display/Navigation/AuthItems/store/signInReducer';
import authReducer from './components/containers/Authentication/store/authReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// enable redux dev tools (only for dev mode):
const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				trace: true,
				traceLimit: 25,
		  })
		: null || compose;

// Combine reducers:
const rootReducer = combineReducers({
	burgerBuilder: burgerBuilderReducer,
	orderForm: orderFormReducer,
	signIn: signInReducer,
	auth: authReducer,
});

// Init redux store + middleware:
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
