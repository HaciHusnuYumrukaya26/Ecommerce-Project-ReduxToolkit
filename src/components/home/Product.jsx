import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`products/${product?.id}`)} className="w-[410px] mb-2 mx-2 relative p-2  border rounded-md cursor-pointer">
      <div className="font-bold absolute rounded-md top-2 right-2 bg-gray-500 text-white p-2">
        {product?.price}
        <span className="text-xs ms-1">TL</span>
      </div>
      <img
        className="w-[200px] h-[200px] "
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3  font-bold">{product.title}</div>
    </div>
  );
};

export default Product;
