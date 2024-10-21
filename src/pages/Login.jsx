import { useContext } from "react";
import "../App.css";
import { AuthContext } from "../context/AuthContxt";
import { Navigate } from "react-router-dom";

const Login = () => {
	const { isAuth, login } = useContext(AuthContext);
	if (isAuth) {
		return <Navigate to={"/users"} />;
	}

	return (
		<div className="common-pages">
			<h1>Login</h1>
			<button className="go-to-home" onClick={login}>
				Click here to Login
			</button>
		</div>
	);
};

export default Login;
