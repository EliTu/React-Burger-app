import React from 'react';
import styles from './AuthErrorMessage.module.css';
import PropTypes from 'prop-types';

const AuthErrorMessage = ({ errorMessage }) => {
	// CSS Modules Styles
	const { AuthErrorMessage } = styles;

	let message;
	switch (errorMessage) {
		case 'EMAIL_EXISTS':
			message = `The email you've provided is already taken. Please provide a different email address`;
			break;

		case 'TOO_MANY_ATTEMPTS_TRY_LATER':
			message = 'Too many attempts. Please try again later';
			break;

		case 'EMAIL_NOT_FOUND':
			message = `The email you've provided does not exist. Please try signing in with a different email or register a new user with the unused email`;
			break;

		case 'INVALID_PASSWORD':
			message = 'Wrong password. Please try again';
			break;

		case 'USER_DISABLED':
			message = `The account you're trying to sign in to has been disabled`;
			break;

		default:
			message = 'Oops! an Unexpected error has occurred!';
	}

	return (
		<>
			<p className={AuthErrorMessage}>{message}</p>
		</>
	);
};

AuthErrorMessage.propTypes = {
	errorMessage: PropTypes.string,
	authType: PropTypes.string,
};

export default AuthErrorMessage;
