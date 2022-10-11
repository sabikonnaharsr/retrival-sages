import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quiz = useLoaderData().data;
  console.log(quiz);
  return (
    <div className="">
      <EyeIcon className="h-6 w-6 icon text-blue-500" />
    </div>
  );
};

export default Quiz;
