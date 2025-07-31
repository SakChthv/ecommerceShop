import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function HomeSlider() {
  return (
    <div className="homeSlider py-3">
      <div className="container">
        <Swiper
          spaceBetween={15}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden">
              <img
                src="../assets/banners/banner1.png"
                alt="banner"
                className="w-full"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden">
              <img
                src="../assets/banners/banner3.png"
                alt="banner1"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden">
              <img
                src="../assets/banners/banner1.png"
                alt="banner2"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[25px] overflow-hidden">
              <img
                src="../assets/banners/banner3.png"
                alt="banner3"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
