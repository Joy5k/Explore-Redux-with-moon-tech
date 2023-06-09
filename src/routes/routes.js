import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import Dashboard from "../layout/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/AddProduct";
import ProductList from "../pages/Dashboard/productList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "top-rated",
        element: <TopRated />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/productlist",
        element: <ProductList/>,
      },
    ],
  },
]);

export default routes;
