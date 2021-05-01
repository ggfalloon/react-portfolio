import React from "react";
import Projects from "../components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


function Portfolio() {
    const [portfolios] = useState(Projects);

    return (
        <div id="portfolio">
            <div className="card-title">
                <h2 className="h2card">Portfolio</h2>
                <hr className="connect-rule" />
                {
                    portfolios.map((item) => {
                        return <div className="portfolio col-md-6 mt-3 mr-3 mx-auto text-center" key={item.id}>

                            <h3>{item.title} - <a href={item.href} target="_blank" rel="noreferrer">
                                <span><FontAwesomeIcon icon={faGithub} className="iconPort" /></span>
                            </a></h3>
                            <div className="overlayHolder">
                                <a href={item.githref} target="_blank" rel="noreferrer">
                                    <img src={item.image}
                                        alt="app page screenshot"
                                        className="img-thumbnail img-thumb shadow-sm p-2 mb-5 bg-white rounded" />
                                    <div className="img-overlay">
                                        <p>{item.description}</p>
                                        <p>{item.languages}</p>
                                    </div>
                                </a></div>
                            <br />
                            <br />
                        </div>

                    })

                }

            </div>
        </div>
    )
}

export default Portfolio;