import React from 'react';
import FormErrorMessage from './FormErrorMessage';
import { shallow } from 'enzyme';

describe('<FormErrorMessage>', () => {
	let component = shallow(<FormErrorMessage />);

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should render a specific error message if errorType is noMatch', () => {
		component.setProps({ errorType: 'noMatch' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toBe(
			'The passwords you entered did not match! please try again.'
		);
	});

	it('should render a specific error message if errorType is emptyFields', () => {
		component.setProps({ errorType: 'emptyFields' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toBe(
			'Please properly fill out all the required fields before submitting.'
		);
	});
});
