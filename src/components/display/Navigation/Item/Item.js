import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signInToggleClick } from '../AuthItems/store/actions';
import { authSignout } from '../../../containers/Authentication/store/actions';
import Icon from '../../../UI/Icon/Icon';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

const Item = ({
	link,
	children,
	isSignInDisplayed,
	signInItem,
	toggleSignIn,
	signOutItem,
	signOutClicked,
	isLoggedIn,
}) => {
	// CSS Modules styles:
	const { Item, active, AuthSignin, SigninActive } = styles;

	// Handle toggling the display property of the LogIn component
	const handleSignInToggleClick = event => {
		event.preventDefault();
		if (!isSignInDisplayed) toggleSignIn();
	};

	// Handle loging user out upon click on 'Log out':
	const handleLogOutClick = event => {
		event.preventDefault();
		signOutClicked('signOut');
	};

	// Set Sign in tab custom styles:
	const signInDefaultStyle = !isLoggedIn ? AuthSignin : null;
	const signInActiveStyle = isSignInDisplayed ? SigninActive : null;

	const authType =
		signInItem || signOutItem ? (
			<a
				className={[Item, signInDefaultStyle, signInActiveStyle].join(
					' '
				)}
				href={link}
				onClick={event =>
					signInItem
						? handleSignInToggleClick(event)
						: handleLogOutClick(event)
				}
			>
				{signInItem && <Icon iconType={faSignInAlt} />}
				{signInItem ? 'Sign in' : 'Log out'}
			</a>
		) : (
			<NavLink className={Item} activeClassName={active} to={link} exact>
				{children}
			</NavLink>
		);

	return <div className={Item}>{authType}</div>;
};

Item.propTypes = {
	link: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	signInItem: PropTypes.bool,
	isSignInDisplayed: PropTypes.bool,
	toggleSignIn: PropTypes.func,
	signOutClicked: PropTypes.func,
	isLoggedIn: PropTypes.bool,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isSignInDisplayed: state.signIn.isSignInDisplayed,
		isLoggedIn: state.auth.isLoggedIn,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		toggleSignIn: () => dispatch(signInToggleClick()),
		signOutClicked: signOut => dispatch(authSignout(signOut)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Item);
