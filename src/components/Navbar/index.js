import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (

        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark">
                <div className="container">
                    <Link className="navbar-brand left-nav" to="/">Gabriele Falloon</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/about"
                                    className={
                                        window.location.pathname === "/about"
                                            ? "nav-link active"
                                            : "nav-link"} >About<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio"
                                    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/connect"
                                    className={window.location.pathname === "/connect" ? "nav-link active" : "nav-link"} >Connect</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;