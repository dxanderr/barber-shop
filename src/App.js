import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Register from "./components/Register"
import Book from "./components/Book";
import Login from "./components/Login"
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";
function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  // useEffect(() => {
  //   const registerAnimations = () => {
  //     const sr = scrollreveal({
  //       origin: "bottom",
  //       distance: "80px",
  //       duration: 2000,
  //       reset: false,
  //     });
  //     sr.reveal(
  //       `
  //       nav,
  //       .home,
  //       footer
  //   `,
  //       {
  //         interval: 500,
  //       }
  //     );
  //   };
  //   registerAnimations();
  // }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <Router>
      <div data-theme={theme} className="app-container">
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" exact element={<Gallery />} />
          <Route path="/" exact element={<Register />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/" exact element={<Book />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
