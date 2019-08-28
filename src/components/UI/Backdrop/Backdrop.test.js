import React from 'react';
import Backdrop from './Backdrop';
import { shallow } from 'enzyme';

describe('<Backdrop>', () => {
	let onClick = jest.fn();
	let component = shallow(<Backdrop show={true} removeBackdrop={onClick} />);

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});

	it('should call the click event callback function upon clicking on the button', () => {
		component.simulate('click');

		expect(onClick).toHaveBeenCalled();
	});
});
