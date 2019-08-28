import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Spinner from '../../UI/Spinner/Spinner';
import Burger from '../../Burger/Burger';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder>', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<BurgerBuilder initIngredients={() => {}} />);
	});

	it('should render BuildControls only if ingredients are available from props', () => {
		wrapper.setProps({
			ingredients: [{ ingredient: 'salad', quantity: 1 }],
		});

		expect(wrapper.find(BuildControls)).toHaveLength(1);
		expect(wrapper.find(BuildControls)).not.toHaveLength(2);
		expect(wrapper.find(BuildControls)).not.toBeFalsy();
	});

	it('should render Spinner if ingredients are being fetched', () => {
		wrapper.setProps({
			ingredients: [],
		});

		expect(wrapper.find(Spinner)).toBeTruthy();
	});

	it('should render Burger if ingredients are available', () => {
		wrapper.setProps({
			ingredients: [{ ingredient: 'salad', quantity: 1 }],
		});

		expect(wrapper.find(Burger)).toHaveLength(1);
		expect(wrapper.find(Burger)).not.toHaveLength(2);
		expect(wrapper.find(Burger)).not.toBeFalsy();
	});

	it('should render Modal if isInOrderSummary === true', () => {
		expect(wrapper.find(Modal)).toBeTruthy();
	});

	it('should render OrderSummary if not loadingRequest', () => {
		wrapper.setProps({
			isLoadingRequest: false,
		});

		expect(wrapper.find(OrderSummary)).toHaveLength(1);
		expect(wrapper.find(OrderSummary)).not.toHaveLength(2);
		expect(wrapper.find(OrderSummary)).not.toBeFalsy();
	});
});
