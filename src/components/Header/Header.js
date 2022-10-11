import React from "react";
import "./Header.css";
import images from "../images/background2.png"
import Topics from "../Nav/Topics/Topics";
// import '../images/background2.png'

const Header = () => {
  return (
    <div>
      
      <div className="header-container">
        <img className=" img-fluid header-img" src={images} alt="" />
        <h2 className="text-4xl text-slate-800 font-bold pt-7 ">“Any fool can write 
        <br />
        <span className="text-yellow-400 text-5xl">code that a computer can understand <span className="text-black">. ...</span></span></h2>
      </div>
      <Topics></Topics>
    </div>
  );
};

export default Header;
