import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import "../../images/background2.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        {/* <img src="images/background2.png" alt="" /> */}
        <h2>“Any fool can write code that a computer can understand. ...</h2>
      </div>
      <nav className="nav-link">
        <div>
          <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/topics">Topics</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/statistics">Statistics</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
