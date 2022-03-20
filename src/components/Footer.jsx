import React from "react";
import logo from "../assets/momentous.svg";
import { BsFacebook, BsInstagram } from "react-icons/bs";
export default function Footer() {


  const socialLink = [
    <BsFacebook />,
    <BsInstagram />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <p className="powered-by">Powered by</p>
            <img src={logo} alt="logo" className="logo" />
            <p className="powered-by">Momentous</p>
          </div>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 Momentous Marketing</span>
        <div className="cookies-container">
          <p className="cookies-statement">We use <a href="/" className="cookies-link">cookies.</a></p>
          <button className="cookies-button">Got it!</button>
        </div>
      </div>
    </footer>
  );
}
