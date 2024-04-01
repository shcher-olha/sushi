import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import "./Footer.css";
import IMAGES from "./images";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row mt-4">
          <div className="col-6">
            <ul className="list">
              <li className="item">
                <BiSolidContact className="icon" />
                <span>CONTACT US :</span>
              </li>
              <li className="item">
                <MdAlternateEmail className="icon" />
                <span>sushi@gmail.com</span>
              </li>
              <li className="item">
                <FaInstagram className="icon" />
                <span>Sushi</span>
              </li>
              <li className="item">
                <FaTelegramPlane className="icon" />
                <span>+3800 -000-000</span>
              </li>
            </ul>
          </div>

          <div className="col-6">
            <ul className="list ">
              <li className="item">
                <FaMapLocationDot className="icon" />
                <span>LOCATION: Liechtenstein Vaduz</span>
              </li>
              <img
                className="image-map rounded mx-auto d-block"
                src={IMAGES.imgTwo}
                alt="map"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
