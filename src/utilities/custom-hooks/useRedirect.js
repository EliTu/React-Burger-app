import { useEffect, useCallback } from 'react';

// The hook is used to check if the user should be redirected to the Checkout page, in case that he has started selecting ingredients first:
const useRedirect = (
	isLoggedIn,
	isBuilding,
	isRedirecting,
	redirectFn,
	destination
) => {
	const redirectToCheckout = useCallback(() => {
		if (isLoggedIn && isBuilding && isRedirecting) redirectFn(destination);
	}, [destination, isBuilding, isLoggedIn, isRedirecting, redirectFn]);

	useEffect(() => {
		redirectToCheckout();
	}, [redirectToCheckout]);

	return redirectToCheckout;
};

export default useRedirect;
