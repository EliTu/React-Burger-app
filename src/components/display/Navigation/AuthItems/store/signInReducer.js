import { SIGNIN_TOGGLE_CLICK, SIGNIN_OUTSIDE_CLOSE_CLICK } from './actions';

const INITIAL_STATE = {
	isSignInDisplayed: false,
};

const signInReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGNIN_TOGGLE_CLICK:
			return {
				...state,
				isSignInDisplayed: !state.isSignInDisplayed,
			};

		case SIGNIN_OUTSIDE_CLOSE_CLICK:
			return {
				...state,
				isSignInDisplayed: false,
			};

		default:
			return state;
	}
};

export default signInReducer;
