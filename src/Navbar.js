import React from "react";
import "./Navbar.css";
import IMAGES from "./images";

export default function Navbar() {
  return (
    <div>
      <div className="Navbar">
        <nav className="d-flex justify-content-around align-items-center bg-dark fixed-top">
          <a href="/">
            <img src={IMAGES.imglogo} className="logo" alt="" />
          </a>
          <h2>Sushi Paradise</h2>
          <ul className="m-2 p-0">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Servies</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
