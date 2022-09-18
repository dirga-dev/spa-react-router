import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HomePage = () => {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		const getUsers = async () => {
			try {
				const { data } = await axios.get(`${API}users`);
				setUsers(data);
				console.log("data", data);
			} catch (e) {}
		};
		getUsers();
	}, []);

	return (
		<Container>
			<h1 className="m-5">SPA React Router</h1>
			{users?.map((user) => (
				<Card className="m-3">
					<Card.Header>{user.id}</Card.Header>
					<Card.Body>
						<Card.Text>Name : {user.name}</Card.Text>
						<Card.Text>Company : {user.company.name}</Card.Text>
						<Button variant="primary" onClick={() => navigate(`${user.id}`)}>
							See Detail
						</Button>
					</Card.Body>
				</Card>
			))}
		</Container>
	);
};

export default HomePage;
