import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import "../../images/background2.png";
import '../images/background2.png'

const Header = () => {
  return (
    <div>
      <nav className="nav-link">
             <div>
             <h1 className="text-4xl font-extrabold  text-cyan-400">Retrival Sages</h1>
             </div>
           <div>
            <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/topics">Topics</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/statistics">Statistics</NavLink>
            <NavLink to="/blog">Blog</NavLink> 
           </div>    
      </nav>
      <div className="header-container">
        <img src="images/background2.png" alt="" />
        <h2 className="text-2xl text-slate-600 font-bold pt-7 ">“Any fool can write code that a computer can understand....</h2>
      </div>
    </div>
  );
};

export default Header;
