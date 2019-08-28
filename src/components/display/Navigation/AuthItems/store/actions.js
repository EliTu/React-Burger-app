export const SIGNIN_TOGGLE_CLICK = 'SIGNIN_TOGGLE_CLICK';
export const SIGNIN_OUTSIDE_CLOSE_CLICK = 'SIGNIN_OUTSIDE_CLOSE_CLICK';

export const signInToggleClick = () => {
	return {
		type: SIGNIN_TOGGLE_CLICK,
	};
};

export const signInOutsideCloseClick = () => {
	return {
		type: SIGNIN_OUTSIDE_CLOSE_CLICK,
	};
};
