import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { itemCount} = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  
  
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
         
          className="bg-gray-200 outline-none"
          type=""
          placeholder="Arama yapınız..."
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={()=>navigate("cart")} className="hover:cursor-pointer relative">
        <div className="absolute flex items-center justify-center -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5">
          {itemCount}
        </div>
        <SlBasket size={28} className="" />
      </div>
    </div>
  );
};

export default NavbarRight;
