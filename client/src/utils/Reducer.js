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
				eventType: '',
				otherType: '',
				homeTeam: '',
				awayTeam: ''
			}
		};
	}

	if (action.type === 'HANDLE_SPECIAL_FORM') {
		return {
			...state,
			specialState: { ...state.specialState, [action.field]: action.payload }
		};
	}

	if (action.type === 'CLEAR_SPECIAL_FORM') {
		return {
			...state,
			specialState: {
				title: '',
				startDate: '',
				endDate: '',
				specialType: '',
				otherType: ''
			}
		};
	}

	if (action.type === 'LOADING_EVENTS') {
		return { ...state, isLoadingEvents: true };
	}

	if (action.type === 'SET_EVENTS_DATA') {
		return { ...state, eventData: action.payload, isLoadingEvents: false };
	}

	if (action.type === 'LOADING_SPECIALS') {
		return { ...state, isLoadingSpecials: true };
	}

	if (action.type === 'SET_SPECIALS_DATA') {
		return { ...state, specialData: action.payload, isLoadingSpecials: false };
	}

	if (action.type === 'TOGGLE_EDIT_EVENT_MODAL') {
		if (state.showEditEvents === true) {
			return { ...state, showEditEvents: false };
		} else {
			return { ...state, showEditEvents: true };
		}
	}

	throw new Error('no matching action type');
};

export default reducer;
