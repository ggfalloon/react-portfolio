import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from "react-tooltip";


function Connect() {
    return (
        <div id="connect">
            <div className="row mt-5 pt-3">
                <div className="col-md-6 mx-auto">
                    <div className="card card-body">
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

                            <a href="https://drive.google.com/file/d/163ue6RJe2QV_gYDvBhhi7FPbjnJPPxbj/view" target="_blank" rel="noopener noreferrer"><span>
                                <FontAwesomeIcon icon={faFile} className="link-connect" data-tip data-for="resTip" />
                                <ReactTooltip id="resTip" place="top" effect="solid">Resume</ReactTooltip>
                            </span>
                            </a>

                        </div>
                        <br />
                    </div>
                </div>

            </div>
            <div className="copyright">
                <h5 className="text-center">&copy; Created by Gabriele Falloon 2021</h5>
            </div>
        </div>
    )
}

export default Connect;