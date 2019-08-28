import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import signUpFormTemplate from './signUpFormTemplate/signUpFormTemplate';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import Spinner from '../../../UI/Spinner/Spinner';
import FormErrorMessage from '../../../UI/FormErrorMessage/FormErrorMessage';
import AuthErrorMessage from '../../../UI/AuthErrorMessage/AuthErrorMessage';
import { confirmAuth } from '../store/actions';
import useForm from '../../../../utilities/custom-hooks/useForm';
import useRedirect from '../../../../utilities/custom-hooks/useRedirect';
import styles from '../SignUp/SignUp.module.css';
import PropTypes from 'prop-types';

export const SignUp = ({
	isLoading,
	isSignInLoading,
	authType,
	error,
	sentAuthForm,
	isLoggedIn,
	isRedirectedToAuth,
	isBuilding,
	history,
}) => {
	// Local state hooks:
	const [showFormInvalidMessage, setShowFormInvalidMessage] = useState(false);
	const [formErrorType, setFormErrorType] = useState('emptyFields');

	// Form fields & validation data from useForm custom hook:
	const [
		inputs,
		setInputs,
		isFormValid,
		setIsFormValid,
		handleFormChange,
	] = useForm(signUpFormTemplate);

	// Fire redirect custom hook:
	const redirect = useRedirect(
		isLoggedIn,
		isBuilding,
		isRedirectedToAuth,
		history.push,
		'/checkout'
	);

	useEffect(() => {
		if (isLoggedIn) {
			isBuilding && isRedirectedToAuth ? redirect() : history.push('/');
		}
	}, [history, isBuilding, isLoggedIn, isRedirectedToAuth, redirect]);

	const handleFormSubmitEvent = event => {
		event.preventDefault();

		if (!isFormValid) {
			setShowFormInvalidMessage(true);
			setFormErrorType('emptyFields');
			return;
		}

		// Check if both passwords are not matching
		if (inputs[1].value !== inputs[2].value) {
			// Nullify 2nd password field value
			let resetValueCopy = [...inputs];
			resetValueCopy[2].value = '';

			setInputs(resetValueCopy);
			setIsFormValid(false);
			setShowFormInvalidMessage(true);
			setFormErrorType('noMatch');
			return;
		}

		// If all fields are valid
		if (isFormValid) {
			sentAuthForm(inputs[0].value, inputs[1].value, 'signup');

			let resetValueCopy = [...inputs];
			resetValueCopy.forEach(field => (field.value = ''));

			setInputs(resetValueCopy);
			setShowFormInvalidMessage(false);
		}
	};

	const handleCancelClick = () => history.replace('/');

	// CSS modules styles:
	const { SignUp, MainHeader } = styles;

	return (
		<>
			<h1 className={MainHeader}>Registration</h1>
			<div className={SignUp}>
				{isLoading && !isSignInLoading ? (
					<Spinner />
				) : (
					<>
						<h2>Become a new member</h2>
						<form action="post" onSubmit={handleFormSubmitEvent}>
							{inputs.map((field, i) => (
								<Input
									key={field.data}
									focused={i === 0}
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
						{showFormInvalidMessage ? (
							<FormErrorMessage errorType={formErrorType} />
						) : null}
						{error && authType === 'signup' ? (
							<AuthErrorMessage
								errorMessage={error.response.data.error.message}
							/>
						) : null}
						<Button
							type="Confirm"
							handleClick={handleFormSubmitEvent}
						>
							Sign up
						</Button>
						<Button type="Danger" handleClick={handleCancelClick}>
							Go back
						</Button>
					</>
				)}
			</div>
		</>
	);
};

SignUp.propTypes = {
	isLoading: PropTypes.bool,
	isSignInLoading: PropTypes.bool,
	authType: PropTypes.string,
	error: PropTypes.object,
	sentAuthForm: PropTypes.func,
	isRedirectedToAuth: PropTypes.bool,
	isBuilding: PropTypes.bool,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isLoading: state.auth.isLoading,
		isSignInLoading: state.auth.isSignInLoading,
		error: state.auth.error,
		authType: state.auth.authType,
		isLoggedIn: state.auth.isLoggedIn,
		isRedirectedToAuth: state.auth.isRedirectedToAuth,
		isBuilding: state.burgerBuilder.isBuilding,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		sentAuthForm: (email, password, authType) =>
			dispatch(confirmAuth(email, password, authType)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUp);
