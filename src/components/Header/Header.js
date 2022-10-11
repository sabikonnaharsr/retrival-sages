import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import images from "../images/background2.png"
import '../images/background2.png'

const Header = () => {
  return (
    <div>
      <nav className="nav-link-container">
             <div>
             <h1 className="text-5xl font-extrabold text-cyan-400">Retrival Sages</h1>
             </div>
           <div>
            <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/topics">Topics</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/statistics">Statistics</NavLink>
            <NavLink to="/blog">Blog</NavLink> 
            <NavLink to="/errorPage">ErrorPage</NavLink>
           </div>    
      </nav>
      <div className="header-container">
        <img className=" img-fluid header-img" src={images} alt="" />
        <h2 className="text-4xl text-slate-600 font-bold pt-7 ">“Any fool can write 
        <br />
        <span className="text-yellow-400 text-5xl">code that a computer can understand....</span></h2>
      </div>
    </div>
  );
};

export default Header;
