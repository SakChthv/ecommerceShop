import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search.jsx";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import LanguageSelector from "../../Languages/LanguageSelector.jsx";
import Navigation from "./Navigation/Navigation.jsx";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const handleLanguageChange = (lang) => {
    console.log("Selected language:", lang);
  };
  return (
    <header className="mt-1 bg-white">
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[500]">
                ຮັບສ່ວນຫຼຸດສູງສຸດ 50%, ມີເວລາຈຳກັດ!
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-2">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] font-[500] transition links"
                  >
                    ເພີ່ມເຕີມ {""}
                  </Link>
                </li>
                |
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] font-[500] transition links"
                  >
                    ເບີ່ງການສັ່ງຊື້ {""}
                  </Link>
                </li>
                |
                <li>
                  {" "}
                  <LanguageSelector onSelect={handleLanguageChange} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header py-4 border-t-[1px] border-b-[1px] border-gray-100">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[15%]">
            <Link to={"/"}>
              <img src="../assets/logo/logo.png" className="w-30" alt="Logo" />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[40%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link className="links text-[15px] font-[500]" to={"/login"}>
                  ເຂົ້າສູ່ລະບົບ
                </Link>{" "}
                |&nbsp;{" "}
                <Link className="links text-[15px] font-[500]" to={"/register"}>
                  ສະໝັກ
                </Link>
              </li>

              <li>
                <Tooltip title="compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <GoGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="ສີ່ງທີ່ມັກ">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="ກະຕ່າ">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoCartOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
