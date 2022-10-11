import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const {id, name, logo } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/:${id}`)
  } 
  return (
    <div className="img-background mt-8">
      <img className="topic-img" src={logo} alt="" />
      <div className="btn-quiz">
        <h1 className="font-bold text-2xl text-cyan-500">{name}</h1>
        <button onClick={handleNavigate} className=" bg-cyan-500 text-white font-bold pt-19 py-3 px-6 rounded-md">
          Quiz Start
        </button>
      </div>
    </div>
  );
};

export default Topic;
