import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";


function Connect() {
    return (
        <div className="container">
            <div className="row mt-5 pt-3">
                <div className="col-md-8 mx-auto">
                    <div className="card card-body card-padding">
                        <h2 className="card-title h2card">Connect With Me</h2>
                        <br />
                        <hr className="connect-rule" />
                        <br />
                        <div className="row mx-auto">
                            <a href="mailto:ggfalloon@gmail.com"><span>
                                <FontAwesomeIcon icon={faEnvelope} className="link-connect" data-tip data-for="emailTip" />
                                <ReactTooltip id="emailTip" place="top" effect="solid">Email</ReactTooltip>

                            </span></a>
                            <a href="https://github.com/ggfalloon" target="_blank" rel="noreferrer"><span>
                                <FontAwesomeIcon icon={faGithub} className="link-connect" data-tip data-for="gitTip" />
                                <ReactTooltip id="gitTip" place="top" effect="solid">Github</ReactTooltip>
                            </span></a>

                            <a href="https://www.linkedin.com/in/gabriele-falloon/" target="_blank" rel="noreferrer"><span>
                                <FontAwesomeIcon icon={faLinkedin} className="link-connect" data-tip data-for="linkTip" />
                                <ReactTooltip id="linkTip" place="top" effect="solid">LinkedIn</ReactTooltip>
                            </span></a>

                            <a href="./G.FalloonResume.pdf"><span>
                                <FontAwesomeIcon icon={faFile} className="link-connect" data-tip data-for="resTip" />
                                <ReactTooltip id="resTip" place="top" effect="solid">Resume</ReactTooltip>
                            </span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Connect;