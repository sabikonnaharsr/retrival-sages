import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="nav-link-container">
             <div>
             <h1 className="google-font text-5xl font-extrabold text-cyan-400">Retrival Sages</h1>
             </div>
           <div>
            <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/topics">Topics</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/statistics">Statistics</NavLink>
            <NavLink to="/blog">Blog</NavLink> 
            <NavLink to="/errorPage">ErrorPage</NavLink>
           </div>    
      </nav>
        </div>
    );
};

export default Navbar;