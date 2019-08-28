const ordersControlForm = [
	{
		data: 'sortBy',
		elementType: 'select',
		elementConfig: {
			options: [
				{
					value: '',
					displayValue: 'Please select a sorting method',
					disabled: true,
				},
				{
					value: 'NEWEST',
					displayValue: 'Newest',
				},
				{ value: 'OLDEST', displayValue: 'Oldest' },
				{ value: 'PRICE', displayValue: 'Price' },
				{ value: 'DELIVERY', displayValue: 'Delivery method' },
			],
			label: 'Sort orders by:',
		},
		value: '',
		validation: {
			required: false,
			valid: true,
			errorMessage: '',
		},
	},

	{
		data: 'search',
		elementType: 'input',
		elementConfig: {
			type: 'text',
			placeholder: 'Enter anything here',
			label: 'Search an order ID:',
		},
		value: '',
		validation: {
			required: false,
			hasUserInput: false,
			valid: true,
			errorMessage: '',
		},
	},
];

export default ordersControlForm;
