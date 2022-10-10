import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Blog from "./components/Nav/Blog/Blog";
import Statistics from "./components/Nav/Statistics/Statistics";
import Topics from "./components/Nav/Topics/Topics";


function App() {
  const router = createBrowserRouter([
    {path: '/header', element: <Header></Header>},
    {path: '/topics', element: <Topics></Topics>},
    {path: '/statistics', element: <Statistics></Statistics>},
    {path: '/blogs', element: <Blog></Blog>}
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
