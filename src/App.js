import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Register from "./components/pages/Register"
import Book from "./components/pages/Book";
import ShopX from './components/pages/ShopX';
import Login from "./components/pages/Login";
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";
function App() {
  const [navTheme, setNavTheme] = useState("dark");
  const lightTheme = () => {
    setNavTheme("light");
  };
  const darkTheme = () => {
    setNavTheme("dark");
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar className={navTheme} darkTheme={darkTheme} lightTheme={lightTheme}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/book" exact element={<Book />}  />
          <Route path="/book/shopx" exact element={<ShopX />}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
