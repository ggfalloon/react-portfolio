import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-expand-md navbar-dark">

                <a href="/react-portfolio" className="navbar-brand left-nav" >Gabriele Falloon</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#about"
                                className={
                                    window.location.pathname === "#about"
                                        ? "nav-link active"
                                        : "nav-link"} >About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio"
                                className={window.location.pathname === "#portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#connect"
                                className={window.location.pathname === "#connect" ? "nav-link active" : "nav-link"}>Connect</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;