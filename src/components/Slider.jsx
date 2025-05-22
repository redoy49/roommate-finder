import React from "react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slider9 from "../assets/slider9.png";
import slider10 from "../assets/slider10.png";
import slider11 from "../assets/slider11.png";
import slider12 from "../assets/slider12.png";

const Slider = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-[450px] bg-slate-100">
            <img className="w-full" src={slider11} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[450px] bg-slate-100">
            <img className="w-full" src={slider10} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[450px] bg-slate-100">
            <img className="w-full" src={slider9} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[450px] bg-slate-100">
            <img className="w-full" src={slider12} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
