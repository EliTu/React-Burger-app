import React from 'react';
import { shallow } from 'enzyme';
import { NavItems } from './NavItems';
import Item from '../Item/Item';

describe('<NavItems/>', () => {
	let component;
	beforeEach(() => {
		component = shallow(<NavItems />);
	});

	it('should render 3 nav <Item/> components (as long as user not authenticated)', () => {
		expect(component).toMatchSnapshot();
		expect(component.find(Item)).toHaveLength(3);
		expect(component.find(Item)).not.toHaveLength(2);
		expect(component.find(Item)).not.toBeFalsy();
	});

	it('should render 4 nav <Item/> components if the user is authenticated and logged in', () => {
		component.setProps({ isLoggedIn: true });

		expect(component).toMatchSnapshot();
		expect(component.find(Item)).toHaveLength(4);
		expect(component.find(Item)).not.toHaveLength(3);
		expect(component.find(Item)).not.toBeFalsy();
	});
});
