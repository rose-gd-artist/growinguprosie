import React, { useState } from "react";
import './App.css';
import { Router } from "@reach/router";
import Header from "./Header";
import MainContent from "./MainContent";
import Reviews from "./Reviews";
import ShopItem from "./ShopItem";
import ShoppingCart from "./ShoppingCart";
//import Checkout from "./Checkout";
import Footer from "./Footer";



function App(props) {

  const [cart, setCart] = useState([]);
  // const [checkout, setCheckout] = useState([]);


  const product = (props) => {
    return (
      <div className="cartItemBox" id={props.id}>
      <img src={props.picture} alt={props.name}></img> 
      <p>{props.name}</p>
      <p>{props.size}</p>
      <p>{props.quantity}</p>
      <p>{props.price}</p>
      <button>Delete</button></div>);
  };

  


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // const goToCheckout = () => {
  //   setCheckout([...checkout, cart]);
  // };
  

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  // const goToCheckout = () => {
  //   setCheckout([...checkout, cart]);
  // };
  
  return (
    <div className="wrapper">
      <div className="App">
        <Header cartCount={cart.length} />
        <Router>
          <MainContent path="/" />
          <Reviews path="/reviews" />
          <ShopItem addToCart={addToCart} path="/shopOwner/1/shopItem/:shopItemId" />
          <ShoppingCart path="/shoppingCart" />
          {/* <Checkout path="/checkout" /> */}
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
