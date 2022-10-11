import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <div>
      <h1> topics{topics.length}</h1>
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Topics;
