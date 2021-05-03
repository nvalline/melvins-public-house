const reducer = (state, action) => {
	if (action.type === 'TOGGLE_NAV_LINKS') {
		if (state.showLinks === true) {
			return { ...state, showLinks: false };
		} else {
			return { ...state, showLinks: true };
		}
	}

	throw new Error('no matching action type');
};

export default reducer;
