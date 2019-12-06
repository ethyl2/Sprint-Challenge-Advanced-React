import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players';
import useDarkMode from './hooks/useDarkMode';

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </header>
      <Players />
      <footer>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
