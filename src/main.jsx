import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Root from "./Components/Root/Root.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Deshboard from "./Components/Deshboard/Deshboard.jsx";
import AllProducts from "./Components/AllProducts/AllProducts.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.jsx";
import ShowCategoryData from "./Components/ShowCategoryData/ShowCategoryData.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import WishList from "./Components/WishList/WishList.jsx";
import Histories from "./Components/Histories/Histories.jsx";
import Trendings from "./Components/Trendings/Trendings.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
        children: [
          {
            path: "/",
            element: <AllProducts></AllProducts>,
            loader: () => fetch("/allData.json"),
          },
          {
            path:"/:category",
            element:<ShowCategoryData></ShowCategoryData>,
            loader: ()=> fetch("/allData.json")
            
          }
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/deshboard",
        element: <Deshboard></Deshboard>,
        children:[
          {
            path: "/deshboard",
            element: <Cart></Cart>
          },
          {
            path:"whishlist",
            element: <WishList></WishList>
          }
        ]
      },
      {
        path: "/details/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("/allData.json"),
      },
      {
        path:"/self",
        element: <Histories></Histories>,
      },
      {
        path:'/trending',
        element:<Trendings></Trendings>

      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
 
    <RouterProvider router={router} />

);
