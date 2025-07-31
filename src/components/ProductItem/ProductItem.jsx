import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";

const ProductItem = () => {
  return (
    <div className="productItem rounded-sm overflow-hidden border-1 border-gray-200 shadow-md">
      <div className="group imgWrapper w-[100%] relative">
        <Link to="/">
          <div className="img overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="product"
              className="w-full"
            />
            <img
              src="https://media.istockphoto.com/id/835148968/photo/red-headphones-isolated.jpg?s=612x612&w=0&k=20&c=JAEd1MYVaJjC0Iu1cZ4LPHRigRGZ-NJNjIXXs87me1E="
              alt="product"
              className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-md p-1 text-[12px] font-semibold">
          20%
        </span>
        <div className="action absolute top-[200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-500 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-gray-800 hover:!bg-[#ff5252] hover:!text-white">
            <MdZoomOutMap className="text-[18px] group" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-gray-800 hover:!bg-[#ff5252] hover:!text-white">
            <IoGitCompareOutline className="text-[18px] group" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-gray-800 hover:!bg-[#ff5252] hover:!text-white">
            <FaRegHeart className="text-[18px] group" />
          </Button>
        </div>
      </div>
      <div className="info p-3 py-4">
        <h6 className="text-[14px] text-[rgba(0,0,0,0.6)]">
          <Link to="/" className="links transition-all">
            soylent yellow
          </Link>
        </h6>
        <h3 className="text-[16px] title mt-2 font-semibold text-[rgba(0,0,0,0.9)] mb-2">
          <Link to="/" className="links transition-all">
            ຫູຟັງໄຮ້ສາຍ
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[14px]">
            ₭725,000
          </span>
          <span className="price text-[#ff5252] font-semibold">₭599,000</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
