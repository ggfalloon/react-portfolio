import React from "react";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Connect from "../../pages/Connect";
import Portfolio from "../../pages/Portfolio";

function Wrapper(props) {
  return <main className="wrapper">{props.children}

    <Home />
    <About />
    <Portfolio />
    <Connect />
  </main>;
}

export default Wrapper;