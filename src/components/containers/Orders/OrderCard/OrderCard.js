import React, { useState } from 'react';
import OrderData from './OrderData/OrderData';
import Icon from '../../../UI/Icon/Icon';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styles from './OrderCard.module.css';
import PropTypes from 'prop-types';

const OrderCard = ({
	ingredients,
	price,
	orderId,
	contact,
	delivery,
	date,
}) => {
	// Local state hooks:
	const [isCardOpen, setIsCardOpen] = useState(false);

	// CSS Modules styles:
	const { OrderCard, dateStyle, toggleButton } = styles;

	let mappedContactInfo = [];
	for (let key in contact) {
		mappedContactInfo.push({ [key]: contact[key] });
	}

	const parsedOrderId = orderId.replace(/[-!@#$ %^&* _(),.?":{}|<>]/g, '');

	return (
		<div className={OrderCard}>
			<p>Order id: {parsedOrderId}</p>
			<p className={dateStyle}>{date}</p>
			<button
				className={toggleButton}
				onClick={() => setIsCardOpen(!isCardOpen)}
			>
				<Icon
					iconType={!isCardOpen ? faCaretDown : faCaretUp}
					size="2x"
				/>
			</button>
			{isCardOpen && (
				<OrderData
					ingredients={ingredients}
					contactData={mappedContactInfo}
					delivery={delivery}
					price={price}
				/>
			)}
		</div>
	);
};

OrderCard.propTypes = {
	ingredients: PropTypes.array,
	price: PropTypes.string,
	orderId: PropTypes.string,
	contact: PropTypes.object,
	delivery: PropTypes.string,
	date: PropTypes.string,
};

export default OrderCard;
