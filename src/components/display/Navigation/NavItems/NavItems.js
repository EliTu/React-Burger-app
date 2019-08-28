import React from 'react';
import { connect } from 'react-redux';
import Item from '../Item/Item';
import Icon from '../../../UI/Icon/Icon';
import styles from './NavItems.module.css';
import {
	faStream,
	faList,
	faShoppingCart,
	faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export const NavItems = ({ isLoggedIn }) => {
	// CSS Module styles:
	const { NavItems } = styles;

	return (
		<div className={NavItems}>
			<Item link="/">
				{' '}
				<Icon iconType={faStream} />
				Burger Builder
			</Item>
			{isLoggedIn && (
				<Item link="/checkout">
					<Icon iconType={faShoppingCart} />
					Checkout
				</Item>
			)}
			<Item link="/orders">
				{' '}
				<Icon iconType={faList}> </Icon>Orders
			</Item>
			<Item link="/about">
				{' '}
				<Icon iconType={faBookmark} />
				About
			</Item>
		</div>
	);
};

NavItems.propTypes = {
	isLoggedIn: PropTypes.bool,
};

// Redux Setup:
const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
	};
};

export default connect(mapStateToProps)(NavItems);
