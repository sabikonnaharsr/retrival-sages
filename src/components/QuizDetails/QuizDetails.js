import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./QuizDetails.css";

const QuizDetails = ({ quiz }) => {
    const quizDetails = useLoaderData();
    console.log(quizDetails)
  return (
    <div>
      <h1>questionDetails</h1>
      {/* {QuizDetails.map((quiz = () => <Quiz key={QuizDetails.id} ></Quiz>))} */}

    </div>
  );
};

export default QuizDetails;
