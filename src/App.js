import React from 'react';
import logo from './logo.svg';
import { Index } from './pages/Index/Index.tsx';
import request from './utils/request.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Index />
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => {
          console.log("into functions");
          request({
            name: "news",
            data: {
              a: "111"
            }
          })
        }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
