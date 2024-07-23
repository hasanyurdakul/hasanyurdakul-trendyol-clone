import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";

function Navbar() {
  return (
    <div className=" max-w-[1200px] mx-auto p-1">
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
}

export default Navbar;
