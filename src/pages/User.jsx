import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import "../App.css";

const baseURL = "https://reqres.in/api/users";
const fetchData = (page) => {
	return fetch(`${baseURL}?page=${page}`).then((res) => res?.json());
};

const currentPage = (val) => {
	if (val <= 0) {
		return 1;
	}
	if (typeof val !== "number" && (Number(val) <= 1 || Number(val) === NaN)) {
		return 1;
	}

	return Number(val);
};

const Users = () => {
	const [users, setUsers] = useState(null);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(false);
	const [searchParam, setSearchParam] = useSearchParams();
	const pageNumber = currentPage(searchParam.get("page"));
	const [page, setPage] = useState(pageNumber);
	const navigate = useNavigate();

	useEffect(() => {
		getData(page);
		setSearchParam({ page: page });
	}, [page]);

	const getData = async (page) => {
		setLoading(true);
		try {
			const data = await fetchData(page);
			// console.log(data?.data); // ?. is called optional chaining
			setLoading(false);
			setUsers(data?.data);
		} catch (error) {
			setLoading(false);
			setErr(true);
		}
	};
	const handleClick = (val) => {
		setPage(Number(page) + val);
	};

	return (
		<>
			<div className="user-list">
				{loading ? (
					<h1>Loading...</h1>
				) : err ? (
					<h1>Something went wrong plaese try again</h1>
				) : users?.length <= 0 ? (
					<h1>List is Empty</h1>
				) : (
					users?.map((user) => {
						return <CardItem key={user.id} {...user} />;
					})
				)}
			</div>
			<button className="go-to-home" onClick={() => navigate("/")}>
				Go To Home
			</button>
			<div className="pagination">
				<button disabled={Number(page) === 1} onClick={() => handleClick(-1)}>
					&lt;&lt; PREV
				</button>
				<button>{page}</button>
				<button onClick={() => handleClick(1)}>NEXT &gt;&gt;</button>
			</div>
		</>
	);
};
export default Users;
