import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox/BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.item}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner2.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner2.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner2.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner1.png"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox img={"/assets/Ads/AdsBanner2.png"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
