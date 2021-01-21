import React from 'react';
import logo from '../../src/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={logo} width="250" height="35"
                    className="d-inline-block align-top" alt="SpaceX FanClub" />
            </a>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link font-weight-bold">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/histories" className="nav-link font-weight-bold">History</Link>
                </li>
                <li className="nav-item">
                    <Link to="/rockets" className="nav-link font-weight-bold">Rockets</Link>
                </li>
            </ul>
        </nav>

    )
}
