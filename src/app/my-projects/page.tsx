import React from "react";
import Slider from "../../../components/Slider";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-cover bg-[url('/bg2.jpg')] text-white">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-semibold">
            My works <span className="text-red-500">.</span>
          </h1>
          <p className="max-w-96 text-base text-gray-200 md:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            deleniti quaerat iure sunt iusto molestias!
          </p>
        </div>
        <Slider />
      </div>
    </>
  );
}
