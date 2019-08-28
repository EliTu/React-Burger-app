import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	SET_DEFAULT_BURGER_STATE,
	FETCH_INGREDIENTS_FAILED,
} from './constants';
import axiosInstance from '../../../../axios/axios-orders';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7,
};

export const setDefaultBurgerState = ingredients => {
	return {
		type: SET_DEFAULT_BURGER_STATE,
		ingredients: ingredients,
	};
};

export const addIngredient = (ingName, state) => {
	const addedIngredientIndex = state.findIndex(
		el => el.ingredient === ingName
	);

	const incrementQuantity = [...state][addedIngredientIndex].quantity + 1;

	const addedIngredients = [...state];
	addedIngredients[addedIngredientIndex].quantity = incrementQuantity;

	const priceAddition = INGREDIENT_PRICES[ingName];
	return {
		type: ADD_INGREDIENT,
		ingredientName: ingName,
		addedIngredients: addedIngredients,
		priceAddition: priceAddition,
	};
};

export const removeIngredient = (ingName, state) => {
	const removedIngredientIndex = state.findIndex(
		el => el.ingredient === ingName
	);

	const decrementQuantity = [...state][removedIngredientIndex].quantity - 1;

	const removedIngredients = [...state];
	removedIngredients[removedIngredientIndex].quantity = decrementQuantity;

	const priceDeduction = INGREDIENT_PRICES[ingName];
	return {
		type: REMOVE_INGREDIENT,
		ingredientName: ingName,
		removedIngredients: removedIngredients,
		priceDeduction: priceDeduction,
	};
};

export const fetchIngredientsFailed = () => {
	return {
		type: FETCH_INGREDIENTS_FAILED,
		error: true,
	};
};

export const fetchIngredients = () => {
	return async dispatch => {
		try {
			const getIngredientsData = await axiosInstance.get(
				'/ingredients.json'
			);
			dispatch(setDefaultBurgerState(getIngredientsData.data));
		} catch (error) {
			dispatch(fetchIngredientsFailed());
		}
	};
};
