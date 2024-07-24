import React from "react";
import NavbarTop from "./components/NavbarTop";
import NavbarMiddle from "./components/NavbarMiddle";
import NavbarBottom from "./components/NavbarBottom";
import Divider from "./../Divider/Divider";

function Navbar() {
  return (
    <div className="">
      <div className="sm:max-w-96 md:max-w-[1200px] mx-auto p-1 bg-white ">
        <NavbarTop />
        <NavbarMiddle />
        <NavbarBottom />
      </div>
      <Divider />
    </div>
  );
}

export default Navbar;
