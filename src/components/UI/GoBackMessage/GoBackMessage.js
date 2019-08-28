import React from 'react';
import Button from '../Button/Button';
import styles from './GoBackMessage.module.css';
import { withRouter } from 'react-router';

export const GoBackMessage = ({ content, history }) => {
	// CSS Modules styles:
	const { GoBackMessage } = styles;

	const handleBackClick = () => history.goBack();

	return (
		<div className={GoBackMessage}>
			{content}
			<Button handleClick={handleBackClick} type="Danger">
				Go back
			</Button>
		</div>
	);
};

export default withRouter(GoBackMessage);
