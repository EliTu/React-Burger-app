import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import styles from './Burger.module.css';
import PropTypes from 'prop-types';

const Burger = props => {
	// props:
	const { ingredients } = props;

	// CSS Modules styles:
	const { Burger } = styles;

	let transformedIngredientsArr = [];
	transformedIngredientsArr = ingredients.map(ingredient => {
		let changedArr = [];
		for (let i = 0; i < ingredient.quantity; i++) {
			changedArr.push(
				<Ingredient
					key={`${ingredient.ingredient + Math.random() * 20}`}
					type={ingredient.ingredient}
				/>
			);
		}
		return changedArr;
	});

	const areNoIngredients = transformedIngredientsArr.every(
		el => el.length === 0
	);

	return (
		<div className={Burger}>
			<Ingredient type="bread-top" />
			{areNoIngredients ? (
				<p>Please start adding ingredients!</p>
			) : (
				transformedIngredientsArr
			)}
			<Ingredient type="bread-bottom" />
		</div>
	);
};

Burger.propTypes = {
	ingredients: PropTypes.array.isRequired,
};

export default Burger;
