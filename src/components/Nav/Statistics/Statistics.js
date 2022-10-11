import React, { useContext } from "react";
import { TopicsContext } from "../../Layout/Main";
import { BarChart, Bar, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const statisticsData = useContext(TopicsContext);
  const allData = statisticsData.data;

  console.log(statisticsData);
  return (
    <div className="mt-20 mx-auto w-1/12">
      <BarChart width={500} height={400} data={allData}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Statistics;
