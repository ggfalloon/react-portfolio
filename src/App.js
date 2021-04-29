import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Router>
      <Navbar />
      <Route exact path="/react-portfolio">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfolio" >
        <Portfolio />
      </Route>
      <Route path="/connect">
        <Connect />
      </Route>
      <Footer />
    </Router>

  );
}

export default App;
