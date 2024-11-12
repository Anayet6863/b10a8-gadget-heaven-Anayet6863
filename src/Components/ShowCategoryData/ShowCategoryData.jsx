import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import ShowData from "../ShowData/ShowData";
import AllProduct from "../AllProducts/AllProduct/AllProduct";

const ShowCategoryData = () => {
  const categoryData = useLoaderData();
 // console.log(categoryData);
  const params = useParams();
  const { category } = params;
  const navigate = useNavigate()
  const handleCategoryBtn=(category)=>{
      navigate(`/${category}`)
  }

  const product = categoryData.filter((item) => item.category === category);
 // console.log(product);


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
      <div
        id="card"
        className="w-9/10 bg-white grid grid-cols-3 gap-5 p-10 rounded-md"
      >
         {product.map((item, idx) => {
        return <ShowData key={idx} item={item}></ShowData>;
      })}
      </div>
     </div>





    
    </div>
  );
};

export default ShowCategoryData;
