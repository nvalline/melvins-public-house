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

	if (action.type === 'DISPLAY_ALERT') {
		return { ...state, alert: action.payload };
	}

	if (action.type === 'HANDLE_EVENT_FORM') {
		return {
			...state,
			eventState: { ...state.eventState, [action.field]: action.payload }
		};
	}

	if (action.type === 'CLEAR_EVENT_FORM') {
		return {
			...state,
			eventState: {
				title: '',
				startDate: '',
				endDate: '',
				location: '',
				eventType: 'football',
				otherType: '',
				homeTeam: '',
				awayTeam: ''
			}
		};
	}

	throw new Error('no matching action type');
};

export default reducer;
