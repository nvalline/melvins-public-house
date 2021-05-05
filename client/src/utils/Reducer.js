const reducer = (state, action) => {
	if (action.type === 'TOGGLE_NAV_LINKS') {
		if (state.showLinks === true) {
			return { ...state, showLinks: false };
		} else {
			return { ...state, showLinks: true };
		}
	}

	if (action.type === 'TOGGLE_NAV_HOVER') {
		return { ...state, isHover: true };
	}

	if (action.type === 'NAV_PAGE_CHANGE') {
		return { ...state, showLinks: false, isHover: false };
	}

	throw new Error('no matching action type');
};

export default reducer;
