import React from 'react';
import styles from './OrderData.module.css';
import PropTypes from 'prop-types';

const OrderData = ({ ingredients, contactData, delivery, price }) => {
	// CSS modules styles:
	const { Price, DataHeader, Category } = styles;
	return (
		<>
			<div className={DataHeader}>
				Ingredients:
				<ul>
					{ingredients.map(
						el =>
							el.quantity > 0 && (
								<li key={el.ingredient}>
									<span className={Category}>
										{el.ingredient}
									</span>
									x {el.quantity}
								</li>
							)
					)}
				</ul>
			</div>

			<div className={DataHeader}>
				Contact information:
				<ul>
					{contactData.map(el => {
						const entries = Object.entries(el);
						const key = entries[0][0];
						const value = entries[0][1];
						return (
							<li key={key}>
								<span className={Category}>{key}:</span>
								{value !== '' ? value : 'n/a'}
							</li>
						);
					})}
				</ul>
			</div>
			<p className={DataHeader}>
				<span className={Category}>Delivery method: </span>
				{delivery}
			</p>
			<p className={DataHeader}>
				Total price:<span className={Price}>${price}</span>
			</p>
		</>
	);
};

OrderData.propTypes = {
	ingredients: PropTypes.array,
	contactData: PropTypes.array,
	delivery: PropTypes.string,
	price: PropTypes.string,
};

OrderData.defaultProps = {
	ingredients: [{ ingredient: 'N/A', quantity: 'N/A' }],
	price: 'N/A',
	orderId: 'N/A',
};

export default OrderData;
