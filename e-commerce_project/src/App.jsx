//use react router dom for routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import Applayout 
import AppLayout from "./component/layout/Applayout";
//Error page
import Error from "./component/ui/Error";

//import nav pages
import Home from "./pages/Home";
import Mall from "./pages/Mall";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "mall",
          element: <Mall />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
