import React from 'react';
import { shallow } from 'enzyme';
import { AuthItems } from './AuthItems';
import Item from '../Item/Item';

describe('AuthItems', () => {
	let component;
	beforeEach(() => {
		component = shallow(<AuthItems />);
	});

	it('Should render 2 <Item> if the user is not signed in', () => {
		component.setProps({ isLoggedIn: false });

		expect(component).toMatchSnapshot();
		expect(component.find(Item)).toHaveLength(2);
		expect(component.find(Item)).not.toHaveLength(3);
		expect(component.find(Item)).not.toBeFalsy();
	});

	it('should render 1 <Item></Item> and if user is signed in ', () => {
		component.setProps({ isLoggedIn: true });

		expect(component).toMatchSnapshot();
		expect(component.find(Item)).toHaveLength(1);
		expect(component.find(Item)).not.toHaveLength(2);
		expect(component.find(Item)).not.toBeFalsy();
	});

	it('should contain an <Item>Log out</Item> if the user is authenticated and logged in', () => {
		component.setProps({ isLoggedIn: true });

		expect(component).toMatchSnapshot();
		expect(component.find(Item)).toBeTruthy();
		expect(
			component.contains(
				<Item signOutItem link="">
					Log out
				</Item>
			)
		).toEqual(true);
	});
});
