import axiosInstance from '../../../../axios/axios-orders';
import {
	FETCH_ORDERS_INIT,
	FETCH_ORDERS_SUCCESS,
	FETCH_ORDERS_FAIL,
} from './constants';

export const fetchOrderInit = () => {
	return {
		type: FETCH_ORDERS_INIT,
	};
};

export const fetchOrdersSuccess = orders => {
	return {
		type: FETCH_ORDERS_SUCCESS,
		orders: orders,
	};
};

export const fetchOrderFail = () => {
	return {
		type: FETCH_ORDERS_FAIL,
	};
};

export const fetchOrdersFromDatabase = (idToken, userId) => {
	return async dispatch => {
		dispatch(fetchOrderInit());
		try {
			// Query params to set authentication by a token && filter fetched orders by userId
			const params = `?auth=${idToken}&orderBy="userId"&equalTo="${userId}"`;

			const orders = await axiosInstance.get(`/orders.json${params}`);

			// Parse json into an array and add the order id
			const fetchedOrders = [];
			for (let key in orders.data) {
				fetchedOrders.push({ ...orders.data[key], id: key });
			}

			dispatch(fetchOrdersSuccess(fetchedOrders));
		} catch (error) {
			dispatch(fetchOrderFail());
		}
	};
};
