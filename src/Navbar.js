import React from "react";
import "./Navbar.css";
import IMAGES from "./images";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="d-flex justify-content-between mt-3">
        <a href="/">
          <img src={IMAGES.imgthree} className="logo" alt="" />
          
        </a>
        <ul>
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about_me.html">Menu</a>
          </li>
          <li>
            <a href="/work.html">Servies</a>
          </li>
          <li>
            <a href="/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
