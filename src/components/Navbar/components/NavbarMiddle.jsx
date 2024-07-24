import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavbarMainButtons from "./NavbarMainButtons";

function NavbarMiddle() {
  return (
    <div className="flex items-center justify-between ">
      <Logo />
      <SearchBar />
      <NavbarMainButtons />
    </div>
  );
}

export default NavbarMiddle;
