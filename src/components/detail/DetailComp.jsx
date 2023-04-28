import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch=useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket=()=>{
    dispatch(addToCart({id:productDetail?.id,title :productDetail?.title,image: productDetail?.image,price :productDetail?.price, quantity:quantity}))
  }
  return (
    <div className="flex  gap-10 ">
      <img
        className="w-[350px] lg:w-[600px] h-[400px]"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-xl  md:text-2xl font-bold">
          {productDetail.title}
        </div>
        <div className="my-2">{productDetail?.description}</div>
        <div className=" text-xl text-red-600 my-2">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className=" text-xl text-red-600 my-2">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-4xl font-bold">
          {" "}
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-4xl">
            -
          </div>
          <input
            className="w-12 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="flex items-center justify-center my-3 cursor-pointer hover:bg-gray-700 hover:text-white bg-gray-200 rounded text-2xl border w-[200px] h-16"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
