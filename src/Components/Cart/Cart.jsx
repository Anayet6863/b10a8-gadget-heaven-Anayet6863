import React, { useContext, useEffect, useRef, useState } from "react";
import { allDataContext, cartContext } from "../Root/Root";
import CartShow from "../CartShow/CartShow";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [sortedcart, setCart] = useState([]);
  const allData = useContext(allDataContext);
 
  
  const modalRef = useRef(null)
  const { products, setProductId, productdPrice, setProductPrice,purchasedProduct,setPurchasedProduct,setPurchasedTtotal } =
    useContext(cartContext);
    const [total,setTotal] = useState(productdPrice)
  //console.log(total);

  useEffect(() => {
    setCart(products);
  }, [products]);
  const handlePurchaseItem = () => {
    
    setPurchasedProduct(products);
    setPurchasedTtotal(total)
    setCart([]);
    setProductId([])
    setProductPrice(0)
    modalRef.current.showModal();

   
};
// console.log(purchasedProduct);

const closeModal = () => {
  modalRef.current.close(); 
  navigate("/")
};
  const handleSortBtn = () => {
    const sortedProduct = [...sortedcart].sort((a, b) => b.price - a.price);

    setCart(sortedProduct);
  };
  

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Cart</h1>
        <div className="flex gap-5">
          <button className="btn">Total:$ {productdPrice}</button>
          <button onClick={handleSortBtn} className="btn btn-secondary">
            Sort By Price
          </button>

          <div className="cart-container">
            {products.length > 0 ? (
              <button
                className="btn btn-primary"
                onClick={handlePurchaseItem}
              >
                Purchase
              </button>
            ) : (
              <button className="btn btn-secondary" disabled>
                Cart is empty
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-white rounded-lg">
        {sortedcart.map((item, idx) => (
          <CartShow key={idx} item={item} />
        ))}
      </div>
      <div>
      <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex justify-center items-center flex-col">
            <h3 className="font-bold text-lg"><img src={"https://i.ibb.co.com/QYZDkkT/icons8-successful-48.png"}></img></h3>
            <p className="py-4 font-bold text-xl">
             Payment successfull.
            </p>
            <p>Thanks for purchasing.</p>
            <p>Total: ${total}</p>
            <div className="modal-action">
              <form method="dialog">
               
                <button onClick={closeModal} className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Cart;
