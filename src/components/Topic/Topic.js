import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo } = topic;
  return (
    <div className="img-background mt">
      <img className="topic-img" src={logo} alt="" />
      <div className="btn-quiz">
        <h1>{name}</h1>
        <button className=" bg-slate-600 pt-19 py-3 px-6 rounded-md">
          Quiz Start
        </button>
      </div>
    </div>
  );
};

export default Topic;
