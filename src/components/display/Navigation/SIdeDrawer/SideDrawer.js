import React, { memo } from 'react';
import Logo from '../../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import AuthItems from '../AuthItems/AuthItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import PropTypes from 'prop-types';
import styles from './SIdeDrawer.module.css';

const SideDrawer = ({ handleVisibility, isVisible }) => {
	// CSS Modules styles:
	const { SideDrawer, Close, Open, StyledHorizontal } = styles;

	let attachedClasses = [SideDrawer, Close];
	if (isVisible) attachedClasses = [SideDrawer, Open];

	return (
		<>
			<Backdrop show={isVisible} removeBackdrop={handleVisibility} />
			<div className={attachedClasses.join(' ')}>
				<Logo size="8x" />
				<nav onClick={handleVisibility}>
					<AuthItems />
					<div className={StyledHorizontal} />
					<NavItems />
				</nav>
			</div>
		</>
	);
};

SideDrawer.propTypes = {
	handleVisibility: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequired,
};

export default memo(SideDrawer);
