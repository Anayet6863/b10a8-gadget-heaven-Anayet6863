import React, { useContext } from "react";
import { cartContext } from "../Root/Root";
import WishLIstSingle from "../WishListSingle/WishLIstSingle";

const WishList = () => {
  const { WishList } = useContext(cartContext);
  //console.log(WishList);

  return (
    <>
      <div className="flex justify-between items-center mt-10 container mx-auto">
        <h1 className="text-3xl font-semibold">Wish List</h1>
      </div>
      <div className="container mx-auto mt-5">
        {WishList.map((item, idx) => (
          <WishLIstSingle key={idx} item={item} />
        ))}
      </div>
    </>
  );
};

export default WishList;
