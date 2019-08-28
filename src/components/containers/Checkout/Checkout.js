import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../CheckoutSummary/CheckoutSummary';
import ContactData from '../../CheckoutSummary/ContactData/ContactData';
import styles from './Checkout.module.css';
import PropTypes from 'prop-types';

export const Checkout = ({ ingredients, history, match }) => {
	// CSS Modules styles:
	const { Checkout, CheckoutHeader } = styles;

	const handleCancelClick = () => history.goBack();

	const handleCheckoutClick = () => history.replace('/checkout/contact-data');

	return (
		<>
			<h1 className={CheckoutHeader}>Your burger:</h1>
			<div className={Checkout}>
				<CheckoutSummary
					ingredients={ingredients}
					cancelClick={handleCancelClick}
					checkoutClick={handleCheckoutClick}
				/>
				<Route
					path={`${match.path}/contact-data`}
					component={ContactData}
				/>
			</div>
		</>
	);
};

Checkout.propTypes = {
	ingredients: PropTypes.array,
	history: PropTypes.object,
	match: PropTypes.object,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
	};
};

export default connect(mapStateToProps)(Checkout);
