import React from 'react';
import Icon from '../../../UI/Icon/Icon';
import styles from './Notification.module.css';
import {
	faCheckCircle,
	faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const Notification = ({ type, sign }) => {
	const { Notification, Success, Fail, iconWrapper } = styles;
	const setColors = sign === 'success' ? Success : Fail;

	return (
		<div className={[Notification, setColors].join(' ')}>
			<p>{type}</p>
			<div className={iconWrapper}>
				<Icon
					iconType={
						sign === 'success' ? faCheckCircle : faExclamationCircle
					}
					size="3x"
				/>
			</div>
		</div>
	);
};

export default Notification;
