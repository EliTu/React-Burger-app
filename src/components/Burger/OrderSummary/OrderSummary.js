import React, { memo } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '../../UI/Button/Button';
import { signInToggleClick } from '../../display/Navigation/AuthItems/store/actions';
import { redirectedToAuthPage } from '../../containers/Authentication/store/actions';
import styles from './OrderSummary.module.css';
import PropTypes from 'prop-types';

const OrderSummary = ({
	ingredients,
	price,
	closeModalHandler,
	checkoutHandler,
	isLoggedIn,
	openSignIn,
	setAuthRedirectMode,
	...props
}) => {
	// CSS Modules styles:
	const { OrderSummary, IngredientStyle, UnorderedStyle, Price } = styles;

	// If a user is not signed in, prompt the sign in menu open
	const handleSignInButtonClick = () => {
		setAuthRedirectMode();
		openSignIn();
		closeModalHandler();
	};

	// If a user is not signed in, prompt redirection to sign up page
	const handleSignUpButtonClick = () => {
		setAuthRedirectMode();
		props.history.push('/signup');
	};

	return (
		<>
			<h3>Your Order is ready</h3>
			<p>A burger with the following ingredients:</p>
			<ul className={UnorderedStyle}>
				{ingredients
					? ingredients.map((el, i) => (
							<li className={OrderSummary} key={i}>
								<span className={IngredientStyle}>
									{el.quantity > 0
										? `${el.ingredient} x ${el.quantity}`
										: null}
								</span>
							</li>
					  ))
					: null}
			</ul>
			<p>
				Your total price is:
				<span className={Price}>${price.toFixed(2)}</span>
			</p>
			{isLoggedIn ? (
				<>
					<p>Ready to checkout ?</p>
					<Button type="Confirm" handleClick={checkoutHandler}>
						Checkout
					</Button>
					<Button type="Danger" handleClick={closeModalHandler}>
						Cancel
					</Button>
				</>
			) : (
				<>
					<p>
						In order to proceed to checkout, you need to be a
						registered member. Please sign in before proceeding, or
						sign up as a new member!
					</p>
					<Button
						type="Confirm"
						handleClick={handleSignInButtonClick}
					>
						Sign in
					</Button>
					<Button
						type="Neutral"
						handleClick={handleSignUpButtonClick}
					>
						Sign up a new user
					</Button>
				</>
			)}
		</>
	);
};

OrderSummary.prototypes = {
	ingredients: PropTypes.array.isRequired,
	price: PropTypes.number.isRequired,
	closeModalHandler: PropTypes.func.isRequired,
	checkoutHandler: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool,
	openSignIn: PropTypes.func,
	setAuthRedirectMode: PropTypes.func,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		openSignIn: () => dispatch(signInToggleClick()),
		setAuthRedirectMode: () => dispatch(redirectedToAuthPage()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(memo(withRouter(OrderSummary)));
