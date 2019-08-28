import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick, type, toolBarButton }) => {
	// CSS Modules styles:
	const { Button } = styles;

	return (
		<button
			onClick={handleClick}
			className={[Button, styles[type], styles[toolBarButton]].join(' ')}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	handleClick: PropTypes.func.isRequired,
	type: PropTypes.string,
	toolBarButton: PropTypes.string,
};

export default Button;
