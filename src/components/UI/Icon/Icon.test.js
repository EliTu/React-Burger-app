import React from 'react';
import Icon from './Icon';
import { shallow } from 'enzyme';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

describe('<Icon>', () => {
	let component = shallow(<Icon iconType={faArrowCircleDown} size="1x" />);

	it('should render the component without errors', () => {
		expect(component).toMatchSnapshot();
		expect(component.length).toBe(1);
		expect(component.length).not.toBe(2);
	});
});
