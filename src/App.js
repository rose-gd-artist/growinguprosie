import { useState } from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
import ShopItem from "./ShopItem";
import Footer from "./Footer";
import { Router } from "@reach/router";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className="wrapper">
      <div className="App">
        <Header cartCount={cart.length} />
        <Router>
          <MainContent path="/" />
          <ShopItem path="/shopOwner/1/shopItem/:shopItemId" addToCart={addToCart} />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
