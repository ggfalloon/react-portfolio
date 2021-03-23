import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile, } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer className="footer fixed-bottom mt-auto py-2 " id="footer">
            <div className="container">

                <a href="mailto:ggfalloon@gmail.com"><span>
                    <FontAwesomeIcon icon={faEnvelope} className="link grey-tooltip" data-toggle="tooltip" data-placement="top"
                        title="Email" />
                </span></a>
                <a href="https://github.com/ggfalloon" target="_blank" rel="noreferrer"><span>
                    <FontAwesomeIcon className="git grey-tooltip"
                        data-toggle="tooltip" data-placement="top" title="Github" /></span>
                </a>

                <a href="https://www.linkedin.com/in/gabriele-falloon/" target="_blank" rel="noreferrer"><span><i
                    className="fab fa-linkedin link grey-tooltip" data-toggle="tooltip" data-placement="top"
                    title="LinkedIn"></i></span>
                </a>

                <a href="./G.FalloonResume.pdf"><span>
                    <FontAwesomeIcon icon={faFile} className="link grey-tooltip" data-toggle="tooltip"
                        data-placement="top" title="Resume" /></span>
                </a>
            </div>
        </footer>
    )
}

export default Footer;