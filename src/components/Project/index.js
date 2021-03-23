import React from "react";

function Project(props) {
    const { title, href, githref, image, description, languages } = props
    return (
        <div className="row">
            <div className="col-md-6">
                <h3>{title} - <a href={href} target="_blank" rel="noreferrer">
                    <span><i className="fab fa-github-square iconPort"></i></span>
                </a></h3>
                <div className="overlayHolder">
                    <a href={githref} target="_blank" rel="noreferrer">
                        <img src={image}
                            alt="pill box app"
                            className="img-thumbnail img-thumb" />
                        <div className="img-overlay">
                            <p>{description}</p>
                            <p>{languages}</p>
                        </div>
                    </a></div>
            </div>
        </div>
    )
}

export default Project;