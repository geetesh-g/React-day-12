import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContxt";

const Navbar = () => {
	const { isAuth, toggleAuth } = useContext(AuthContext);
	const linsk = [
		{ path: "/", title: "Home" },
		{ path: "/about", title: "About" },
		{ path: "/contact", title: "Contact" },
		{ path: "/users", title: "Users" },
	];

	const activeStyle = {
		padding: "6px 8px",
		textDecoration: "none",
		color: "#0066ff",
		backgroundColor: "aliceblue",
		borderRadius: "8px",
		fontSize: "14px",
		fontWeight: "600",
		border: "none",
		cursor: "pointer",
	};

	const defaultStyle = {
		padding: "6px 8px",
		backgroundColor: "#0066ff",
		borderRadius: "8px",
		color: "aliceblue",
		fontSize: "14px",
		fontWeight: "600",
		border: "none",
		cursor: "pointer",
	};

	return (
		<div className="navbar">
			{linsk.map((link) => {
				return (
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
						key={link.path}
						to={link.path}
					>
						{link.title}
					</NavLink>
				);
			})}
			<button
				style={{
					padding: "6px 8px",
					backgroundColor: "#0066ff",
					borderRadius: "8px",
					color: "aliceblue",
					fontSize: "14px",
					fontWeight: "600",
					border: "none",
					cursor: "pointer",
				}}
				onClick={toggleAuth}
			>
				{isAuth ? "Logout" : "Login"}
			</button>
		</div>
	);
};

export default Navbar;
