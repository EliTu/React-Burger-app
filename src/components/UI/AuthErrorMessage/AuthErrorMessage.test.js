import React from 'react';
import AuthErrorMessage from './AuthErrorMessage';
import { shallow } from 'enzyme';

describe('<AuthErrorMessage>', () => {
	let component = shallow(<AuthErrorMessage />);

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should render the correct message corresponding to EMAIL_EXISTS error', () => {
		component.setProps({ errorMessage: 'EMAIL_EXISTS' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toEqual(
			`The email you've provided is already taken. Please provide a different email address`
		);
	});

	it('should render the correct message corresponding to TOO_MANY_ATTEMPTS_TRY_LATER error', () => {
		component.setProps({ errorMessage: 'TOO_MANY_ATTEMPTS_TRY_LATER' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toEqual(
			`Too many attempts. Please try again later`
		);
	});

	it('should render the correct message corresponding to EMAIL_NOT_FOUND error', () => {
		component.setProps({ errorMessage: 'EMAIL_NOT_FOUND' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toEqual(
			`The email you've provided does not exist. Please try signing in with a different email or register a new user with the unused email`
		);
	});

	it('should render the correct message corresponding to INVALID_PASSWORD error', () => {
		component.setProps({ errorMessage: 'INVALID_PASSWORD' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toEqual(
			`Wrong password. Please try again`
		);
	});

	it('should render the correct message corresponding to USER_DISABLED error', () => {
		component.setProps({ errorMessage: 'USER_DISABLED' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toEqual(
			`The account you're trying to sign in to has been disabled`
		);
	});

	it('should render a default error message if errorMessage has no value', () => {
		component.setProps({ errorMessage: '' });

		expect(component).toMatchSnapshot();
		expect(component.find('p').text()).toEqual(
			`Oops! an Unexpected error has occurred!`
		);
	});
});
