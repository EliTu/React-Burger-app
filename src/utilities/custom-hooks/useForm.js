import { useState, useEffect } from 'react';

const useForm = templateForm => {
	const [inputs, setInputs] = useState(templateForm);
	const [isFormValid, setIsFormValid] = useState(false);
	const [checkMinMax, setCheckMinMax] = useState(false);

	// Handle changes upon typing in the input fields
	const handleFormChange = (event, data) => {
		let updatedForm = [...inputs];
		let updatedFormData = updatedForm.forEach(el =>
			el.data === data
				? ((el.value = event.target.value),
				  (el.validation.valid = checkInputValidation(
						el.value,
						el.validation,
						el.data
				  )),
				  (el.validation.hasUserInput = true))
				: el
		);
		updatedForm.value = updatedFormData;
		setInputs([...updatedForm]);
	};

	// Check form validation upon changes to fields and minMax requirements
	useEffect(() => {
		const checkFormValidation = () => {
			const formCopy = [...inputs];
			const checkValid = formCopy.every(el => {
				return el.validation.valid;
			});

			setIsFormValid(checkValid);
		};
		checkFormValidation();
	}, [checkMinMax, inputs]);

	// Check requirements for the input fields for validations
	const checkInputValidation = (value, validation, type) => {
		let isValid = true;

		// General validation & empty field:
		if (validation.required) isValid = value.trim() !== '' && isValid;

		// Check the email regexp:
		if (validation.required && type === 'email')
			isValid = validation.emailValidationRegExp.test(value);

		// Check min-max characters requirement:
		if (validation.minLength && validation.maxLength)
			isValid =
				value.length + 1 >= validation.minLength &&
				value.length + 1 <= validation.maxLength;

		setCheckMinMax(isValid);
		return isValid;
	};

	return [inputs, setInputs, isFormValid, setIsFormValid, handleFormChange];
};

export default useForm;
