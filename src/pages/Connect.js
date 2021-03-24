import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';


function Connect() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card card-body card-padding">
                        <h2 className="card-title h2card">Connect With Me</h2>
                        <br />
                        <hr className="connect-rule" />
                        <div className="row mx-auto">
                            <a href="mailto:ggfalloon@gmail.com"><span>
                                <FontAwesomeIcon icon={faEnvelope} className="link-connect grey-tooltip" data-toggle="tooltip" data-placement="top"
                                    title="Email" />
                            </span></a>
                            <a href="https://github.com/ggfalloon" target="_blank" rel="noreferrer"><span>
                                <FontAwesomeIcon icon={faGithub} className="link-connect grey-tooltip"
                                    data-toggle="tooltip" data-placement="top" title="Github" /></span>
                            </a>

                            <a href="https://www.linkedin.com/in/gabriele-falloon/" target="_blank" rel="noreferrer"><span>
                                <FontAwesomeIcon icon={faLinkedin}
                                    className="link-connect grey-tooltip" data-toggle="tooltip" data-placement="top"
                                    title="LinkedIn" /></span>
                            </a>

                            <a href="./G.FalloonResume.pdf"><span>
                                <FontAwesomeIcon icon={faFile} className="link-connect grey-tooltip" data-toggle="tooltip"
                                    data-placement="top" title="Resume" /></span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Connect;