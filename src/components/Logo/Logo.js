import React from 'react';
import styles from './Logo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';

const Logo = ({ size = '1x' }) => {
	// CSS Modules styles:
	const { Logo } = styles;

	return (
		<div className={Logo}>
			<FontAwesomeIcon icon={faHamburger} size={size} />
		</div>
	);
};
export default Logo;
