import React, { useRef, useEffect } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({
	elementType,
	elementConfig,
	value,
	validation,
	focused,
	handleChange,
	handleEnterPress,
	data,
}) => {
	// CSS Modules styles:
	const { Input, InvalidStyle, errorMessageStyle, ValidStyle } = styles;

	let inputElement = null;

	let errorMessageElement = (
		<p className={errorMessageStyle}>{validation.errorMessage}</p>
	);

	// Listen to keyboard enter click to submit form:
	const enterPressCallback = (data, event, func) => {
		if (event.key === 'Enter' && data !== 'search') func(event);
	};

	// Focus the first input field upon component mount
	const focusRef = useRef();
	useEffect(() => {
		if (focused) focusRef.current.focus();
	}, [focused]);

	// Set validation styles:
	let validationStyles = [];
	validationStyles =
		!validation.valid && validation.hasUserInput
			? InvalidStyle
			: validation.valid && validation.hasUserInput && value !== ''
			? ValidStyle
			: [];

	switch (elementType) {
		case 'input':
			inputElement = (
				<input
					ref={focusRef}
					className={validationStyles}
					{...elementConfig}
					value={value}
					onChange={handleChange}
					onKeyPress={event =>
						enterPressCallback(data, event, handleEnterPress)
					}
					data-test="input-test"
				/>
			);
			break;

		case 'textarea':
			inputElement = (
				<textarea
					{...elementConfig}
					value={value}
					onChange={handleChange}
					onKeyPress={event =>
						enterPressCallback(event, handleEnterPress)
					}
					data-test="textarea-test"
				/>
			);
			break;

		case 'select':
			inputElement = (
				<select
					value={value}
					onChange={handleChange}
					data-test="select-test"
				>
					{elementConfig.options.map(option => (
						<option
							value={option.value}
							key={option.value}
							disabled={option.disabled}
						>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;

		default:
			inputElement = (
				<input
					{...elementConfig}
					value={value}
					className={!validation.valid ? InvalidStyle : null}
					onKeyPress={event =>
						enterPressCallback(event, handleEnterPress)
					}
				/>
			);
	}
	return (
		<div className={Input}>
			<label>{elementConfig.label}</label>
			{inputElement}
			{!validation.valid && validation.hasUserInput
				? errorMessageElement
				: null}
		</div>
	);
};

Input.propTypes = {
	elementType: PropTypes.string,
	elementConfig: PropTypes.object,
	validation: PropTypes.object,
	focused: PropTypes.bool,
	handleChange: PropTypes.func,
	handleEnterPress: PropTypes.func,
};

export default Input;
