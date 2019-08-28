import React from 'react';
import styles from './FormErrorMessage.module.css';
import PropTypes from 'prop-types';

const FormErrorMessage = ({ errorType }) => {
	// CSS Modules styles:
	const { FormErrorMessage } = styles;

	let errorMessage;
	switch (errorType) {
		case 'noMatch':
			errorMessage = (
				<p>
					The passwords you entered did not match! please try again.
				</p>
			);
			break;
		case 'emptyFields':
			errorMessage = (
				<p>
					Please properly fill out all the required fields before
					submitting.
				</p>
			);
			break;
		default:
			errorMessage = '';
			break;
	}

	return <div className={FormErrorMessage}>{errorMessage}</div>;
};

FormErrorMessage.propTypes = {
	errorType: PropTypes.string,
};

export default FormErrorMessage;
