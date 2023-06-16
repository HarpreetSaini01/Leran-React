import React from "react";
import { HEADER_IMG_URL } from "../Constants";
const Tittle = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={HEADER_IMG_URL} />
    </a>
  );
};
const Header = () => {
  return (
    <>
      <div className="header">
        <Tittle />
        <div className="nav-items">
          <ul>
            <a>
              <li>Home </li>
            </a>
            <a>
              <li>Contact </li>
            </a>
            <a>
              <li>About Us </li>
            </a>
            <a>
              <li>Cart </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
