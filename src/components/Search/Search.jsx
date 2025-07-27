import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="searchBox h-[50px] bg-[#e5e5e5] rounded-[4px] relative p-2">
      <input
        type="text"
        placeholder="ຄົ້ນຫາສີນຄ້າ..."
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
      <Button className="!absolute top-[5px] right-[5px] z-50 !w-[40px] !min-w-[40px] h-[40px] !rounded-full !text-black">
        <IoIosSearch className="text-[#4e4e4e] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;
