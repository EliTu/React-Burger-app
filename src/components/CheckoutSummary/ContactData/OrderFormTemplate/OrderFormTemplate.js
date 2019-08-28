const OrderFormTemplate = [
	{
		data: 'name',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Enter your name',
			label: '*Name:',
		},
		value: '',
		validation: {
			required: true,
			hasUserInput: false,
			valid: false,
			errorMessage: 'Please enter a name',
		},
	},

	{
		data: 'phone',
		elementType: 'input',
		elementConfig: {
			type: 'number',
			min: 0,
			placeholder: 'Enter your phone number',
			label: '*Phone number:',
		},
		value: '',
		validation: {
			required: true,
			hasUserInput: false,
			valid: false,
			errorMessage: 'Please enter a valid phone number',
		},
	},

	{
		data: 'email',
		elementType: 'input',
		elementConfig: {
			type: 'email',
			placeholder: 'Enter your email',
			label: '*Email:',
		},
		value: '',
		validation: {
			required: true,
			emailValidationRegExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			hasUserInput: false,
			valid: false,
			errorMessage: 'Please enter a valid email address',
		},
	},

	{
		data: 'address',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Enter your address',
			label: '*Address:',
		},
		value: '',
		validation: {
			required: true,
			hasUserInput: false,
			valid: false,
			errorMessage: 'Please enter a valid address',
		},
	},

	{
		data: 'postal',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Enter your postal code',
			label: '*Postal code:',
		},
		value: '',
		validation: {
			required: true,
			hasUserInput: false,
			valid: false,
			errorMessage: 'Please enter a valid postal code',
		},
	},

	{
		data: 'deliveryMethod',
		elementType: 'select',
		elementConfig: {
			options: [
				{
					value: 'fastest',
					displayValue: 'Fastest',
				},
				{ value: 'cheapest', displayValue: 'Cheapest' },
			],
			label: 'Delivery Method:',
		},
		value: 'fastest',
		validation: {
			required: true,
			valid: true,
		},
	},

	{
		data: 'requests',
		elementType: 'textarea',
		elementConfig: {
			type: 'textarea',
			placeholder:
				'Please specify any additional requests or comments you might have',
			label: 'Additional requests:',
		},
		value: '',
		validation: {
			required: false,
			valid: true,
		},
	},
];

export default OrderFormTemplate;
