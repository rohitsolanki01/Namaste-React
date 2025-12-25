// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import BodyComponents from "./Components/BodyComponets";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import Header from "./Components/Header";
import RestaurantMenu from "./Components/RestrorentMenu";
import { lazy,Suspense } from "react";
import Shimmer from "./Components/Shimmer";

const Glosery = lazy(() => import("./Components/Glosery"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponents />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/glosery",
        element:<Suspense fallback={<Shimmer />}><Glosery /></Suspense>,
      },
      {
        path: "/menu/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
