import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/react-portfolio" />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
