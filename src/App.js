import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Blog from "./components/Nav/Blog/Blog";
import Statistics from "./components/Nav/Statistics/Statistics";
import Topics from "./components/Nav/Topics/Topics";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Chart from "./components/Chart/Chart";
import Main from "./components/Layout/Main";
import Topic from "./components/Topic/Topic";
import Quiz from "./components/Quiz/Quiz";
import QuizDetails from "./components/QuizDetails/QuizDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Topics></Topics> },
        {
          path: "/topics",
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
          },
          element: <Topics></Topics>,
        },
        { path: "/topic", element: <Topic></Topic> },
        { path: "/header", element: <Header></Header> },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/chart", element: <Chart></Chart> },
        { 
         path: "/quizDetails",
        loader: async() => {
          return fetch(`https://openapi.programming-hero.com/api/quiz`)
        },
         element: <QuizDetails></QuizDetails> },

        {
          path: "/quiz/:Id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.Id}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },

    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
