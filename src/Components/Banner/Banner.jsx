import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();


    const handleShopNow =()=>{
        navigate("/");
        console.log("show now");
    }
    return (
        <div>
            {/* <h1>From Banner.</h1> */}
            <div className='bg-[#9538E2] max-w-full h-[700px] rounded-b-lg text-white flex  flex-col text-center  mr-5 ml-5'>
                <h1 className='mt-12 text-5xl font-bold'>Upgrade Your Tech Accessorize with <br/> Gadget Heaven Accessories</h1>
                <p className='font-thin text-xl mt-8 mb-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the <br/>  coolest accessories, we have it all!</p>
               <div> <button onClick={handleShopNow} className='w-[170px] h-[65px] rounded-[32px]   bg-white text-[#9538E2] text-center font-bold'>Shop Now.</button></div>
            </div>
            <div className='w-[1100px] h-[600px] rounded-lg bg-cover bg-no-repeat p-5 relative -top-[200px] left-[400px] outline outline-[white]/70 outline-[3px]'>
                <img className='w-[1030px] h-[550px] rounded-lg ' src={"https://i.ibb.co.com/TLgVrZh/banner.jpg"} alt="Headphones" />
            </div>
        </div>
    );
};

export default Banner;