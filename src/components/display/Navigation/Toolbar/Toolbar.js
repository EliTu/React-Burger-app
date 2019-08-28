import React from 'react';
import Logo from '../../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import AuthItems from '../AuthItems/AuthItems';
import Button from '../../../UI/Button/Button';
import styles from './Toolbar.module.css';
import PropTypes from 'prop-types';

const Toolbar = ({ clicked }) => {
	// CSS Modules classes:
	const { Toolbar, ItemsWrapper, logoWrapper, DesktopOnly } = styles;

	return (
		<header className={Toolbar}>
			<div className={ItemsWrapper}>
				<div className={logoWrapper}>
					<Logo size="3x" />
					<nav className={DesktopOnly}>
						<NavItems />
					</nav>
				</div>
				<nav className={DesktopOnly}>
					<AuthItems />
				</nav>
				<Button toolBarButton="MenuToggle" handleClick={clicked}>
					三
				</Button>
			</div>
		</header>
	);
};

Toolbar.propTypes = {
	clicked: PropTypes.func.isRequired,
};

export default Toolbar;
