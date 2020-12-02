// import React, { useState } from "react";
// import './App.css';
// import { Router } from "@reach/router";
// import Header from "./Header";
// import MainContent from "./MainContent";
// import Reviews from "./Reviews";
// import ShopItem from "./ShopItem";
// import ShoppingCart from "./ShoppingCart";
// //import Checkout from "./Checkout";
// import Footer from "./Footer";



// function App(props) {

//   const [cart, setCart] = useState([]);

//   console.log(cart);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (productId) => {
//     const revisedCart = cart.filter((product) => {
//       return (
//           product.id !== productId
//       );
//     });
//     setCart(revisedCart);
//   };
  
//   return (
//     <div className="wrapper">
//       <div className="App">
//         <Header cartCount={cart.length} />
//         <Router>
//           <MainContent path="/" />
//           <Reviews path="/reviews" />
//           <ShopItem addToCart={addToCart} path="/shopOwner/1/shopItem/:shopItemId" />
//           <ShoppingCart cart={cart} removeFromCart={removeFromCart} path="/shoppingCart" />
//           {/* <Checkout path="/checkout" /> */}
//         </Router>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;

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
  const [product, setProduct] = useState({});

  console.log(cart);


  // const setAlert = (product) => {
  //     return (
  //       <div>
  //         {`Sorry, there only is 1 ${product.name} in stock.`}
  //       </div>
  //     );
  // };

  // const clearAlert = (product) => {
  //   return (
  //     <div>
  //       {("")}
  //     </div>
  //   );
  // };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // const addProductToCart = (product) => {
  //   addToCart(product);
  //   const updatedProduct = {
  //       ...product,
  //       quantity: product.quantity - 1
  //   }
  //   setProduct(updatedProduct)
  // };

  const removeFromCart = (productId) => {
    const revisedCart = cart.filter((product) => {
      return (
          product.id !== productId
      );
    });
    setCart(revisedCart);
   //setAlert("");
  };
  
  return (
    <div className="wrapper">
      <div className="App">
        <Header cartCount={cart.length} />
        <Router>
          <MainContent path="/" />
          <Reviews path="/reviews" />
          <ShopItem addToCart={addToCart} path="/shopOwner/1/shopItem/:shopItemId" />
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} path="/shoppingCart" />
          {/* <Checkout path="/checkout" /> */}
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
