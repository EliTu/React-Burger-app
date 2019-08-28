const signInForm = [
	{
		data: 'email',
		elementType: 'input',
		elementConfig: {
			type: 'email',
			placeholder: 'Enter your email',
			label: 'Email:',
		},
		value: '',
		validation: {
			required: true,
			emailValidationRegExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			hasUserInput: false,
			valid: false,
			errorMessage:
				'Please enter a valid email address (e.g: myemail@mail.com)',
		},
	},

	{
		data: 'password',
		elementType: 'input',
		elementConfig: {
			type: 'password',
			placeholder: 'Enter your password',
			label: 'Password:',
		},
		value: '',
		validation: {
			required: true,
			hasUserInput: false,
			valid: false,
			minLength: 7,
			maxLength: 12,
			errorMessage: 'The password must be 6-12 characters',
		},
	},
];

export default signInForm;
