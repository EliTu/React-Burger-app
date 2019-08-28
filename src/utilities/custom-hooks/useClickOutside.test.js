import React from 'react';
import useClickOutside from './useClickOutside';
import { shallow } from 'enzyme';

describe('useClickOutside', () => {
	const HookWrapper = ({ hookProp }) => {
		const hook = hookProp ? hookProp() : null;
		return <div hook={hook} />;
	};
	let callback = jest.fn();

	let wrapper = shallow(
		<HookWrapper hook={() => useClickOutside(true, callback)} />
	);

	it('should set an init value without errors', () => {
		let { hook } = wrapper.find('div').props();
		expect(hook).toEqual('div');
	});
});
