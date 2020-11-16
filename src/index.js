import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";
import './index.css';
import App from './App';
import About from "./About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App path="/" />
    <About path="/about" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

