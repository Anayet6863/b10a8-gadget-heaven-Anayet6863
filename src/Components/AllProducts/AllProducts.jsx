import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AllProduct from "./AllProduct/AllProduct";

const AllProducts = () => {
  const allData = useLoaderData();
  //console.log(allData);
  const navigate = useNavigate()
  const handleCategoryBtn=(category)=>{
      navigate(`/${category}`)
  }
  return (
    <div>
        <div className="text-center mt-5 mb-5 text-5xl font-semibold">
            <h1>Explore Cutting-Edge Gadgets</h1>
        </div>
     <div className="container mx-auto flex">
     <div
        id="category"
        className="w-1/10 bg-white rounded-md h-auto flex flex-col p-10 gap-5 "
      >
        <button onClick={()=>{handleCategoryBtn("")}} className="btn">All Products</button>
        <button onClick={()=>{handleCategoryBtn("Phones")}} className="btn">Phones</button>
        <button onClick={()=>{handleCategoryBtn("Laptops")}} className="btn">Laptops</button>
        {/* <button onClick={()=>{handleCategoryBtn("Accessories")}} className="btn">Accessories</button> */}
        <button onClick={()=>{handleCategoryBtn("Smartwatches")}} className="btn">Smart Watches</button>
        {/* <button onClick={()=>{handleCategoryBtn("MacBook")}} className="btn">MacBook</button>
        <button onClick={()=>{handleCategoryBtn("iphone")}} className="btn">Iphone</button> */}
      </div>
      <div id="card" className="w-9/10 bg-white grid grid-cols-3 gap-5 p-10 rounded-md">
        {allData.map((item,idx) => (
          <AllProduct key={idx} item={item}></AllProduct>
        ))}
      </div>
     </div>
    </div>
  );
};

export default AllProducts;
