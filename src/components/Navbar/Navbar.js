import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar(props) {
    return (
        <BrowserRouter></BrowserRouter>
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark">
        <div className="container">
            <a className="navbar-brand left-nav" href="#page_top">Gabriele Falloon</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#about_me">About<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#connect">Connect</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default Navbar;