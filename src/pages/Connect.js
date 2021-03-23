import React from "react";


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
                                <i className="fas fa-envelope link-connect grey-tooltip" data-toggle="tooltip"
                                    data-placement="top" title="Email"></i></span>
                            </a>

                            <a href="https://github.com/ggfalloon" target="_blank" rel="noreferrer"><span><i
                                className="fab fa-github link-connect grey-tooltip" data-toggle="tooltip"
                                data-placement="top" title="Github"></i></span>
                            </a>

                            <a href="https://www.linkedin.com/in/gabriele-falloon/" target="_blank" rel="noreferrer"><span><i
                                className="fab fa-linkedin link-connect grey-tooltip" data-toggle="tooltip"
                                data-placement="top" title="LinkedIn"></i></span>
                            </a>

                            <a href="./G.FalloonResume.pdf"><span><i className="far fa-file link-connect grey-tooltip"
                                data-toggle="tooltip" data-placement="top" title="Resume"></i></span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Connect;