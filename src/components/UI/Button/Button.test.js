import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('<Button>', () => {
	let component = shallow(<Button children="abc" handleClick={() => []} />);

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should render the children prop string without errors', () => {
		expect(component.children().text()).toBe('abc');
	});

	it('should set button styles according to the type prop', () => {
		component.setProps({ type: 'Confirm', toolBarButton: '' });

		expect(component).toMatchSnapshot();
		expect(component.hasClass('Button Confirm')).toBe(true);

		component.setProps({ type: 'Danger', toolBarButton: '' });
		expect(component).toMatchSnapshot();
		expect(component.hasClass('Button Danger')).toBe(true);
	});

	it('should set the toolBarButton style to MenuToggle on a small screen', () => {
		component.setProps({ type: '', toolBarButton: 'MenuToggle' });

		expect(component).toMatchSnapshot();
		expect(component.hasClass('Button  MenuToggle')).toBe(true);
	});
});
