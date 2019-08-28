import React, { useEffect, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationBox from './components/containers/NotificationBox/NotificationBox';
import Layout from './components/containers/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import SignIn from './components/containers/Authentication/SignIn/SignIn';
import Footer from './components/display/Footer/Footer';
import { authCheckLoginState } from './components/containers/Authentication/store/actions';
import LazyLoader from './components/hoc/LazyLoader/LazyLoader';
import PropTypes from 'prop-types';

// Lazy loading imports:
const Orders = lazy(() => import('./components/containers/Orders/Orders'));
const About = lazy(() => import('./components/display/About/About'));
const Checkout = lazy(() =>
	import('./components/containers/Checkout/Checkout')
);
const SignUp = lazy(() =>
	import('./components/containers/Authentication/SignUp/SignUp')
);

function App({ tryAutoSignIn, isLoggedIn }) {
	// If a token is available in localStorage, try to login upon App component mount
	useEffect(() => {
		tryAutoSignIn();
	}, [tryAutoSignIn]);

	return (
		<div>
			<Router>
				<Layout>
					<SignIn />
					<div
						className="wrapper"
						style={{
							minHeight: 'calc(100vh - 122px)',
						}}
					>
						<Switch>
							{isLoggedIn && (
								<Route
									path="/checkout"
									component={LazyLoader(Checkout)}
								/>
							)}
							<Route
								path="/orders"
								component={LazyLoader(Orders)}
							/>
							<Route
								path="/about"
								component={LazyLoader(About)}
							/>
							<Route
								path="/signup"
								component={LazyLoader(SignUp)}
							/>
							<Route path="/" component={BurgerBuilder} />
						</Switch>
						<NotificationBox />
					</div>
					<Footer />
				</Layout>
			</Router>
		</div>
	);
}

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	tryAutoSignIn: PropTypes.func,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		tryAutoSignIn: () => dispatch(authCheckLoginState()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
