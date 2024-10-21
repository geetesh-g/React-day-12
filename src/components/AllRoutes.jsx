import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contacts";
import Users from "../pages/User";
import UserDetail from "./UserDetail";
import NotFound from "../pages/pageNotFound";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route
					path="/users"
					element={
						<PrivateRoute>
							<Users />
						</PrivateRoute>
					}
				/>
				<Route
					path="/users/:user_id"
					element={
						<PrivateRoute>
							<UserDetail />
						</PrivateRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default AllRoutes;
