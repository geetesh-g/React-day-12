import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(true);
	const toggleAuth = () => {
		setIsAuth(!isAuth);
	};
	const logout = () => {
		setIsAuth(false);
	};
	const login = () => {
		setIsAuth(true);
	};
	// if (isAuth) {
	// 	return <Navigate to={"/users"} />;
	// }

	const value = { isAuth, login, logout, toggleAuth };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
