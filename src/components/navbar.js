import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/#"></Link>
            <img src="../logo.png" width="50" height="50" className="d-inline-block align-top" alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/veic">
                            Vehicles
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/planets">
                            Planets
                        </Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/people">
                            People
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;