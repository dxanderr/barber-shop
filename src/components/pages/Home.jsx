import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Main from "../Main"
import Next from "../Next"
export default function Home() {
  return (
    <div className="home">
      <Navbar theme="light"/>     
      <Hero />
      <Main />
      <Next />
    </div>
  );
}
