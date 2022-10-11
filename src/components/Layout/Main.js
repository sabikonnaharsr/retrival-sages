import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
// import Header from '../Header/Header';
import Navbar from "../Navbar/Navbar";
export const TopicsContext = createContext([]);
const Main = () => {
    const topicsData = useLoaderData();
  
  return (
    <TopicsContext.Provider value={topicsData}> 
        <Navbar></Navbar>
        <Outlet></Outlet>
    </TopicsContext.Provider>
  );
};

export default Main;
