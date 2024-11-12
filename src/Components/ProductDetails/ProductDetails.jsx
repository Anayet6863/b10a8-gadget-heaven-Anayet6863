import { Container } from "postcss";
import React, { useContext,useEffect } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import {cartContext} from "../Root/Root"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const ProductDetails = () => {
  
  const params = useParams();
 // console.log(params);
  const { product_id } = params;
  const allData = useLoaderData();

  const product = allData.find(
    (item) => item.product_id === Number(product_id)
  );
  //console.log(product);
  
  const { setProductId,products,productdPrice,setProductPrice,WishList,setWishList } = useContext(cartContext);
  // console.log(productdPrice);
  // console.log(WishList);
  

  const handleCartList = (product_id) => {
    const notify = () => toast("This itme is available in cart! Chose another one.");
    const notify_1= () =>toast("Wow! Product is added in cart.")
  
    const addProduct = allData.find((item) => item.product_id === Number(product_id));
  
    if (addProduct) {

      const productExists = products.find((product) => product.product_id === addProduct.product_id);
      
      if (!productExists) {
   
        const newProducts = [...products, addProduct];
        setProductPrice(productdPrice+addProduct.price)
        setProductId(newProducts);
        notify_1();
      } else {
        notify();
      }
  
    }
  }


    const handleWishList = (product_id)=>{
      const wnotify = () => toast("This itme is available in wish list! Chose another one.");
    const wnotify_1= () =>toast("Wow! Product is added in wish list.")
        const addWishListProduct = allData.find((item) => item.product_id === Number(product_id));
        if(addWishListProduct){
          const productExists = WishList.find((product) => product.product_id === addWishListProduct.product_id);
          if(!productExists){
            const newWishList = [...WishList,addWishListProduct]
            setWishList(newWishList)
            wnotify_1()
          }
          else{
            wnotify()
          }
        }
    }
    
  return (
    <div>
      <div className="flex flex-col max-w-full h-[300px] bg-[#9538E2] text-center text-white pt-5">
        <h1 className="text-5xl">Product Details</h1>
        <p className="mt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
      </div>
      <div>
        <div className="hero bg-base-200 w-[1000px] h-[500px] p-5 relative -top-[130px] left-[400px] rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product.product_image}
              className="max-w-sm rounded-lg shadow-xl"
            />
            <div className="font-semibold">
              <h1 className="mt-1 mb-1">{product.product_title}</h1>
              <p className="mt-1 mb-1">Price:$ {product.price}</p>
              <button  className="btn border border-yellow-300 text-black">
                {product.availability ? "In Stock" : "Out of stock"}
              </button>
              <p className="mt-1 mb-1">{product.description}</p>
              <p className="mt-1 mb-1">Specification:</p>
              {product.specification.map((item, idx) => (
                <p key={idx} className="mt-1 mb-1">
                  {idx + 1 + ". "}
                  {item}
                </p>
              ))}
              <div className="flex gap-5">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <div>
                    {product.rating}
                </div>
              </div>
              <button onClick={()=>{handleCartList(product_id)}} className="btn bg-[#9538E2] text-white">Add to cart.</button>
              <button onClick={()=>{handleWishList(product_id)}} className="btn button rounded-full"><img className="w-[30px] h-[30px] mt-1" src={"https://i.ibb.co.com/Db6k2Bk/icons8-heart-50.png"}></img></button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ProductDetails;
