import React, { useContext } from "react";
import { TopicsContext } from "../../Layout/Main";
import Topic from "../../Topic/Topic";

const Topics = () => {
  const topics = useContext(TopicsContext);

  return (
    <div className="grid grid-cols-3 mx-auto gap-16 w-11/12">
      {topics.data.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Topics;
