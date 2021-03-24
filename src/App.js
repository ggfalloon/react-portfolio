import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/connect" component={Connect} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
