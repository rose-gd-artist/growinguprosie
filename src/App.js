import './App.css';
import Header from "./Header";
import MainContent from "./MainContent";
import ShopItem from "./ShopItem";
import Footer from "./Footer";
import { Router } from "@reach/router";
//import { Link } from "@reach/router";

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <Header />
        <Router>
          <MainContent path="/" />
          <ShopItem path="/shopOwner/1/shopItem/:shopItemId" />
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
