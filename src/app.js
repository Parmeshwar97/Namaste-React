import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import userContext from "./utils/contextApi";

const AppLayout = () => {
  const [bindUser,setBindUser] = useState('');
  return (
    // A Context Provider is a component that makes a context value available to all its descendant components. It wraps around components that need access to the shared state.

    //USES of context provider
    //1. We can update our created context.
    //2. We can share data (eg.states, methods etc) from component.


    <userContext.Provider value={{ user: bindUser,setBindUser }}>
      <div>
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
  );
};

const Shopping = lazy(() => import("./components/Shopping"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shopping",
        element: (
          <Suspense feedBack={<h1>Loading...</h1>}>
            <Shopping />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
