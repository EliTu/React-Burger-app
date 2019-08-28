import {
	PURCHASE_BURGER_SUCCESS,
	PURCHASE_BURGER_FAIL,
	PURCHASE_BURGER_INIT,
} from './constants';
import {
	FETCH_ORDERS_INIT,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAIL,
} from '../../../containers/Orders/store/constants.js';

const INITIAL_STATE = {
	orders: [],
	isLoading: false,
	isOrderSuccessful: false,
	isFetchSuccessful: false,
};

const orderFormReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PURCHASE_BURGER_INIT:
			return {
				...state,
				isLoading: true,
				isOrderSuccessful: false,
				isFetchSuccessful: false,
			};
		case PURCHASE_BURGER_SUCCESS:
			const newOrder = {
				...action.orderData,
			};
			return {
				...state,
				isLoading: false,
				orders: state.orders.concat(newOrder),
				isOrderSuccessful: true,
			};

		case PURCHASE_BURGER_FAIL:
			return {
				...state,
				isLoading: false,
				isOrderSuccessful: false,
			};

		case FETCH_ORDERS_INIT:
			return {
				...state,
				isLoading: true,
				isFetchSuccessful: false,
				isOrderSuccessful: false,
			};

		case FETCH_ORDERS_SUCCESS:
			return {
				...state,
				orders: action.orders,
				isLoading: false,
				isFetchSuccessful: true,
			};

		case FETCH_ORDERS_FAIL:
			return {
				...state,
				isLoading: false,
				isFetchSuccessful: false,
			};

		default:
			return state;
	}
};

export default orderFormReducer;
