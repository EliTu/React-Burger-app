import React, { Suspense } from 'react';
import Spinner from '../../UI/Spinner/Spinner';

// A utility HOC for loading components lazily with React Router, implementing Suspense with a fallback for each component that is rendered through the Router
const LazyLoader = Component => {
	return props => (
		<Suspense fallback={<Spinner />}>
			<Component {...props} />
		</Suspense>
	);
};

export default LazyLoader;
