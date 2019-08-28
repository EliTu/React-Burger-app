import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import { findByTestAttr } from '../../../utilities/test-utilities/findByTestAttr';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
	// const component = setShallowAsComponent(<Modal />);
	let component;
	beforeEach(() => {
		component = shallow(<Modal />);
	});

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component).toBeTruthy();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should render the Backdrop component if mounted', () => {
		expect(component).toMatchSnapshot();
		expect(component.find(Backdrop)).toBeTruthy();
		expect(component.find(Backdrop)).toHaveLength(1);
		expect(component.find(Backdrop)).not.toHaveLength(2);
	});

	it('should render the wrapper <div> containing the children', () => {
		const wrapperDiv = findByTestAttr(component, 'wrapper-div');
		expect(component).toMatchSnapshot();
		expect(wrapperDiv).toBeTruthy();
		expect(wrapperDiv.length).toBe(1);
		expect(wrapperDiv.length).not.toBe(2);
	});

	it('should render the children props without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.children()).toBeTruthy();
		expect(component.children()).not.toHaveLength(0);
	});
});
