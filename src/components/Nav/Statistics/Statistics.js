import React, { useContext } from "react";
import { TopicsContext } from "../../Layout/Main";
import { BarChart, Bar, Tooltip, XAxis, YAxis,ResponsiveContainer } from "recharts";

const Statistics = () => {
  const statisticsData = useContext(TopicsContext);
  const allData = statisticsData.data;

  console.log(statisticsData);
  return (
    <div className="mt-20">
        <ResponsiveContainer width="100%" height={300}>
      <BarChart width={500} height={400} data={allData}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
