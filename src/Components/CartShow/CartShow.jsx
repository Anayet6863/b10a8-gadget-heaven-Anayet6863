import React, { useContext } from 'react';
import { cartContext } from '../Root/Root';

const CartShow = ({item}) => {
 
   // console.log(item);
    const {product_image,product_title,price,description,product_id} = item
   // console.log(product_image,product_title,price);
    const {products,setProductId,productdPrice, setProductPrice} = useContext(cartContext)

   const handleDeteleItem = (product_id)=>{
    console.log(products);
    const deleteProduct = products.filter(item =>item.product_id!==product_id)
    const deletedItem = products.find(item => item.product_id === product_id);
    setProductId(deleteProduct);
    console.log(deletedItem);
   
    // const [deletedPrice] = deleteProduct
    // console.log(deletedPrice);
     setProductPrice(productdPrice-deletedItem.price)
   }
    return (
        <div className='flex gap-10 bg-white p-5 mt-5 mb-5 rounded-lg shadow-lg'>
           <div className='rounded-lg'>
            <img className="h-[150px] w-[150px]  rounded-lg" src={product_image} alt="" />
           </div>
           <div>
            <h1>{product_title}</h1>
            <p>{description}</p>
            <h2>{price}</h2>
           </div>
           <div className='ml-auto flex items-center'><button onClick={()=>{handleDeteleItem(product_id)}}><img src={"https://i.ibb.co.com/zPTpsct/icons8-cross-50.png"} alt="" /></button></div>
        </div>
    );
};

export default CartShow;