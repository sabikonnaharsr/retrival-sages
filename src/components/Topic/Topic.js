import React from "react";
import { useNavigate } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    // <div className="img-background rounded-lg shadow-lg mt-8">
    //   <img className="topic-img bg-gray-400" src={logo} alt="" />
    //   <div className="btn-quiz">
    //
    //
    //   </div>
    // </div>

    <div className="rounded-md shadow-md">
      <img
        src={logo}
        alt=""
        className="object-cover object-center rounded-md mt-7 w-full h-72 bg-gray-400"
      />
      <div className="flex justify-between items-center py-4 px-3">
        <h1 className="font-bold text-2xl text-cyan-500">{name}</h1>
        <h3 className="text-xl ">Quiz Total: {total}</h3>
        <button
          onClick={handleNavigate}
          className=" bg-cyan-500 text-white font-bold pt-19 py-3 px-6 rounded-md"
        >
          Quiz Start
        </button>
      </div>
    </div>
  );
};

export default Topic;
