import React from "react";
import IMAGES from "./images";
import Footer from "./Footer";
import "./App.css";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Navbar />
        <img className="image" src={IMAGES.imgOne} alt="sushi" />
        <Footer />
      </div>
    </div>
  );
}
