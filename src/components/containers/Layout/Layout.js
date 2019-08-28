import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../display/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../display/Navigation/SIdeDrawer/SideDrawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children, isSignInDisplayed }) => {
	// Local state hooks:
	const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);
	const [, setIsSideDrawerOpen] = useState(false);

	useEffect(() => {
		setIsSideDrawerOpen(false);
		setIsSideDrawerVisible(false);
	}, [isSignInDisplayed]);

	// CSS Modules styles:
	const { layoutStyle } = styles;

	const handleSideDrawerCloseClick = () => setIsSideDrawerVisible(false);

	const handleDrawerButtonClick = () => {
		setIsSideDrawerVisible(true);
		setIsSideDrawerOpen(true);
	};

	// Check if the current screen size is a small screen:
	const smallScreenMode = window.innerWidth <= '500';

	return (
		<>
			<Backdrop show={isSignInDisplayed && smallScreenMode} />
			<Toolbar clicked={handleDrawerButtonClick} />
			<SideDrawer
				isVisible={isSideDrawerVisible}
				handleVisibility={handleSideDrawerCloseClick}
			/>
			<main className={layoutStyle}>{children}</main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	isSignInDisplayed: PropTypes.bool,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		isSignInDisplayed: state.signIn.isSignInDisplayed,
	};
};

export default connect(mapStateToProps)(Layout);
