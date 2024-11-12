import React, { useContext, useEffect } from "react";
import { cartContext } from "../Root/Root";
import History from "../History/History";
import { NavLink, Outlet, useNavigate } from "react-router-dom";


const Histories = () => {
  useEffect(()=>{
    document.title = "Gadget Heaven || History"
},[])
  const { purchasedProduct, purchasedTtotal } = useContext(cartContext);

  // console.log(purchasedProduct);
  // console.log(purchasedTtotal);
  return (
    <div>
      <div className="bg-[#9538E2] max-w-full h-[300px] text-center">
        <h1 className="text-5xl text-white p-10">History</h1>
        <p className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
      </div>

      <div className="text-5xl text-black p-10 container mx-auto flex">
        <h1>Previously Purchased.</h1>
        <div className="ml-auto flex gap-10">
          {/* <NavLink to={'/trending'}><button  className="btn bg-red-600 text-white p-3 w-[150px] h-[52px]">Trendings</button></NavLink> */}
          <NavLink to="/trending" className="inline-block">
            <button className="btn bg-red-600 text-white p-3 w-[150px] h-[52px]">
              Trendings
            </button>
          </NavLink>
          <button className="ml-auto text-white rounded-lg text-xl bg-[#9538E2] p-3">
            Total cost:$ {purchasedTtotal}
          </button>
        </div>
      </div>
      <div className="container mx-auto ">
        {purchasedProduct.length === 0 ? (
          <p className="text-5xl font-bold text-red-400 text-center mb-20 mt-20">
            Sorry.Not purchased anything.
          </p>
        ) : (
          purchasedProduct.map((item, idx) => <History key={idx} item={item} />)
        )}
      </div>
    </div>
  );
};

export default Histories;
