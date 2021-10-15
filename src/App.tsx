import React from 'react';
import './App.css';
import CButton from './components/atoms/Button';
import CTextField from './components/atoms/TextField';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CTextField mb="1rem" />
        <CButton variant="solid">Hello</CButton>
      </header>
    </div>
  );
}

export default App;
