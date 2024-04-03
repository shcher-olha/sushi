import React from "react";

import Footer from "./Footer";
import "./App.css";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Navbar />
        <div className="main">
          <div
            style={{
              width: "100%",
              height: "500px",
              backgroundSize: "cover",
              backgroundImage: `url(${require("./images/logo.jpg")})`,
            }}
          >
            <p>Welcom to the world of Sushi</p>
            
              <a
                href="/"
                role="button"
                className="btn btn-lg btn-primary"
                title="FOR ORDER NOW"
              >
                Order now
              </a>
            
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
