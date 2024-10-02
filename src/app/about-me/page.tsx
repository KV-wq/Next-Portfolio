import React from "react";
import Slider2 from "../../../components/Slider2";

export default function Page() {
  return (
    <div className="flex items-center bg-[url('/bg6.png')] h-screen overflow-hidden">
      <div className="pl-20 md:pl-40 flex flex-col gap-3 pb-60 md:pb-10">
        <h1 className="text-5xl font-semibold text-[#ffffff]">
          My Skills <span className="text-red-500">.</span>
        </h1>
        <p className="max-w-96 text-base text-gray-200 md:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio minus
          neque asperiores. Molestiae molestias ut, esse praesentium architecto
          dolores maxime?
        </p>
      </div>
      {/* <div className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-150 ">
        <Image
          src="/assets/bulb.png"
          alt="lampa"
          width={260}
          height={260}
          className="w-hull h-full hidden md:block"
        />
      </div> */}
      <Slider2 />
    </div>
  );
}
