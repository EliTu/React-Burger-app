// Used to find a specific DOM element that is specified with the 'data-test' attribute to better traverse while testing:
export const findByTestAttr = (component, attr) => {
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
};
