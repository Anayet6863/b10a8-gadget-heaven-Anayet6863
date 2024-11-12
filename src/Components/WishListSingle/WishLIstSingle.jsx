

const WishLIstSingle = ({item}) => {
    const wishList = item;
    console.log(wishList);
    const {product_image,product_title,price,description} = wishList;
    console.log("here");
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
           <div className='ml-auto flex items-center'><button><img src={"https://i.ibb.co.com/zPTpsct/icons8-cross-50.png"} alt="" /></button></div>
        </div>
    );
};

export default WishLIstSingle;