/** @format */

import { createContext, useContext, useEffect, useState } from 'react';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState('');

	function signUp(email, password) {
		setUser();
	}

	function logIn(email, password) {
		setUser();
	}

	useEffect(() => {
		// const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
		// 	setUser(currentUser);
		// });
		// return () => {
		// 	unsubscribe();
		// };
	}, []);

	return (
		<userAuthContext.Provider value={{ user, signUp, logIn }}>
			{children}
		</userAuthContext.Provider>
	);
}

export function useUserAuth() {
	return useContext(userAuthContext);
}
