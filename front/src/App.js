import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("/api").then(res => res.text()).then(data => {
      setMessage(data);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          message && (
            <p>
              Message from server: {message}
            </p>
          )
        }
      </header>
    </div>
  );
}

export default App;
