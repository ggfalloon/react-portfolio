import React from "react";
import Project from "./components/Project";

function Portfolio(props) {
    return (
        <div className="card-title">
            <h2 className="h2card">Portfolio</h2>
            <hr className="hr-card" />
            <Project />
        </div>
    )
}

export default Portfolio;