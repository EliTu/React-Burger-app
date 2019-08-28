import React from 'react';
import { GoBackMessage } from './GoBackMessage';
import Button from '../../UI/Button/Button';
import { shallow } from 'enzyme';

describe('<GoBackMessage>', () => {
	let component = shallow(<GoBackMessage content="abc" history />);
	let buttonComp = component.find(Button);

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should render a Button component', () => {
		expect(component.find(Button).length).toBe(1);
		expect(component.find(Button).length).not.toBe(2);
		expect(buttonComp.dive().text()).toBe('Go back');
	});

	it('should render the content prop', () => {
		expect(
			component
				.children()
				.first()
				.text()
		).toBe('abc');
	});
});
