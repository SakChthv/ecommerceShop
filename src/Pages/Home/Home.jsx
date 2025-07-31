import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../components/ProductSlider/ProductSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[25px] font-semibold">ສີນຄ້າຍອດນິຍົມ</h3>
              <p>
                ຢ່າພາດໂອກາດດີໆແບບນີ້
                ທາງເຮົາຂໍຕອບແທນລູກຄ້າດ້ວຍການຫຼຸດລາຄາສີນຄ້າທຸກຢ່າງ!
              </p>
            </div>
            <div className="rightSec w-[50%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="ເສື້ອຜ້າ" />
                <Tab label="ເຄື່ອງໃຊ້ໄຟຟ້າ" />
                <Tab label="ເຄື່ອງປະດັບ" />
                <Tab label="ເຄື່ອງນອນ" />
                <Tab label="ເຄື່ອງເສີມສວຍ" />
                <Tab label="ເຄື່ອງກິລາ" />
                <Tab label="ເຄື່ອງໃຊ້ທົ່ວໄປ" />
              </Tabs>
            </div>
          </div>
          <ProductSlider item={5} />
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-2 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-5">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-bold">ຈັດສົ່ງຟຣີ</span>
            </div>
            |
            <div className="col2">
              <p className="mb-0 font-[500]">
                {" "}
                ຊື້ສີນຄ້າ ₭650,000 ຂື້ນໄປສົ່ງຟຣີທົ່ວປະເທດ
              </p>
            </div>
            |<p className="font-bold text-[25px]">ສຳລັບຄັ້ງທຳອິດເທົ່ານັ້ນ</p>
          </div>
          <AdsBannerSlider item={4} />
        </div>
      </section>
    </>
  );
};

export default Home;
