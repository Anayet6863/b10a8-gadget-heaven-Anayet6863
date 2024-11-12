import React, { useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Deshboard = () => {
  useEffect(()=>{
    document.title = "Gadget Heaven || Dashboard"
},[])
  return (
    <div>
     <div className="bg-[#9538E2] max-w-full h-[300px] text-center">
        <div>
            <h1 className="text-5xl text-white p-10">Deshboard</h1>
            <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br/> the coolest accessories, we have it all!</p>
        </div>
     <div className="w-[170px] mx-auto mt-10 mb-10">
        <div role="tablist" className="tabs tabs-boxed flex gap-5">
          <NavLink className={({isActive})=>`tab ${isActive?"tab-active":""}`} to={"/deshboard"} role="tab">
            Cart
          </NavLink>
          <NavLink to={"whishlist"} className={({isActive})=>`tab ${isActive?"tab-active":""}`} role="tab">
            WishList
          </NavLink>
        </div>
      </div>
     
     </div>
     <Outlet></Outlet>
    </div>
  );
};

export default Deshboard;
