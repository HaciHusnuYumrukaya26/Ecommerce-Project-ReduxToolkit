import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate=useNavigate();
  return <div onClick={()=>navigate("/")} className=" hover:cursor-pointer text-3xl   md:text-5xl xl:text-6xl">Shopping</div>;
};

export default NavbarLeft;
