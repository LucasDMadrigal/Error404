import React from 'react';
import { Link } from 'react-router-dom';

const Helloworld = () => (
	<div>
		<h1>Hello world</h1>
		<Link to="NotFound">To nowhere</Link>
	</div>
);
export default Helloworld;
