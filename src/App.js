import React from 'react';
import profileImage from './images/IMG_6321.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Gabriele Falloon</h1>
      <h2>Full Stack Web Developer</h2>
      <img src={profileImage} alt="my pic" width="200" />
    </div>
  );
}

export default App;
