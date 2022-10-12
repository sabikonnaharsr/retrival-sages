import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Questions/Question";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;
  // console.log(questions);
  return (
    <div className="">
      <h1 className="text-3xl text-slate-600 font-extrabold mt-10">Quiz Of {name}</h1>
      <div className="mt-10">
        {questions.map((questions, index) => (
          <Question key={questions.id} questions={questions} index={index}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
