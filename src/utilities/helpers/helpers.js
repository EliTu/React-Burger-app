// Check if ingredients were selected in the BurgerBuilder:
export const areIngredientsSelected = ingredients =>
	ingredients
		? ingredients.some(ingredient => ingredient.quantity > 0)
		: null;
