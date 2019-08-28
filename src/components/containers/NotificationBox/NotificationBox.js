import React, { useState, useEffect, useReducer } from 'react';
import Notification from './Notification/Notification';
import usePreviousValue from '../../../utilities/custom-hooks/usePreviousValue';
import { connect } from 'react-redux';
import styles from './NotificationBox.module.css';
import PropTypes from 'prop-types';

const NotificationBox = ({
	isLoggedIn,
	authType,
	isErrorOnMount,
	orders,
	idToken,
	userId,
	email,
	ingredients,
	isBuilding,
	isOrderSuccessful,
	isFetchSuccessful,
}) => {
	// CSS Modules styles:
	const { NotificationBox, Open, Closed } = styles;

	// Local state hooks:
	const [isDisplayed, setIsDisplayed] = useState(false);

	// Prev state values:
	const prevToken = usePreviousValue(idToken);
	const prevUserId = usePreviousValue(userId);
	const prevSignInStatus = usePreviousValue(isLoggedIn);
	const prevIngredients = usePreviousValue(ingredients);

	// Notifications type reducer:
	const notificationReducer = (state, { type, email }) => {
		switch (type) {
			case 'INIT':
				return {
					message: `Welcome to React Burger ${email || ''}!`,
					sign: 'success',
				};
			case 'LOGIN_SUCCESS':
				return {
					message: `Signin success! Welcome back, ${email}`,
					sign: 'success',
				};
			case 'SIGNUP_SUCCESS':
				return {
					message: `Signed up new user, welcome ${email}`,
					sign: 'success',
				};
			case 'LOGOUT':
				return {
					message: `You've successfully logged out`,
					sign: 'danger',
				};
			case 'ERROR_ON_MOUNT':
				return {
					message: `Oops...could not fetch ingredients`,
					sign: 'danger',
				};
			case 'FETCH_ORDERS':
				return {
					message: 'Previous Orders are available',
					sign: 'success',
				};
			case 'NO_ORDERS':
				return {
					message: 'No previous orders available',
					sign: 'danger',
				};
			case 'ORDER_SUCCESS':
				return {
					message: 'Order received successfully',
					sign: 'success',
				};
			default:
				return '';
		}
	};
	const [notificationData, dispatch] = useReducer(notificationReducer, {
		message: '',
		sign: '',
	});

	// Handle Login/logout messages:
	useEffect(() => {
		const messageType =
			isLoggedIn && authType === 'signin'
				? 'LOGIN_SUCCESS'
				: isLoggedIn && authType === 'signUp'
				? 'SIGNUP_SUCCESS'
				: !prevToken && !prevUserId && authType === 'signOut'
				? 'LOGOUT'
				: isErrorOnMount
				? 'ERROR_ON_MOUNT'
				: '';

		dispatch({ type: messageType, email: email });
		setIsDisplayed(true);

		// Make sure to self close the NotificationBox after 5 seconds:
		const autoCloseBox = setTimeout(() => {
			setIsDisplayed(false);
		}, 5000);
		return () => clearTimeout(autoCloseBox);
	}, [
		authType,
		email,
		isErrorOnMount,
		isLoggedIn,
		prevSignInStatus,
		prevToken,
		prevUserId,
	]);

	// Handle order related messages:
	useEffect(() => {
		if (isFetchSuccessful) dispatch({ type: 'FETCH_ORDERS' });
		if (isFetchSuccessful && orders.length <= 0)
			dispatch({ type: 'NO_ORDERS' });
		if (isOrderSuccessful) dispatch({ type: 'ORDER_SUCCESS' });
		setIsDisplayed(true);
	}, [isFetchSuccessful, isOrderSuccessful, orders.length]);

	// Display app init message:
	useEffect(() => {
		if (
			prevIngredients !== ingredients &&
			!isBuilding &&
			!isFetchSuccessful
		)
			dispatch({ type: 'INIT', email: email });
	}, [email, ingredients, isBuilding, isFetchSuccessful, prevIngredients]);

	const displayStatusStyle = isDisplayed ? Open : Closed;

	return (
		<>
			{notificationData && (
				<div
					className={[NotificationBox, displayStatusStyle].join(' ')}
					onClick={() => setIsDisplayed(false)}
				>
					<Notification
						type={notificationData.message}
						sign={notificationData.sign}
					/>
				</div>
			)}
		</>
	);
};

NotificationBox.propTypes = {
	authType: PropTypes.string,
	isLoggedIn: PropTypes.bool,
	isErrorOnMount: PropTypes.bool,
	orders: PropTypes.array,
	idToken: PropTypes.string,
	userId: PropTypes.string,
	email: PropTypes.string,
	ingredients: PropTypes.array,
	isBuilding: PropTypes.bool,
	isOrderSuccessful: PropTypes.bool,
	isFetchSuccessful: PropTypes.bool,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		authType: state.auth.authType,
		isErrorOnMount: state.burgerBuilder.isErrorOnMount,
		orders: state.orderForm.orders,
		idToken: state.auth.idToken,
		userId: state.auth.userId,
		email: state.auth.email,
		ingredients: state.burgerBuilder.ingredients,
		isBuilding: state.burgerBuilder.isBuilding,
		isOrderSuccessful: state.orderForm.isOrderSuccessful,
		isFetchSuccessful: state.orderForm.isFetchSuccessful,
	};
};

export default connect(mapStateToProps)(NotificationBox);
