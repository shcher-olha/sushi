import React from "react";
import IMAGES from "./images";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>sushi</h1>
    
      <img className="image" src={IMAGES.imgOne} alt="sushi" />
    <Footer/>
      
    </div>

  );
}
