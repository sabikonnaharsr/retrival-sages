import React from "react";
import Quiz from "../Quiz/Quiz";
import "./QuizDetails.css";

const QuizDetails = ({questions}) => { 
  return (
    <div>
      <h1>questionDetails</h1>
      {questions.map(question = () => <Quiz key={question.id}></Quiz>)}
    </div>
  );
};

export default QuizDetails;
