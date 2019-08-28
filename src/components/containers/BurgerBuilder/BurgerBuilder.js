import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosInstance from '../../../axios/axios-orders';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Spinner from '../../UI/Spinner/Spinner';
import requestMessageComponent from '../../hoc/requestMessageComponent/requestMessageComponent';
import * as actions from './store/actions';
import PropTypes from 'prop-types';

export const BurgerBuilder = ({
	ingredients,
	totalPrice,
	handleAddIngredientClick,
	handleRemoveIngredientClick,
	isLoadingRequest,
	isErrorOnMount,
	initIngredients,
	history,
}) => {
	// Local state hooks:
	const [isPurchasable, setIsPurchasable] = useState(false);
	const [isInOrderSummary, setIsInOrderSummary] = useState(false);

	// First get the Ingredient list and quantity from the database on mount:
	useEffect(() => {
		initIngredients();
	}, [initIngredients]);

	// Loop over the ingredients and check if the burger is purchasable:
	useEffect(() => {
		if (ingredients !== null) {
			const checkIfPurchasable = () => {
				const ingredientsCopy = [...ingredients];
				const checkBool = ingredientsCopy.some(
					ingredient => ingredient.quantity > 0
				);
				setIsPurchasable(checkBool);
			};
			checkIfPurchasable();
		}
	}, [ingredients]);

	const handleOrderButtonClick = () => setIsInOrderSummary(true);

	const handleModalOuterBorderClick = () => setIsInOrderSummary(false);

	const handleCheckoutButtonClick = () => history.push('/checkout');

	// Check if an ingredient quantity is currently 0
	let isQuantityZero;
	if (ingredients) {
		isQuantityZero = [...ingredients].map(el => el.quantity <= 0);
	}

	// If getting database request error, display message:
	const errorMessage = (
		<p>Oh no! We've encountered an error, ingredients can't be loaded</p>
	);

	return (
		<>
			<Modal
				show={isInOrderSummary}
				closeModalHandler={handleModalOuterBorderClick}
			>
				{isLoadingRequest ? (
					<Spinner />
				) : (
					<OrderSummary
						checkoutHandler={handleCheckoutButtonClick}
						closeModalHandler={handleModalOuterBorderClick}
						ingredients={ingredients}
						price={totalPrice}
					/>
				)}
			</Modal>
			{isErrorOnMount ? errorMessage : null}
			{!ingredients ? (
				<Spinner />
			) : (
				<>
					<Burger ingredients={ingredients} />
					<BuildControls
						ingredients={ingredients}
						addIngredient={handleAddIngredientClick}
						removeIngredient={handleRemoveIngredientClick}
						disableRemove={isQuantityZero}
						price={totalPrice}
						purchasable={isPurchasable}
						setPurchaseMode={handleOrderButtonClick}
					/>
				</>
			)}
		</>
	);
};

BurgerBuilder.propTypes = {
	ingredients: PropTypes.array,
	totalPrice: PropTypes.number,
	isLoadingRequest: PropTypes.bool,
	isErrorOnMount: PropTypes.bool,
	handleAddIngredientClick: PropTypes.func,
	handleRemoveIngredientClick: PropTypes.func,
	initIngredients: PropTypes.func,
};

// Redux setup:
const mapStateToProps = state => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		totalPrice: state.burgerBuilder.totalPrice,
		isLoadingRequest: state.burgerBuilder.isLoadingRequest,
		isErrorOnMount: state.burgerBuilder.isErrorOnMount,
	};
};

const { addIngredient, removeIngredient, fetchIngredients } = actions;

const mapDispatchToProps = dispatch => {
	return {
		handleAddIngredientClick: (ingName, ingredients) =>
			dispatch(addIngredient(ingName, ingredients)),
		handleRemoveIngredientClick: (ingName, ingredients) =>
			dispatch(removeIngredient(ingName, ingredients)),
		initIngredients: () => dispatch(fetchIngredients()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(requestMessageComponent(BurgerBuilder, axiosInstance));
