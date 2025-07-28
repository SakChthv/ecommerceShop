import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function HomeSlider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img
          src="../assets/banners/banner1.png"
          alt="banner"
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../assets/banners/banner2.png"
          alt="banner1"
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../assets/banners/banner3.png"
          alt="banner2"
          className="w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="../assets/banners/banner4.png"
          alt="banner3"
          className="w-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSlider;
