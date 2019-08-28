import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('<Spinner/>', () => {
	let component;
	beforeEach(() => {
		component = shallow(<Spinner />);
	});

	it('should render without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component).toBeTruthy();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should have a div with loading text', () => {
		expect(component.find('.Loader').text()).toEqual('Loading...');
	});
});
