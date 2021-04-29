import React from "react";

function About() {
    return (
        <div className="container mt-5 pt-3">
            <hr className="connect-rule" />
            <div className="row col-12 mx-auto">
                <div className="col-md-6 mx-auto">

                    <h2>About Me</h2>
                    <br />
                    <div className="page-header">

                        <section className="details justify-content-center">
                            <p>Coding is awesome! As a web developer I'm able
                            to creatively
                            enhance the
                            web, improving the user experience and optimizing web performance.
                            A great business sense and an eye for troubleshooting are
                            just a couple of the strengths that I bring to
                            the
                            table. I
                            find it very
                            rewarding to take part in building, refactoring and maintaining something so vital to
                            connecting our world.
                        </p>
                            <p>I'm looking forward to contributing my thirst for knowledge and growing skill set to a
                            company that is
                            pushing
                            the
                            boundaries of technology and utilizing the incredible possiblities of coding. When I'm
                            not writing code, I'm
                            cooking and staying fit. I also love to travel - I'm always ready for an
                            adventure.</p>
                        </section>
                    </div>
                </div>
                <br />

                <div className="col-md-5 mx-auto">
                    <h2 className="responsBrk">Skill Set</h2>
                    <br />
                    <div className="page-header d-flex justify-center">
                        <table className="table table-dark table-style th-sm-8rem" style={{ textAlign: "center" }}>
                            <tbody>
                                <tr>
                                    <td>HTML/CSS</td>
                                    <td>Bootstrap</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>jQuery</td>
                                </tr>
                                <tr>
                                    <td>MySQL</td>
                                    <td>Express</td>
                                </tr>
                                <tr>
                                    <td>Node.js</td>
                                    <td>React</td>
                                </tr>
                                <tr>
                                    <td>MongoDB</td>
                                    <td>Git</td>
                                </tr>
                                <tr>
                                    <td>REST APIs</td>
                                    <td>JSON</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>

            </div >
            <hr className="connect-rule" />

        </div>
    )
}

export default About;