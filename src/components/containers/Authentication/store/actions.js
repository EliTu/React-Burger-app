import {
	AUTH_INIT,
	AUTH_SUCCESS,
	AUTH_FAIL,
	AUTH_SIGNOUT,
	REDIRECTED_TO_AUTH_PAGE,
} from './constants';
import axiosAuth from '../../../../axios/axios-auth';
import { authKey as key } from './keys';

export const authInit = authType => {
	return {
		type: AUTH_INIT,
		authType: authType,
		isSignInLoading: authType === 'signin',
	};
};

export const authSuccess = (idToken, userId, email) => {
	return {
		type: AUTH_SUCCESS,
		idToken: idToken,
		userId: userId,
		email: email,
	};
};
export const authFail = error => {
	return {
		type: AUTH_FAIL,
		error: error,
	};
};

export const authSignout = setSignOutType => {
	// When logging out, remove the saved auth data in the local storage
	localStorage.clear();

	return {
		type: AUTH_SIGNOUT,
		authType: setSignOutType,
	};
};

export const redirectedToAuthPage = () => {
	return {
		type: REDIRECTED_TO_AUTH_PAGE,
	};
};

export const confirmAuth = (email, password, authType) => {
	return async dispatch => {
		dispatch(authInit(authType));

		let targetUrl =
			authType === 'signin'
				? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
				: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`;

		const authData = {
			email: email,
			password: password,
			returnSecureToken: true,
		};

		try {
			const postAuthData = await axiosAuth.post(targetUrl, authData);

			const expirationDate = new Date(
				new Date().getTime() + postAuthData.data.expiresIn * 1000
			);

			// Store token and calculated expiry date to the local storage for log in state persistance
			localStorage.setItem('token', postAuthData.data.idToken);
			localStorage.setItem('expirationDate', expirationDate);
			localStorage.setItem('userId', postAuthData.data.localId);
			localStorage.setItem('email', postAuthData.data.email);

			dispatch(
				authSuccess(
					postAuthData.data.idToken,
					postAuthData.data.localId,
					postAuthData.data.email
				)
			);
			dispatch(logOutWhenTokenExpires(postAuthData.data.expiresIn));
		} catch (error) {
			dispatch(authFail(error));
		}
	};
};

export const logOutWhenTokenExpires = expireTime => {
	return async dispatch => {
		setTimeout(() => {
			dispatch(authSignout('signOut'));
		}, expireTime * 1000);
	};
};

export const authCheckLoginState = () => {
	return dispatch => {
		// Check if a token is available in the local storage
		const token = localStorage.getItem('token');
		if (!token) dispatch(authSignout());

		const expirationDate = new Date(localStorage.getItem('expirationDate'));
		const userId = localStorage.getItem('userId');
		const email = localStorage.getItem('email');

		// If the token's expiration time is due, then log out, otherwise dispatch authSuccess to persist log in state
		if (expirationDate <= new Date()) {
			dispatch(authSignout());
		} else {
			dispatch(authSuccess(token, userId, email));
			dispatch(
				logOutWhenTokenExpires(
					(expirationDate.getTime() - new Date().getTime()) / 1000
				)
			);
		}
	};
};
