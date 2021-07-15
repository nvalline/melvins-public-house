// dependencies
import React, { useContext, useEffect, useReducer } from 'react';
// utils
import reducer from './Reducer';
import { Api } from '../utils/Api';

const todayDate = new Date().getTime();

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
		eventType: 'football',
		otherType: '',
		homeTeam: '',
		awayTeam: ''
	},
	editEventState: {
		id: '',
		title: '',
		startDate: '',
		endDate: '',
		location: '',
		eventType: 'football',
		otherType: '',
		homeTeam: '',
		awayTeam: ''
	},
	specialState: {
		id: '',
		title: '',
		startDate: '',
		endDate: '',
		specialType: 'food',
		otherType: ''
	},
	// isHover: false,
	users: true,
	eventData: [],
	specialData: [],
	showEditEvents: false
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

	const handleEditEventModal = () => {
		dispatch({ type: 'TOGGLE_EDIT_EVENT_MODAL' });
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
			const allEvents = res.data;
			let currentEvents = [];

			for (let i = 0; i < allEvents.length; i++) {
				const eventEndDate = Date.parse(allEvents[i].endDate);

				if (eventEndDate > todayDate) {
					currentEvents.push(allEvents[i]);
				}
			}

			dispatch({ type: 'SET_EVENTS_DATA', payload: currentEvents });
		});
	};

	const fetchEventById = (id) => {
		Api.updateEvent(id).then((res) => {
			console.log('EVENT DATA ID:', res.data);
			const eventData = res.data;

			if (eventData.startDate.length > 16) {
				const diff = eventData.startDate.length - 16;
				eventData.startDate = eventData.startDate.substring(
					0,
					eventData.startDate.length - diff
				);
			}

			if (eventData.endDate.length > 16) {
				const diff = eventData.endDate.length - 16;
				eventData.endDate = eventData.endDate.substring(
					0,
					eventData.endDate.length - diff
				);
			}

			dispatch({ type: 'SET_EDIT_EVENT_STATE', payload: eventData });
		});
	};

	const fetchSpecialData = () => {
		dispatch({ type: 'LOADING_SPECIALS' });
		Api.getSpecials().then((res) => {
			const allSpecials = res.data;
			let currentSpecials = [];

			for (let i = 0; i < allSpecials.length; i++) {
				const specialEndDate = Date.parse(allSpecials[i].endDate);

				if (specialEndDate > todayDate) {
					currentSpecials.push(allSpecials[i]);
				}
			}

			dispatch({ type: 'SET_SPECIALS_DATA', payload: currentSpecials });
		});
	};

	useEffect(() => {
		fetchEventData();
		fetchSpecialData();
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
				handleEditEventModal,
				clearEventForm,
				handleSpecialState,
				clearSpecialForm,
				fetchEventData,
				fetchEventById,
				fetchSpecialData
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
