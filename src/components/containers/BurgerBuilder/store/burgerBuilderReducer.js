import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	SET_DEFAULT_BURGER_STATE,
	FETCH_INGREDIENTS_FAILED,
} from './constants';

const INITIAL_STATE = {
	ingredients: null,
	totalPrice: 3,
	isLoadingRequest: false,
	isErrorOnMount: false,
	isBuilding: false,
};

const burgerBuilderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_DEFAULT_BURGER_STATE:
			return {
				...state,
				ingredients: action.ingredients,
				isErrorOnMount: false,
				totalPrice: 3,
			};

		case FETCH_INGREDIENTS_FAILED:
			return {
				...state,
				isErrorOnMount: true,
			};

		case ADD_INGREDIENT:
			return {
				...state,
				ingredients: action.addedIngredients,
				totalPrice: state.totalPrice + action.priceAddition,
				isBuilding:
					true && state.ingredients.some(el => el.quantity > 0),
			};

		case REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: action.removedIngredients,
				totalPrice: state.totalPrice - action.priceDeduction,
				isBuilding:
					true && state.ingredients.some(el => el.quantity > 0),
			};

		default:
			return state;
	}
};

export default burgerBuilderReducer;
