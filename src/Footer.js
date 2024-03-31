import React from "react";
import { BiSolidContact } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="Footer">
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
          <FaTelegramPlane className="icon" />{" "}
          <span>+3800 -000-000</span>
        </li>
      </ul>
    </div>
  );
}
