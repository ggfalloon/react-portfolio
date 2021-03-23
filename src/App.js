import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About";
import Connect from "./pages/Connect";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App container">
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
