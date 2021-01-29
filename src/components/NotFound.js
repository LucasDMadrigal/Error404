import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NotFound.css'
const Error404 = () =>
(
    <div className="container notFound">
        <h1>Error 404</h1>
        <Link className="link notFound" to="/">
            <div className="btn btn_notFound notFound">Home</div>
        </Link>
    </div>
)


export default Error404