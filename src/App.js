import React, { useState, useEffect } from "react";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const getItemData = async () => {
          const response = await fetch("http://www.localhost:3000/shopOwner/1/shopItem");
          const responseShopItems = await response.json();
          setProducts(responseShopItems);
      };
      getItemData();

  }, []);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addProductToCart = (addedProduct) => {
    addToCart(addedProduct);
    const updatedProducts = products.map((product) => {
      if(product.id === addedProduct.id){
        return {
          ...product,
          quantity: product.quantity - 1
        }
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  };

  const removeFromCart = (productId) => {
    const revisedCart = cart.filter((product) => {
      return (
          product.id !== productId
      );
    });
    setCart(revisedCart);
    const updatedProducts = products.map((product) => {
      if(product.id === productId){
        return {
          ...product,
          quantity: product.quantity + 1
        }
      } else {
        return product;
      }
    });
    setProducts(updatedProducts);
  };

  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);


  
  return (
    <div className="wrapper">
      <div className="App">
        <Header cartCount={cart.length} />
        <Router>
          <MainContent path="/" products={products} />
          <Reviews path="/reviews" />
          <ShopItem products={products} addProductToCart={addProductToCart} path="/shopOwner/1/shopItem/:shopItemId" />
          <ShoppingCart cart={cart} products={products} removeFromCart={removeFromCart} cartTotal={cartTotal} path="/shoppingCart" />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
