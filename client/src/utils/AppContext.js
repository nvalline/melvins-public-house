// dependencies
import React, { useContext, useReducer } from 'react';
// utils
import reducer from './Reducer';

const AppContext = React.createContext();

const initialState = {
	isLoading: false,
	showLinks: false,
	events: true,
	specials: true
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleNavClick = () => {
		dispatch({ type: 'TOGGLE_NAV_LINKS' });
	};

	return (
		<AppContext.Provider value={{ ...state, handleNavClick }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
