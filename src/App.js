import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Blog from "./components/Nav/Blog/Blog";
import Statistics from "./components/Nav/Statistics/Statistics";
import Topics from "./components/Nav/Topics/Topics";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Chart from "./components/Chart/Chart";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Topics></Topics> },
    { path: "/header", element: <Header></Header> },
    { path: "/topics" },
    { path: "/statistics", element: <Statistics></Statistics> },
    { path: "/blog", element: <Blog></Blog> },
    { path: "/chart", element: <Chart></Chart> },
    { path: "/errorPage", element: <ErrorPage></ErrorPage> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
