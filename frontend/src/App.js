import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('lightblue');

  const handleButtonClick = () => {
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <header className="App-header">
        <h1>Interactive React App</h1>
        <p>This is a simple interactive app deployed on ArgoCD!</p>
        <button className="App-button" onClick={handleButtonClick}>Change Background Color</button>
        <button className="App-button" onClick={() => alert('Button Clicked!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;

