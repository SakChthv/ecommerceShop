import React, { useState } from "react";
import "../Navigation/style.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegSquareMinus } from "react-icons/fa6";

function CategoryPanel({ isOpenCatPanel, setIsOpenCatPanel }) {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
  const toggleDrawer = (newOpen) => () => {
    setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="text-[18px] font-[500] p-3 cursor-pointer flex items-center justify-between">
        ໝວດສີນຄ້າ{" "}
        <IoIosClose
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[28px]"
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          {/* Fashion */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                ເສື້ອຜ້າ
              </Button>
            </Link>{" "}
            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}
            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3 pr-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      ເຄື່ອງແຕ່ກາຍ
                    </Button>
                  </Link>{" "}
                  {innerSubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[5px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[5px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3 pr-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          {/* gg */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                ເສື້ອຜ້າ
              </Button>
            </Link>{" "}
            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}
            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3 pr-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      ເຄື່ອງແຕ່ກາຍ
                    </Button>
                  </Link>{" "}
                  {innerSubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[5px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="absolute top-[10px] right-[5px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3 pr-3">
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="links w-full !text-left !justify-start !px-3 transition"
                        >
                          ເຄື່ອງແຕ່ກາຍ
                        </Link>{" "}
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <Drawer open={isOpenCatPanel} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}

export default CategoryPanel;
