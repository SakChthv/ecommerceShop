import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className="catSlider"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/T-shirt.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/GamingChair.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/Sneaker.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/Jewelry.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/T-shirt.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/T-shirt.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/T-shirt.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/T-shirt.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/T-shirt.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="../assets/categories/T-shirt.png"
                  alt="Category"
                  className="w-[60px] transition-all"
                />
                <h3 className="font-[500] text-[15px] mt-2">ເສື້ອສຸບ</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
