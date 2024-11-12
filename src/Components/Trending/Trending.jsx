import React from "react";
import { NavLink } from "react-router-dom";

const Trending = ({ item }) => {
  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = item;
  // console.log(item);
  return (
    <div className="card shadow-lg rounded-lg p-5">
      <div className="rounded-sm w-full h-[400px]">
        <img className="h-[300px] w-full" src={product_image}></img>
      </div>
      <div className="text-xl font-semibold">
        <h1>Product: {product_title}</h1>
        <h2>Description: {description}</h2>
        <h3>Price:$ {price}</h3>
        <h4>Rating: {rating}</h4>
        <h5>Specification: </h5>
        {item.specification.map((product, idx) => (
          <p key={idx}>
            {idx + 1 + ". "}
            {product}
          </p>
        ))}
      </div>
      <NavLink to={"/"}>
        {" "}
        <button className="btn border bg-[#9538E2] text-white">
          {item.availability ? "In Stock" : "Out of stock"}
        </button>
      </NavLink>
    </div>
  );
};

export default Trending;
