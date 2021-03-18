import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Connect from "./components/Connect";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/connect" component={Connect} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
