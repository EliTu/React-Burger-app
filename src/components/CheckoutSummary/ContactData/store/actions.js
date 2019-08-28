import axiosInstance from '../../../../axios/axios-orders';
import {
	PURCHASE_BURGER_SUCCESS,
	PURCHASE_BURGER_FAIL,
	PURCHASE_BURGER_INIT,
} from './constants';

export const purchaseBurgerSuccess = order => {
	return {
		type: PURCHASE_BURGER_SUCCESS,
		orderData: order,
	};
};

export const purchaseBurgerFail = error => {
	return {
		type: PURCHASE_BURGER_FAIL,
	};
};

export const purchaseBurgerInit = () => {
	return {
		type: PURCHASE_BURGER_INIT,
	};
};

export const postPurchasedBurger = (order, redirectOnSuccess, idToken) => {
	return async dispatch => {
		dispatch(purchaseBurgerInit());
		try {
			await axiosInstance.post(`/orders.json?auth=${idToken}`, order);
			dispatch(purchaseBurgerSuccess(order));
			redirectOnSuccess('/');
		} catch (error) {
			dispatch(purchaseBurgerFail(error));
		}
	};
};
