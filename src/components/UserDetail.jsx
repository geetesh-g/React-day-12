import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import "../App.css";

const baseURL = "https://reqres.in/api/users";
const fetchData = (id) => {
	return fetch(`${baseURL}/${id}`).then((res) => {
		if (res.ok) {
			//console.log(res.ok);
			console.log(res.ok);
			return res.json();
		} else {
			return null;
		}
	});
};

const UserDetail = () => {
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(false);
	const [userData, setUserData] = useState({});
	const [navigate, setNavigate] = useState(false);
	const param = useParams();

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			const data = await fetchData(param.user_id);
			console.log(data);
			if (data === null) {
				setLoading(false);
				setNavigate(true);
			} else {
				setLoading(false);
				setUserData(data);
			}
		} catch (error) {
			setLoading(false);
			setErr(true);
		}
	};

	return (
		<div className="user-detail">
			{" "}
			{loading ? (
				<h1>Loading...</h1>
			) : err ? (
				<h1>Something went wrong</h1>
			) : navigate ? (
				<Navigate to={"/pageNotFound"} />
			) : (
				<div>
					<img
						src={userData?.data?.avatar}
						alt={`${userData?.data?.first_name}'s Image`}
					/>
					<h5>
						{userData?.data?.first_name} {userData?.data?.last_name}
					</h5>
					<hr />
					<p>Support : {userData?.support?.url}</p>
					<p>{userData?.support?.text}</p>
				</div>
			)}
		</div>
	);
};

export default UserDetail;
