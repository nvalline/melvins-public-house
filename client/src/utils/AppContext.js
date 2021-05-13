// dependencies
import React, { useContext, useReducer } from 'react';
// utils
import reducer from './Reducer';

const AppContext = React.createContext();

const initialState = {
	isLoading: false,
	showLinks: false,
	alert: { show: false, msg: '', type: '' },
	eventState: {
		id: '',
		title: '',
		startDate: '',
		endDate: '',
		location: '',
		eventType: 'football',
		otherType: '',
		homeTeam: '',
		awayTeam: ''
	}
	// isHover: false,
	// events: true,
	// specials: true
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleNavClick = () => {
		dispatch({ type: 'TOGGLE_NAV_LINKS' });
	};

	const handleHover = () => {
		dispatch({ type: 'TOGGLE_NAV_HOVER' });
	};

	const handlePageChange = () => {
		dispatch({ type: 'NAV_PAGE_CHANGE' });
	};

	const showAlert = (show = false, msg = '', type = '') => {
		dispatch({ type: 'DISPLAY_ALERT', payload: { show, msg, type } });
	};

	const handleEventState = (e) => {
		dispatch({
			type: 'HANDLE_EVENT_FORM',
			field: e.target.name,
			payload: e.target.value
		});
	};

	const clearEventForm = () => {
		dispatch({ type: 'CLEAR_EVENT_FORM' });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				handleNavClick,
				handleHover,
				handlePageChange,
				showAlert,
				handleEventState,
				clearEventForm
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
