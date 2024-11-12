import React, { createContext, useContext, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { data } from "autoprefixer";
import NavBarPro from "../NavBarPro/NavBarPro";
import { HelmetProvider } from 'react-helmet-async';
export const allDataContext = createContext();
export const cartContext = createContext();
const Root = () => {
  const [products, setProductId] = useState([]);
  const [WishList, setWishList] = useState([]);
 // console.log(products);
  const [productdPrice, setProductPrice] = useState(0);
  const [purchasedProduct,setPurchasedProduct] = useState([]);
  const [allData, setAllData] = useState([]);
    const [purchasedTtotal,setPurchasedTtotal] = useState(0);
   // console.log(purchasedTtotal);
  useEffect(() => {
    fetch("./categoryData.json").then((res) =>
      res.json().then((data) => setAllData(data))
    );
  }, []);
  // console.log(allData);
  const location = useLocation();
  const pathName = location.pathname;
 // console.log(pathName);
  return (
    <div>
      <div>
      <HelmetProvider>
        <cartContext.Provider
          value={{
            products,
            setProductId,
            productdPrice,
            setProductPrice,
            WishList,
            setWishList,
            purchasedProduct,
            setPurchasedProduct,
            setPurchasedTtotal,
            purchasedTtotal
          }}
        >
          <allDataContext.Provider value={allData}>
            {/* {`${pathName!=="/"?<NavBarPro></NavBarPro>:<NavBar></NavBar>}`} */}
            {pathName !== "/" ? <NavBarPro /> : <NavBar />}
            <Outlet></Outlet>
            <Footer></Footer>
          </allDataContext.Provider>
        </cartContext.Provider>
        </HelmetProvider>
      </div>
    </div>
  );
};

export default Root;
