// dependencies
import React, { useContext, useReducer } from 'react';
// utils
import reducer from './Reducer';

const AppContext = React.createContext();

const initialState = {
	isLoading: false,
	showLinks: false,
	isHover: false,
	events: true,
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

	return (
		<AppContext.Provider
			value={{ ...state, handleNavClick, handleHover, handlePageChange }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
