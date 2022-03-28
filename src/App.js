import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Gallery from "./components/Gallery";
import Register from "./components/Register"
import Book from "./components/pages/Book";
import Login from "./components/Login"
// import scrollreveal from "scrollreveal";
import "./sass/index.scss";
function App() {
  const [navTheme, setNavTheme] = useState("dark");
  // const changeTheme = () => {
  //   console.log('theme changed')
  //   navTheme === "dark" ? setNavTheme("light") : setNavTheme("dark");
  // };

  return (
    <Router>
      <div className="app-container">
        <Navbar navTheme={navTheme} setNavTheme={setNavTheme}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/" exact element={<Gallery />} />
          <Route path="/" exact element={<Register />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/book" exact element={<Book />}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
