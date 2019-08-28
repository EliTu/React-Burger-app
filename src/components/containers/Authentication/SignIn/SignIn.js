import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import signInForm from './signInForm/signInForm';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
import FormErrorMessage from '../../../UI/FormErrorMessage/FormErrorMessage';
import AuthErrorMessage from '../../../UI/AuthErrorMessage/AuthErrorMessage';
import { signInOutsideCloseClick } from '../../../display/Navigation/AuthItems/store/actions';
import { confirmAuth } from '../store/actions';
import useForm from '../../../../utilities/custom-hooks/useForm';
import useClickOutside from '../../../../utilities/custom-hooks/useClickOutside';
import useRedirect from '../../../../utilities/custom-hooks/useRedirect';
import styles from './SignIn.module.css';
import PropTypes from 'prop-types';

const SignIn = ({
	isSignInDisplayed,
	isLoading,
	history,
	error,
	authType,
	sentAuthForm,
	closeSignIn,
	isLoggedIn,
	isBuilding,
	isRedirectedToAuth,
	...props
}) => {
	// CSS Modules styles:
	const { SignIn, Open, Closed } = styles;

	// State hooks:
	const [showFormInvalidMessage, setShowFormInvalidMessage] = useState(false);

	// Form fields & validation data from useForm custom hook:
	const [inputs, , isFormValid, , handleFormChange] = useForm(signInForm);

	// Toggle component display upon clicking the navbar link
	const setDisplayStyle = isSignInDisplayed ? Open : Closed;

	// Handle form submittion
	const handleFormSubmitEvent = event => {
		event.preventDefault();

		if (!isFormValid) {
			setShowFormInvalidMessage(true);
			return;
		}

		// If all fields are valid
		if (isFormValid) {
			sentAuthForm(inputs[0].value, inputs[1].value, 'signin');
			setShowFormInvalidMessage(false);
		}
	};

	// Handle clicks on elements outside of the component to close it
	const outsideClickRef = useClickOutside(isSignInDisplayed, closeSignIn);

	// Check if should be redirecting to checkout upon a sign in:
	useRedirect(
		isLoggedIn,
		isBuilding,
		isRedirectedToAuth,
		history.push,
		'/checkout'
	);

	useEffect(() => {
		closeSignIn();
	}, [closeSignIn, isLoggedIn]);

	return (
		<div
			className={[SignIn, setDisplayStyle].join(' ')}
			ref={outsideClickRef}
		>
			<>
				{!isLoggedIn ? (
					isLoading ? (
						<Spinner />
					) : (
						<>
							<h2>Members Login</h2>
							<form
								action="post"
								onSubmit={handleFormSubmitEvent}
							>
								{inputs.map((field, i) => (
									<Input
										key={field.data}
										focused={i === 0 && isSignInDisplayed}
										elementType={field.elementType}
										elementConfig={field.elementConfig}
										validation={{ ...field.validation }}
										value={field.value}
										handleChange={event =>
											handleFormChange(event, field.data)
										}
										handleEnterPress={handleFormSubmitEvent}
									/>
								))}
							</form>
							{showFormInvalidMessage && (
								<FormErrorMessage errorType="emptyFields" />
							)}
							{error && authType === 'signin' && (
								<AuthErrorMessage
									errorMessage={
										error.response.data.error.message
									}
								/>
							)}
							<Button
								type="Confirm"
								handleClick={handleFormSubmitEvent}
							>
								Login
							</Button>
						</>
					)
				) : null}
			</>
		</div>
	);
};

SignIn.propTypes = {
	isSignInDisplayed: PropTypes.bool,
	isLoading: PropTypes.bool,
	error: PropTypes.object,
	authType: PropTypes.string,
	isLoggedIn: PropTypes.bool,
	closeSignIn: PropTypes.func,
	sentAuthForm: PropTypes.func,
	isRedirectedToAuth: PropTypes.bool,
	isBuilding: PropTypes.bool,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isSignInDisplayed: state.signIn.isSignInDisplayed,
		isLoading: state.auth.isLoading,
		authType: state.auth.authType,
		error: state.auth.error,
		isLoggedIn: state.auth.isLoggedIn,
		isRedirectedToAuth: state.auth.isRedirectedToAuth,
		isBuilding: state.burgerBuilder.isBuilding,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		closeSignIn: () => dispatch(signInOutsideCloseClick()),
		sentAuthForm: (email, password, authType) =>
			dispatch(confirmAuth(email, password, authType)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(memo(SignIn)));
