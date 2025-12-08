// App.jsx
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import BodyComponets from "./Components/BodyComponets";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import Header from "./Components/Header";
import RestrorentMenu from "./Components/RestrorentMenu";

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}


const AppROuter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayOut />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <BodyComponets />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/cart",
        element : <Cart />
      },
      {
        path : "/menu/:id",
        element : <RestrorentMenu />
      }
    ]
  }
])

function App() {
  return (
 <>
  <RouterProvider router={AppROuter} />
 </>
  );
}

export default App;
