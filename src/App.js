import './App.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { Link } from "@reach/router";

function App() {
  return (
    <div className="wrapper">
    <div className="App">
      <Header />
      <Link to="/about">About us</Link>
      <MainContent />
      <Footer />
    </div>
    </div>
  );
}

export default App;
