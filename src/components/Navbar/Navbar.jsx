import React from "react";
import NavbarLeft from "./NavbarItem/NavbarLeft";
import NavbarRight from "./NavbarItem/NavbarRight";

const Navbar = () => {
  return <div className="flex items-center justify-between my-3 mx-5">
    <NavbarLeft/>
    <NavbarRight/>
  </div>;
};

export default Navbar;
