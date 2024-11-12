import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
const History = ({ item }) => {
  
  const { product_image, product_title, price, description } = item;
  //    console.log(product_title,price);
  //    console.log(item);
  return (
    <div className="flex gap-10 bg-white p-5 mt-5 mb-5 rounded-lg shadow-lg">
      {/* <Helmet>
        <title>Gadget Heaven || History</title>
      </Helmet> */}
      <div className="rounded-lg">
        <img
          className="h-[150px] w-[150px]  rounded-lg"
          src={product_image}
          alt=""
        />
      </div>

      <div>
        <h1>{product_title}</h1>
        <p>{description}</p>
        <h2>{price}</h2>
      </div>
      <div className="ml-auto flex items-center">
        <button
          onClick={() => {
            handleDeteleItem(product_id);
          }}
        >
          <img
            src={"https://i.ibb.co.com/zPTpsct/icons8-cross-50.png"}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default History;
