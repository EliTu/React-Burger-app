import { areIngredientsSelected } from './helpers';

describe('areIngredientsSelected', () => {
	let ingredients = [
		{ ingredient: 'meat', quantity: 1 },
		{ ingredient: 'salad', quantity: 0 },
		{ ingredient: 'cheese', quantity: 0 },
	];
	let testFn = areIngredientsSelected(ingredients);
	it('should return true if some ingredients have a quantity greater than 0', () => {
		expect(testFn).toBe(true);
		expect(testFn).not.toBeFalsy();
	});

	it('should return false if no ingredient have a quantity greater than 0', () => {
		ingredients = [
			{ ingredient: 'meat', quantity: 0 },
			{ ingredient: 'salad', quantity: 0 },
			{ ingredient: 'cheese', quantity: 0 },
		];
		testFn = areIngredientsSelected(ingredients);

		expect(testFn).toBe(false);
		expect(testFn).not.toBeTruthy();
	});
});
