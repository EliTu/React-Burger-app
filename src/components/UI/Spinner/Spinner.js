import React from 'react';
import styles from './Spinner.module.css';

const Spinner = props => {
	// CSS Modules styles:
	const { Loader } = styles;

	return <div className={Loader}>Loading...</div>;
};

export default Spinner;
