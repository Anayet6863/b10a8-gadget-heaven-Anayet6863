import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowData = ({item}) => {
 
    const {product_title,product_image,price,product_id} = item;
    const navigate = useNavigate();
  const handleDetailsbtn = (product_id) => {
    navigate(`/details/${product_id}`);
  };
  //c
    return (
        <div>
          
            <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={product_image} className="h-[200px] p-3" alt="Gadgets" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <h3>Price: {price}</h3>
            <div className="card-actions">
              <button
                onClick={() => handleDetailsbtn(product_id)}
                className="btn bg-white rounded-[32px] text-[#9538E2] border border-[#9538E2]"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ShowData;