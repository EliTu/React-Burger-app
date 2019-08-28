import React from 'react';
import Logo from './Logo';
import { shallow } from 'enzyme';

describe('<Logo>', () => {
	const component = shallow(<Logo size="3x" />);

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
		expect(component.hasClass('Logo')).toBe(true);
	});

	it('should render the FontAwesome hamburger icon without errors', () => {
		let icon = component.find('FontAwesomeIcon');
		let iconType = icon.props().icon.iconName;
		let iconSize = icon.props().size;

		expect(icon.length).toBe(1);
		expect(iconType).toBe('hamburger');
		expect(iconSize).toBe('3x');
	});
});
