import React from "react";
import Particle2 from "../../../components/Particle2";

export default function Page() {
  return (
    <div className="flex items-center bg-[url('/bg5.jpg')] bg-cover h-screen overflow-hidden">
      <div className="flex flex-col  pb-40 pl-40 gap-4 w-[500px]">
        <a
          target="_blank"
          href="https://github.com/KV-wq"
          className="text-[#ffffff] font-semibold text-7xl underline hover:text-[#33CB66] transition-all duration-500 hover:scale-105"
        >
          KW-wq
        </a>
        <p className="text-green-100 text-base">
          You can view my github repositories by clicking on the link above ↑.
        </p>
      </div>
      <Particle2 />
    </div>
  );
}
