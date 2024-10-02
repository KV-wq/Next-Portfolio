"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";

export default function Slider2() {
  return (
    <div className="absolute bottom-0 right-20 md:bottom-40 md:right-48 w-[52%] ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[250px] h-[300px] relative flex flex-col gap-6 mb-10 text-white shadow-lg rounded-xl px-6 py-8 overflow-hidden  "
              key={index}
            >
              <div
                className="absolute inset-0 bg-center shadow-md"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-[#ffa575] w-8 h-8"></item.icon>
                <h1 className="text-xl lg:text-2xl  ">{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
