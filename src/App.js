import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch('http://localhost:5000/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <p>you clicked {count} times.</p>
        <button onClick={() => setCount(count+1)}>Click</button>

        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;