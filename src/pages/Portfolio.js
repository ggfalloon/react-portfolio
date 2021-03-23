import React from "react";
import projects from "../components/Projects";
import { useState } from "react";


function Portfolio() {
    const [portfolios] = useState(projects);

    return (
        <div className="card-title">
            <h2 className="h2card">Portfolio</h2>
            <hr className="hr-card" />
            {
                portfolios.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>{item.title} - <a href={item.href} target="_blank" rel="noreferrer">
                                    <span><i className="fab fa-github-square iconPort"></i></span>
                                </a></h3>
                                <div className="overlayHolder">
                                    <a href={item.githref} target="_blank" rel="noreferrer">
                                        <img src={item.image}
                                            alt="app page screenshot"
                                            className="img-thumbnail img-thumb" />
                                        <div className="img-overlay">
                                            <p>{item.description}</p>
                                            <p>{item.languages}</p>
                                        </div>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Portfolio;