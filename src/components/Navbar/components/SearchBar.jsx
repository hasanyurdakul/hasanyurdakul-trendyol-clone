import { InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <OutlinedInput
      size="small"
      type="text"
      className="w-[598px] text-sm rounded-lg bg-gray-100 border-none focus:ring-tOrange-400 hidden md:flex"
      placeholder="Aradığınız ürün, kategori veya markayı yazınız"
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon className="text-tOrange-400" />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
