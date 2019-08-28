import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

const Modal = ({ children, show, closeModalHandler }) => {
	// CSS Modules styles:
	const { Modal } = styles;

	// Set conditional inline styles:
	const translateModal = show ? 'translateX(0)' : 'translateX(100vh)';
	const adjustOpacity = show ? '1' : '0';

	return (
		<>
			<Backdrop show={show} removeBackdrop={closeModalHandler} />
			<div
				className={Modal}
				data-test="wrapper-div"
				style={{
					transform: translateModal,
					opacity: adjustOpacity,
				}}
			>
				{children}
			</div>
		</>
	);
};

Modal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	show: PropTypes.bool,
	closeModalHandler: PropTypes.func,
};

export default React.memo(Modal);
