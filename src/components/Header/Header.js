import React from "react";
import "./Header.css";
import "../../images/background2.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src="images/background2.png" alt="" />
        <h2>“Any fool can write code that a computer can understand. ...</h2>
      </div>
      <nav className="header">
        <div>
          <a href="/order">Topics</a>
          <a href="/order review">Statistics</a>
          <a href="/manager inventory">Blog</a>
          <a href="/login">Disappear</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
