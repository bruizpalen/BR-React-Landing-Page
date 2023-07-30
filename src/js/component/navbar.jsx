import React from 'react';
import PropTypes from "prop-types";

// const navlinkItems = [
// 	<li className="nav-item">
// 		<a className="nav-link" href="#">
// 			Link to google.com
// 		</a>
// 	</li>,
// 	<li className="nav-item">
// 		<a className="nav-link" href="#">
// 			Link to facebook.com
// 		</a>
// 	</li>,
// 	<li className="nav-item">
// 		<a className="nav-link" href="#">
// 			Link to amazon.com
// 		</a>
// 	</li>,
// ];

// const content = <ul className="navbar navbar-expand-lg bg-body-tertiary">{navlinkItems}</ul>;



const Navbar = (props) =>{
    return (
    // <div className='d-flex justify-content-center'>
    <nav className="navbar navbar-expand-lg bg-body-secondary " data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.items[0]}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">{props.items[1]}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">{props.items[2]}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">{props.items[3]}</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    // </div>
    );
}

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;

