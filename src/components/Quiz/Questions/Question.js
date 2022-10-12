import React from "react";
import "./Question.css";
import { EyeIcon } from "@heroicons/react/24/solid";
import Options from "../../Options/Options";
import { toast } from 'react-toastify';

const Question = ({ questions, index }) => {
  //   console.log(questions);
  const { id, correctAnswer, options, question } = questions;
  // console.log(options)
  const showAns = (ans) => {
    toast.success(`ans: ${ans}`)
  }
  return (
    <div className="">
      <div className="question shadow-lg p-10 mb-10 hover:bg-slate-500 text-slate-50 mt-8 w-3/4 mx-auto rounded-2xl">
        <div className="icon p-5 flex justify-between items-center ">
            
          <p><span>Quiz: {index+1}</span> {question}</p>
          <EyeIcon onClick={()=> showAns(correctAnswer)} className="h-6 w-6 icon text-blue-500" />
        </div>

        <div className=" grid md:grid-cols-2 gap-3">
          {options.map((option, index) => (
            <Options key={index} option={option} correctAnswer={correctAnswer}></Options>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
