"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "../constants";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="w-[70%] md:w-[41%]">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="mb-14">
          <div className="grid grid-cols-2 gap-5 md:px-20">
            {ProImages.map((image, i) => (
              <div className="relative group w-40 h-40 md:w-56 md:h-56" key={i}>
                <Image
                  src={image.src}
                  alt="preview"
                  width={280}
                  height={280}
                  className="object-cover w-full h-full rounded-lg"
                />
                <div className="cursor-pointer absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-lg" />
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300 text-white md:text-lg rounded-lg">
                  View Project
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-14">
          <div className="grid grid-cols-2 gap-4 md:px-20">
            {ProImages2.map((image, i) => (
              <div className="relative group w-40 h-40 md:w-56 md:h-56" key={i}>
                <Image
                  src={image.src}
                  alt="preview"
                  width={280}
                  height={280}
                  className="object-cover w-full h-full rounded-lg"
                />
                <div className="cursor-pointer absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-5  00 opacity-0 group-hover:opacity-75 transition-opacity duration-300 rounded-lg" />
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300 text-white md:text-lg">
                  View Project
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
