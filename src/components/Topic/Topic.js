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
    <div className="rounded-md mt-10 shadow-md">
      <img
        src={logo}
        alt=""
        className="object-cover object-center rounded-md w-full h-72 bg-gray-400"
      />
      <div className="flex justify-between items-center py-4 px-3">
        <h1 className="font-bold text-2xl text-cyan-500">{name}</h1>
        <h3 className="text-xl font-bold">Quiz Total: {total}</h3>
        <button
          onClick={handleNavigate}
          className=" handle-btn bg-cyan-500 hover:bg-slate-700 text-slate-50 text-white font-bold pt-19 py-3 px-6 rounded-md"
        >
          Quiz Start
        </button>
      </div>
    </div>
  );
};

export default Topic;
