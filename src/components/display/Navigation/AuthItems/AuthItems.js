import React from 'react';
import { connect } from 'react-redux';
import Item from '../Item/Item';
import styles from './AuthItems.module.css';
import PropTypes from 'prop-types';
import Icon from '../../../UI/Icon/Icon';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export const AuthItems = ({ isLoggedIn, email }) => {
	// CSS Modules style:
	const { AuthItems, LoggedInMessage } = styles;

	return (
		<div className={AuthItems}>
			{!isLoggedIn ? (
				<>
					<Item signInItem link="">
						Sign in
					</Item>
					<Item link="/signup">
						{' '}
						<Icon iconType={faUserPlus} />
						Sign up
					</Item>
				</>
			) : (
				<>
					<p className={LoggedInMessage}>
						Welcome, <span>{email}</span>!
					</p>
					<Item signOutItem link="">
						Log out
					</Item>
				</>
			)}
		</div>
	);
};

AuthItems.propTypes = {
	isLoggedIn: PropTypes.bool,
	email: PropTypes.string,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
		email: state.auth.email,
	};
};

export default connect(mapStateToProps)(AuthItems);
