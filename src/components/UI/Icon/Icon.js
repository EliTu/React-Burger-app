import React from 'react';
import styles from './Icon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Icon = ({ iconType, size = '1x' }) => {
	// CSS Module styles:
	const { Icon } = styles;
	return (
		<span className={Icon}>
			<FontAwesomeIcon icon={iconType} size={size} />
		</span>
	);
};

Icon.propTypes = {
	iconType: PropTypes.object,
	size: PropTypes.string,
};

export default Icon;
