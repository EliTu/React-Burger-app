import React from 'react';
import styles from './OrdersPaginationPanel.module.css';
import Icon from '../../../UI/Icon/Icon';
import {
	faAngleRight,
	faAngleLeft,
	faAngleDoubleRight,
	faAngleDoubleLeft,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const OrdersPaginationPanel = ({
	pages,
	pageNumberClick,
	nextPageClick,
	previousPageClick,
	firstPageClick,
	lastPageClick,
	currentPage,
}) => {
	// CSS Modules styles:
	const { OrderPaginationPanel, pageContainer, activePageStyle } = styles;

	return (
		<div className={OrderPaginationPanel}>
			<button onClick={firstPageClick}>
				<Icon iconType={faAngleDoubleLeft} size="2x" />
			</button>
			<button onClick={previousPageClick}>
				<Icon iconType={faAngleLeft} size="2x" />
			</button>
			<div className={pageContainer}>
				{pages.map(page => (
					<button
						className={
							page === currentPage ? activePageStyle : null
						}
						key={page}
						id={page}
						onClick={event => pageNumberClick(event)}
					>
						{page}
					</button>
				))}
			</div>
			<button onClick={nextPageClick}>
				<Icon iconType={faAngleRight} size="2x" />
			</button>
			<button onClick={lastPageClick}>
				<Icon iconType={faAngleDoubleRight} size="2x" />
			</button>
		</div>
	);
};

OrdersPaginationPanel.propTypes = {
	pages: PropTypes.array,
	currentPage: PropTypes.number,
	pagesNumberClick: PropTypes.func,
	nextPageClick: PropTypes.func,
	previousPageClick: PropTypes.func,
	firstPageClick: PropTypes.func,
	lastPageClick: PropTypes.func,
};

export default OrdersPaginationPanel;
