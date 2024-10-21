import { Link } from "react-router-dom";
import "../App.css";

const CardItem = (props) => {
	const { avatar, first_name, last_name, id } = props;

	return (
		<div className="card">
			<img className="img" src={avatar} alt={first_name} />
			<h5 className="name">
				{first_name} {last_name}
			</h5>
			<Link to={`/users/${id}`} className="more-info">
				More Info...
			</Link>
		</div>
	);
};
export default CardItem;
