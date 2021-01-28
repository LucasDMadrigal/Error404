import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Helloworld.css';
const Helloworld = () => (
	<div className="container">
		<h1>Hello World</h1>
		<Link className="link" to="NotFound">
			<div className="btn">To nowhere</div>
		</Link>
	</div>
);
export default Helloworld;
