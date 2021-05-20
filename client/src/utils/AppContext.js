// dependencies
import React, { useContext, useEffect, useReducer } from 'react';
// utils
import reducer from './Reducer';
import { Api } from '../utils/Api';

const AppContext = React.createContext();

const initialState = {
	isLoadingUsers: false,
	isLoadingEvents: false,
	isLoadingSpecials: false,
	showLinks: false,
	alert: { show: false, msg: '', type: '' },
	usersState: {
		id: '',
		fullName: '',
		email: '',
		role: ''
	},
	eventState: {
		id: '',
		title: '',
		startDate: '',
		endDate: '',
		location: '',
		eventType: '',
		otherType: '',
		homeTeam: '',
		awayTeam: ''
	},
	specialState: {
		id: '',
		title: '',
		startDate: '',
		endDate: '',
		specialType: '',
		otherType: ''
	},
	// isHover: false,
	users: true,
	eventData: [],
	specials: true
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

	const handleSpecialState = (e) => {
		dispatch({
			type: 'HANDLE_SPECIAL_FORM',
			field: e.target.name,
			payload: e.target.value
		});
	};

	const clearEventForm = () => {
		dispatch({ type: 'CLEAR_EVENT_FORM' });
	};

	const clearSpecialForm = () => {
		dispatch({ type: 'CLEAR_SPECIAL_FORM' });
	};

	const fetchEventData = () => {
		dispatch({ type: 'LOADING_EVENTS' });
		Api.getEvents().then((res) => {
			console.log(res.data);
			dispatch({ type: 'SET_EVENTS_DATA', payload: res.data });
		});
	};

	useEffect(() => {
		fetchEventData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				...state,
				handleNavClick,
				handleHover,
				handlePageChange,
				showAlert,
				handleEventState,
				clearEventForm,
				handleSpecialState,
				clearSpecialForm
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
