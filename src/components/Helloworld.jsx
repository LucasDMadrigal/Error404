import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Helloworld.css';
const Helloworld = () => (
	<div className="container">
		<div className="helloWorld">
			<h1>Hello World</h1>
		</div>
		<div className="container__btn">
			<Link className="link" to="NotFound">
				<div className="btn btn_hello">To nowhere</div>
			</Link>
		</div>
	</div>
);
export default Helloworld;
