import React, { useState } from "react";
import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsRocketTakeoff } from "react-icons/bs";
import CategoryPanel from "./CategoryPanel";

function Navigation() {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-5">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full categories hover:!text-[#ff5252]"
              onClick={openCategoryPanel}
            >
              <RiMenu2Line className="text-[18px]" /> ເລືອກເບີ່ງຕາມໝວດໝູ່{" "}
              <RiArrowDropDownLine className="text-[20px]" />
            </Button>
          </div>
          |
          <div className="col_2  w-[65%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link
                  to={"/"}
                  className="links transition text-[14px] font-[500]"
                >
                  <Button className="links transition !font-[500]">
                    ໜ້າຫຼັກ
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/"}
                  className="links transition text-[14px] font-[500]"
                >
                  {" "}
                  <Button className="links transition !font-[500]">
                    ເຄື່ອງແຟຊັ່ນ
                  </Button>
                </Link>

                <div className="submenu absolute top-[100%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          ຜູ້ຊາຍ
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  ເກີບຜ້າໃບ
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  ເສື້ອ T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  ໂສ້ງຂາຍາວ
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  ສົ້ງຂາສັ້ນ
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  ເສື້ອສຸພາບ
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  ເກີບຄີບ
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Elder
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boy
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="links transition text-[14px] font-[500]"
                >
                  {" "}
                  <Button className="links transition !font-[500]">
                    ເຄື່ອງໄຟຟ້າ
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="links transition text-[14px] font-[500]"
                >
                  {" "}
                  <Button className="links transition !font-[500]">
                    ກະເປົາ
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="links transition text-[14px] font-[500]"
                >
                  {" "}
                  <Button className="links transition !font-[500]">
                    ເກີບຜ້າໃບ
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="links transition text-[14px] font-[500]"
                >
                  {" "}
                  <Button className="links transition !font-[500]">
                    ເຄື່ອງກິລາ
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="links transition text-[14px] font-[500]"
                >
                  {" "}
                  <Button className="links transition !font-[500]">
                    ເຄື່ອງເສີມຄວາມງາມ
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[15%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <BsRocketTakeoff className="text-[18px]" /> ສົ່ງຟຣີພາຍໃນປະເທດ
            </p>
          </div>
        </div>
      </nav>
      {/* Category */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
}

export default Navigation;
