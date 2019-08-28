import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = ({ show, removeBackdrop }) => {
	// CSS Modules styles:
	const { Backdrop } = styles;

	return show && <div className={Backdrop} onClick={removeBackdrop} />;
};

Backdrop.propTypes = {
	show: PropTypes.bool,
	removeBackdrop: PropTypes.func,
};

export default Backdrop;
