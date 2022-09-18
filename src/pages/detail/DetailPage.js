import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../config";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const DetailPage = () => {
	const [user, setUsers] = useState();
	const params = useParams();
	useEffect(() => {
		const getUsers = async () => {
			try {
				const { data } = await axios.get(`${API}users/${params?.id}`);
				setUsers(data);
			} catch (e) {}
		};
		getUsers();
	});

	return (
		<Container>
			<h2 className="m-5">Detail Page</h2>
			<Card>
				<Card.Header>Detail</Card.Header>
				<Card.Body className="text-start">
					<Card.Text>Name : {user?.name}</Card.Text>
					<Card.Text>Username : {user?.username}</Card.Text>
					<Card.Text>Email : {user?.email}</Card.Text>
					<Card.Text>Company : {user?.company.name}</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default DetailPage;
