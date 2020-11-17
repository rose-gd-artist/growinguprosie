import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";
import './index.css';
import App from './App';
import About from "./About";
import IndexItem from "./IndexItem";
import ShopItem from "./ShopItem";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App path="/" />
    <About path="/about" />
    <IndexItem path="/shopOwner/1/shopItem/:shopItemId" />
    <ShopItem path="/shopOwner/1/shopItem/:shopItemId" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

