import authReducer from './authReducer';
import { AUTH_INIT, AUTH_SUCCESS, AUTH_SIGNOUT } from './constants';

describe('authReducer', () => {
	it('should set initial state on load', () => {
		expect(authReducer(undefined, { type: null })).toEqual({
			authType: '',
			idToken: '',
			userId: '',
			email: '',
			isLoggedIn: false,
			isLoading: false,
			isSignInLoading: false,
			isRedirectedToAuth: false,
			error: null,
		});
	});

	it('should set isLoading, authType and isSignInLoading upon init', () => {
		expect(
			authReducer(
				{
					authType: '',
					isLoading: false,
					isSignInLoading: false,
				},
				{ type: AUTH_INIT, authType: 'test', isSignInLoading: true }
			)
		).toEqual({ authType: 'test', isLoading: true, isSignInLoading: true });
	});

	it('should set a idToken, userId and an email, set isLoggedIn to true, set isLoading,isSignInLoading, isRedirectedToAuth to false and set error to null upon AUTH_SUCCESS', () => {
		expect(
			authReducer(
				{
					authType: '',
					idToken: '',
					userId: '',
					email: '',
					isLoggedIn: false,
					isLoading: false,
					isSignInLoading: false,
					isRedirectedToAuth: false,
					error: null,
				},
				{
					type: AUTH_SUCCESS,
					idToken: 'test',
					userId: 'test',
					email: 'test',
				}
			)
		).toEqual({
			authType: '',
			idToken: 'test',
			userId: 'test',
			email: 'test',
			isLoggedIn: true,
			isLoading: false,
			isSignInLoading: false,
			isRedirectedToAuth: false,
			error: null,
		});
	});

	it('should remove the idToken, userId and email, setIsLoggedIn, isLoading, isSignInLoading isRedirectedToAuth to false, set authType to signOut and set error to null upon AUTH_SIGNOUT', () => {
		expect(
			authReducer(
				{
					authType: '',
					idToken: '',
					userId: '',
					email: '',
					isLoggedIn: false,
					isLoading: false,
					isSignInLoading: false,
					isRedirectedToAuth: false,
					error: null,
				},
				{ type: AUTH_SIGNOUT, authType: 'signOut' }
			)
		).toEqual({
			idToken: '',
			userId: '',
			email: '',
			isLoggedIn: false,
			isLoading: false,
			isSignInLoading: false,
			error: null,
			isRedirectedToAuth: false,
			authType: 'signOut',
		});
	});
});
