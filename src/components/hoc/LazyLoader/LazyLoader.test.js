import React from 'react';
import LazyLoader from './LazyLoader';
import { shallow } from 'enzyme';

describe('<LazyLoader>', () => {
	const testComponent = props => <div {...props}>testComponent</div>;
	const lazy1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(testComponent);
		}, 1000);
	});

	it('should render a component without errors', async () => {
		const loaded1 = await lazy1.then(loaded => loaded);

		let wrapper = shallow(<LazyLoader component={loaded1} />);
		expect(wrapper.html()).toMatchSnapshot();
		expect(wrapper.length).toBe(1);
	});
});
