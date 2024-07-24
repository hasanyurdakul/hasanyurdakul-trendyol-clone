import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavbarMainButtons = () => {
  return (
    <div className="flex gap-5">
      <div className="flex text-xs items-center font-semibold">
        <PersonOutlineOutlinedIcon />
        <p>Giriş Yap</p>
      </div>
      <div className="flex text-xs items-center font-semibold">
        <FavoriteBorderOutlinedIcon />
        <p>Favorilerim</p>
      </div>
      <div className="flex text-xs items-center font-semibold">
        <ShoppingCartOutlinedIcon />
        <p>Sepetim</p>
      </div>
    </div>
  );
};

export default NavbarMainButtons;
